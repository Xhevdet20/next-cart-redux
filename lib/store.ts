import {configureStore } from '@reduxjs/toolkit'
import products from './../Components/Products/Products.slice';
import cart from '../Components/Cart/Cart.slice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    products,
    cart
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default store;