import React from 'react'

import CardsItem from './CardsItem'

import {data } from '../data.js'

function Cards() {
   

    if(data.length <= 0) {
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
        {data.map((items)=><CardsItem key={items.id} {...items}/>)}
      </div>
      <div className='cardies__container-footer'>
          <hr />
      <div className='cardies__container-total'>
        <h3>Total</h3>
        <p>$ 4743534</p>
        
      </div>
     {data.length>0&&(
       <div className='cardies__container-button'>
        <button type='button' className='clear-btn'>clear all</button>
      </div>
     )}
      </div>
    </div>
    </>
  )
}

export default Cards