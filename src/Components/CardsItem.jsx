import React from 'react'
import {HiArrowCircleDown,HiArrowCircleUp} from 'react-icons/hi'

function CardsItem({id,title,price,img,quantity}) {
 
  return (
    <div>
      <div className='cardsitem__container'>
        <div>
          <img  src={img} alt="items" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>$ {price}</p>
          <button  type='button' className='cardsitem__container-btn'>remove</button>
        </div>
        <div  className='cardsitem__container-quantity'>
          <HiArrowCircleUp className='uparrow-button'/>
          {quantity}
          <HiArrowCircleDown   className='downarrow-button'/>
        </div>
      </div>
    </div>
  )
}

export default CardsItem