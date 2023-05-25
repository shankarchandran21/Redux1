import React from 'react'
import {BsFillBagPlusFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'
function Navbar() {
const {amount}=useSelector((state)=>state.cart)
    console.log(amount)

  return (
    <div>
         <div className='navbar__container'>
        <div>
            <h1>REDUX</h1>
        </div>
        <div className='navbar__container__card__container'>
            <div className='navbar__container__card__container-bag'>
                <BsFillBagPlusFill fontSize={35} color='white'/>
                
            </div>
            <div className='navbar__container__card__container-count'>
                <p>{amount}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Navbar