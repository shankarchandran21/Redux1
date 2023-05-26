import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModel } from '../features/modelSlice'
import { clearCart } from '../features/Features'

function Mode() {
  const dispatch = useDispatch()
  return (
    <div className='modal-container'>
        <div className='modal'>
            <h4>Remove All items from your shopping cart?</h4>
            <div className='btn-container'>
                    <button type='button' className='btn confirm-btn' onClick={()=>{
                      dispatch(closeModel())
                      dispatch(clearCart())
                    }}>Confirm</button>
                    <button type='button' className='btn clears-btn'onClick={()=>dispatch(closeModel())}>Cancel</button>

            </div>
        </div>
    </div>
  )
}

export default Mode