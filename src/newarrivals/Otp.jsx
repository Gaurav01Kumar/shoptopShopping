import React from 'react'
import "./Otp.css"

const Otp = () => {
  return (
    <>
    <div className="mainWrapper">
        <center>
        <div className="otpMainBox">
            <div className="icon_phone">
                {/* <img src="data:image/jpeg;base64,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" alt="" /> */}
                <i className='fa fa-message'></i>
            </div>
            <h1>OTP Validation</h1>
             <p>Enter Your OTP Sent on your email</p>
             <div className="otp_input_box">
               <input type="number"  name='otp' max={1} min={1} />
               <input type="number"  name='otp' max={1} min={1}/>
               <input type="number"  name='otp' max={1} min={1}/>
               <input type="number"  name='otp' max={1} min={1}/>
               <input type="number"  name='otp' max={1} min={1}/>
               <input type="number"  name='otp' max={1} min={1}/>
             </div>
             <p>Don't Recieve OTP</p>
             <span>Resend OTP</span>
             <br />
             <button>Verify</button>
        </div>
        </center>
    </div>
    </>

  )
}

export default Otp