import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { AuthContext } from "./AuthContext";
import { auth, db } from "../firebase";
import { ref, set, get, update, remove } from "firebase/database";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const { token, IsAuth } = useContext(AuthContext);

  useEffect(() => {
    const fetchCart = async () => {
      if (auth.currentUser) {
        const uid = auth.currentUser.uid;
        const cartRef = ref(db, `carts/${uid}`);
        const snapshot = await get(cartRef);
        if (snapshot.exists()) {
          setCartItems(snapshot.val());
        } else {
          setCartItems({});
        }
      }
    };

    fetchCart();
  }, [IsAuth]);


  const addToCart = async (itemId) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return alert("Please log in to add items to cart.");

    const newCount = (cartItems[itemId] || 0) + 1;
    const updatedCart = { ...cartItems, [itemId]: newCount };
    setCartItems(updatedCart);

    await update(ref(db, `carts/${uid}`), { [itemId]: newCount });
  };


  const removeFromCart = async (itemId) => {
    const uid = auth.currentUser?.uid;
    if (!uid) return alert("Please log in to manage your cart.");

    const newCount = (cartItems[itemId] || 0) - 1;
    let updatedCart = { ...cartItems };

    if (newCount <= 0) {
      delete updatedCart[itemId];
      await remove(ref(db, `carts/${uid}/${itemId}`));
    } else {
      updatedCart[itemId] = newCount;
      await update(ref(db, `carts/${uid}`), { [itemId]: newCount });
    }

    setCartItems(updatedCart);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getDiscountAmount = () => getTotalCartAmount() * 0.1;

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getDiscountAmount,
    url,
    token,
    IsAuth,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
