import React from 'react'
import TableCard from '../components/TableCard/TableCard'
import {Box, Typography } from '@mui/material'
const BookingPage = () => {
  return (
    <Box className='BookingPage'>
      <Typography className='first-title' variant='h6'>Table Booking</Typography>
      <Typography  className='second-title' variant='h4'>A Culinary Journey Awaits!</Typography>
      <TableCard/>
    </Box>
  )
}

export default BookingPage