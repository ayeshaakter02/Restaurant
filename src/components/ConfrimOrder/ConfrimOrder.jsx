import React from 'react'
import './ConfrimOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const ConfrimOrder = () => {

  const { cartItems, food_list, getTotalCartAmount, url } = useContext(StoreContext)


  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cash on Delivery</h2>
          <div>
            <div className="cart-total-details">
                <b>Your Total Bill</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ConfrimOrder