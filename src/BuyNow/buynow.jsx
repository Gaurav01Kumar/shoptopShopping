import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./BuyNow.css"
import { Payment } from './payment/Payment';


const BuyNow = () => {
  const location=useLocation();
  const productname=location.state.Name;
  const [qty,setQty]=useState(location.state.productQuantity);
  const [mobile,setMobile]=useState(false);
  const decrease=()=>{
if(qty>=2){
  setQty(qty-1)
}else{
  alert("Quantity will be greater than 1 ")
  setQty(1)
}
  }
  return (
    <>

    {
    /* <div className="buyNow_mainWrapper">
     <div className="buyNowLeftContainer">
      <div className="top_AddressContainer">
        <h1>Address</h1>
      </div>
      <div className='cart-list product d_flex' >
                  <div className='img'>
                    <img src="../images/arrivals/Men/men5.jpg" alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>rr</h3>
                    <h4>
                      item.price.00 * item.qty
                      <span>productQty.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    
                    <div className='cartControl d_flex'>
                      <button className='incCart' >
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' >
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div> 
     </div>
     <div className="buyNowRightContainer">
       <div className="product_price_container">
        <p>Total Price : <span>4455</span></p>
        <p>Discount : <span>90%</span></p>
        <p>Deleviry Charge : <span>50</span></p>
        <p>Total : <span>3453</span></p>
       </div>

     </div>
    
    </div> 
  */}
 
   <div className=" details_card">
       <div className="left_box">
        <button>1</button>
       </div>
       <div className="rightBox">
        <h3>LOGIN</h3>
        <h5>Username & phone Number</h5>
       </div>
  
    </div>
    <div className="details_card">
       <div className="left_box">
        <button>2</button>
       </div>
       <div className="rightBox">
        <h3>DELIVERY ADDRESS</h3>
        <h5>Name ,houseNumber,Area,Town ,State,Pincode</h5>
       </div>
  
    </div>
   <section className='cart-items'>
    {mobile ? (
   <div id=   "titleBox"   >
            <button>3</button> <h1>Order Confirmed</h1>
            </div>
    ):(
        <div className='container d_flex b_flex'>
          <div className='cart-details'>
                <div className='cart-list product d_flex' >
                  <div className='img'>
                    <img src={location.state.productImage} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{productname}</h3>
                     <h3>Color: <span>{location.state.productColor}</span></h3>
                     <h3>Size: <span>{location.state.productSize}</span></h3>
                       <h3 > Price : <span>Rs {location.state.productPrice}</span></h3>
                       
                       
                        <p>Qty:{ qty}</p>
                    
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark' ></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' >
                        <i className='fa-solid fa-plus' onClick={()=>{
                           if(qty>=10){
                            alert("Product Quantity limit exceed  ")
                           }else{
                            setQty(qty+1)
                           }
                          } }
                        ></i>
                      </button>
                      <button className='desCart' >
                        <i className='fa-solid fa-minus'    onClick={()=>{ decrease()} }></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              
            
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h3>Total Product Price :</h3>
              <h3>Rs {location.state.productPrice* qty}</h3>
            </div>
            <div className=' d_flex'>
              <h3>Deleviry Charge :</h3>
              <h3>Rs 40</h3>
            </div>
            <div className=' d_flex'>
              <h3>Total Price :</h3>
              <h3>Rs {location.state.productPrice* qty + 40}</h3>
            </div>
          </div>
        </div>
              )}
        <div className={mobile ? "none" : "order_button" }>
          <p>Orfer Confirmation send to userEmail</p>
          <button onClick={()=>{
            setMobile(!mobile)

          }}>CONTINUE</button>
        </div>


      </section>
      
      <Payment value={mobile}/>
    </>
  )
}

export default BuyNow