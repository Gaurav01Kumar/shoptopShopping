import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./product.css"
const productimage=[
    {
        id:1,
        img:"../images/arrivals/Men/men5.jpg" 
    },
    {    id:2,
        img:"../images/arrivals/Men/men2.jpg"
    },
    {
          id:3,
        img:"../images/arrivals/Men/men12.jpg"
    },
    {    id:4,
        img:"../images/arrivals/Men/men1.jpg"
    },
   
]
// const Colorimage=[
//     {
//         id:1,
//         img:"../images/arrivals/Men/men5.jpg" ,
//         Color:"Black"
//     },
//     {    id:2,
//         img:"../images/arrivals/Men/men2.jpg",
//         Color:"yellow"
//     },
//     {
//           id:3,
//         img:"../images/arrivals/Men/men12.jpg",
//         Color:"lightPink"
//     },
//     {    id:4,
//         img:"../images/arrivals/Men/men1.jpg",
//         Color:"Red"
//     },
   
// ]

   

const Product=({addToCart})=>{
    const location=useLocation();
    const img=location.state.diff;
  
    const [quantity,setQuantity]=useState(1);
    const found = location.state.img;
    const [size,setSize]=useState(0);
    const [show  ,setShow]=useState(found);
    const [cname,setCname]=useState(location.state.Color);
    const [toogle,setToogle]=useState(1);
  
   
  const toogleTab=(index)=>{
    setToogle(index)
}


const history=useHistory();
    return<>
 
    <section id="Product_page">
    <div className="product_SectionContainer">
     <div className="left_Container">
     <div className="big_Image_wrapper">
   <img src={show} alt="" />
     </div>
     <div className="small_Images_wrapper">
     {
        productimage.map((ele)=>{
            return(
                <>
                <div className="imgages">
                <img src={ele.img} class="rounded mx-auto d-block" alt="..." onClick={()=>setShow(ele.img)}/>
                </div>
                </>
            )
        })
     }
     
     
   
     </div>
     </div>
     
     <div className="right_Container"> 

     
      <div className="product_Title_Container">
      
      <h1>{location.state.productName}</h1>
      </div>
      <div className="Product_priceWrapper">
      
      <h2>&#8377; {location.state.price}  <span className="Original_price"><del>&#8377; 699</del></span></h2>
      <small>{location.state.discount}% off</small>
     </div>
    
    <div className="product_Color_Wrapper">
    <h3>Color : <span>{cname}</span></h3>
    <div className="Diff_color_product">
    {
        img.map((ele)=>{
            return(
                <>
                <img src={ele.cover2} alt="helko" onClick={()=>setShow(ele.cover2,setCname(ele.Color))} />
                </>
            )
        })
    }
    </div>
    </div>
    
    <div className="product_Size_wrapper">
      <h3>Size </h3>
      <div className="size_btn">
      <button onClick={()=>setSize("S")}>S</button>
      <button onClick={()=>setSize("M")}>M</button>
      <button onClick={()=>setSize("L")}>L</button>
      <button onClick={()=>setSize("XL")}>XL</button>
      </div>
    </div>
    
    <div className="check_pincode_wrapper">
     <input type="number" placeholder="Enter Pincode" />
     <button>CHECK PINCODE</button>
    </div>

    <div className="product_qty_wrapper" >
    <p>Quantity </p>
    <select onClick={(e)=>setQuantity(e.target.value)
    }>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    </select>
    </div>

    <div className="buy_and_Cart_Wrappper">
    <div className="btn">
    <button className="ATCbtn" onClick={() => addToCart()}>Add to Cart </button>
    <button className="BNbtn" onClick={()=>
    {
        
            if(size===0){
                alert("Please Select  Size ")
            }else{
        
     history.push({
        pathname:"/buyproduct",
     
        state:{Name:location.state.productName,
        productImage:show,
        productPrice:location.state.price,
        productQuantity:quantity,
        productSize:size,
        productColor:cname,
     }
    
    })
}
}
    }>Buy Now </button>
    
    </div>
    
    </div>
     <div className="product_Share_wrapper">
     <h3>Spread the Love</h3>
     <div className="Share_img">
     <img src="../images/social/fb.png" alt="" />
     <img src="../images/social/is.png" alt="" />
     <img src="../images/social/tw.png" alt="" />
     <img src="../images/social/whatsapp.png" alt="" />
     <img src="../images/social/pin.png" alt="" />
     </div>
     </div>


     </div>
     </div>
     
     
     

     <div className="Product_Details_Wrapper">
     
     

 
     <artical className="" >
         <div className="btn-container">
             
             <button className="tab-btn active" data-id="history" onClick={()=>toogleTab(1)}>Descripition</button>
             <button className="tab-btn " data-id="vision" onClick={()=>toogleTab(2)}>Additonal information </button>
             <button className="tab-btn " data-id="Goals" onClick={()=>toogleTab(3)}>Reviews</button>
    
         </div>
         <article className="about-content" >
             
             <div className={toogle===3 ? "product_description_content active": "product_description_content"} id="Goals">
                 <h3>Reviews</h3>
                 <p>There are no reviews yet</p>
                  <div className="reviews_Items"></div>
    
                  <div className="newReviews_Section">
                  <p>Use up to 3900 points to purchase this product</p>
                    
    
                  </div>
    
                 
        
               </div>
             
         </article>
     </artical>
     <article className="product_details-content">
         <div className={toogle===1 ? "product_description_content active": "product_description_content"} id="history">
         <h4 className="aboutHdng">INFO- Brave Warrior T-shirt. Stay Motivated Wearing Warrior T-shirt</h4>
         <div className="fitWrapper">
          <h3>REGULAR FIT</h3>
          <ul>
          <li>Fits just right- not too loose, not too tight</li>
          </ul>
         </div>
         <div className="brands">
         
         <h1>Brand - <span>"Moulik</span> </h1>
         <div className="list_item">
          <ul>
          <li>SHORT SLEEVES</li>
          <li>PRINTED</li>
          <li>RIBBED KNIT COLLAR</li>
          <li>COMPOSITION 100% Cotton</li>
          </ul>
         </div>
         </div>
          <div className="produtc_care">
          
           <h2>CARE -</h2>
           <div className="listItem">
           <li>Do not iron on print </li>
           <li><i class="fa-solid fa-washing-machine"></i> Machine wash cold </li>
           <li>Do not bleach  </li>
           <li>Do not wring </li>
           </div>
          </div>   
    
                             
         </div>
     </article>
    
     <article className="product_details-content">
         <div className={toogle===2 ? "product_description_content active": "product_description_content"} id="vision">
             <table>
             <tr>
             <th>Weight </th>
             <td>0.221kg</td>
             </tr>
             <tr>
             <th>Dimension </th>
             <td>20 x 25 x 4 cm</td>
             </tr>
             <tr>
             <th>Color  </th>
             <td>Black , white </td>
             </tr>
             <tr>
             <th>Size </th>
             <td>M, L , XL , XXL</td>
             </tr>
             </table> 
            
               
         </div>
     </article>
         
 
     </div>
    </section>
    </>
}

export default Product;