import React from 'react'
import {HiArrowCircleDown,HiArrowCircleUp} from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { decrease, increase, removeItem } from '../features/Features'

function CardsItem({id,title,price,img,amount}) {
  //useDispatch is like dispatch .it's build in redux
  const dispatch = useDispatch()
  return (
    <div>
      <div className='cardsitem__container'>
        <div>
          <img  src={img} alt="items" />
        </div>
        <div>
          <h5>{title}</h5>
          <p>$ {price}</p>
          <button  type='button' className='cardsitem__container-btn' onClick={()=> dispatch(removeItem(id))} >remove</button>
        </div>
        <div  className='cardsitem__container-quantity'>
          <HiArrowCircleUp className='uparrow-button' onClick={()=>dispatch(increase(id))} />
          {amount}
          <HiArrowCircleDown   className='downarrow-button'  onClick={()=>dispatch(decrease(id))}/>
        </div>
      </div>
    </div>
  )
}

export default CardsItem