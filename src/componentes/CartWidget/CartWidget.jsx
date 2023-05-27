import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div>
    <i class="bi bi-cart4 cartSize"></i>
        <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-success">
            4
        </span>
    </div>
  )
}

export default CartWidget