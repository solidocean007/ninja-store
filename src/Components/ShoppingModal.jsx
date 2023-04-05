import { useState } from 'react'
import InputBase from './InputBase'

function ShoppingModal() {
  const [ Cart, setCart] = useState({});

  return (
    <div className='store-front'>
      <div className='login-header'>
        // stuff for logging in signin
      </div>
      <div className='featured-items'>
        <div className='item-container'>

        </div>
      </div>

    </div>
  )

}

export default ShoppingModal;