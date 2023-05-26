import React from 'react'

import CardsItem from './CardsItem'

import {data } from '../data.js'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/Features'
import { openModel } from '../features/modelSlice'

function Cards() {
   const {amount,total,cartItems} = useSelector((store)=>store.cart)
  const dispatch = useDispatch()

  console.log(cartItems)
    if(amount<= 0) {
      return<>
        <div className='cards__container-empty'>
          <h1>Your Bag</h1>
          <p>is currently empty</p>
        </div>
      
      </>
    }

    return (
    <>
    <div className='cardies__container'>
      <div className='cardies__container-bag'>
        <h1>Your Bag</h1>
      </div>
      <div className='cardies__container-items'>
        {cartItems?.map((items)=><CardsItem key={items.id} {...items}/>)}
      </div>
      <div className='cardies__container-footer'>
          <hr />
      <div className='cardies__container-total'>
        <h3>Total</h3>
        <p>$ {total}</p>
        
      </div>
     {cartItems?.length>0&&(
       <div className='cardies__container-button'>
        <button type='button' className='clear-btn' onClick={()=>dispatch(openModel())}>clear all</button>
      </div>
     )}
      </div>
    </div>
    </>
  )
}

export default Cards