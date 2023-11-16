import React, { useState } from "react"


const Cart = ({ addToCart , val ,Ndata }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div className='content grid product'>
        {Ndata.map((val, index) => {
          return( 
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
              
                <img src={val.cover} alt='' />
                <div className='product-like'>
                  <label>{count}</label> <br />
                  <i className='fa-regular fa-heart' onClick={increment}></i>
                </div>
              </div>
              <div className='product-details'>
                <h3>{val.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>${val.price}.00 </h4>
                  {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                  <button onClick={() => addToCart(val)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
            )
      })}
  
    </div>
  </>
  )
}
      
export default Cart

// For Women 