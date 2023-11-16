import React from 'react'
import "./payment.css"
export const Payment = ({value}) => {
 
  return (

    <>
   
    <div className="paymentConatainer">

    { value ? ( 

<> 
<div className="titleBox">
<button>4</button>  <h1>Payment Option</h1>
 </div>
 <div className="paymentOptionBox">
    <div className="option">
     <input type="radio" name='radio' /> <p>paytm</p>
    </div>
    <div className="option">
     <input type="radio" name='radio' /> <p>Bank</p>
    </div>
    <div className="option">
     <input type="radio" name='radio' /> <p>RazerPay</p>
    </div>
</div>
</>
     )
         :
           ( 
            <div className=   "titleBox"   >
            <button>4</button> <h1>Payment Option</h1>
            </div>
          
           )}
    </div>
    </>
  )
}
