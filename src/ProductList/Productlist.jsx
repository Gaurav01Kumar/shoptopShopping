// import React from 'react'
// import "./productList.css"
// import Ndata from './ProductListData'
// const uniqueList=[
//     ...new Set (Ndata.map((curr)=>{
//   return curr.category;
  
//   })
//   )
//   ]

// const ProductList = () => {
//     const [filterData,setFilterData]=useState(Ndata);
//     //filter function when click any button 
//       const filterItem =(category)=>{
       
//     const updatedList =Ndata.filter((curr)=>{
//      return curr.category===category;
//     });
//     setFilterData(updatedList)
//     };
//     const priceFilter=(value)=>{
//        let value1=parseInt(value);
//        let value2=value1+100;
      
//       const update=Ndata.filter((curr)=>{
//         if(value1>=600){
//           return curr.price>=600;
//         }
//         return curr.price>value1 &&  curr.price<value2;
//       })
//       setFilterData(update)
//     }
    
    
//     //Color Filter Option 
//     const ColorFilter=(value)=>{
//       value.toLocaleLowerCase();
//     const updatedValue=Ndata.filter((curr)=>{
//       const value2=curr.color.toLocaleLowerCase();
      
//       return value2===value;
//     })
    
//     setFilterData(updatedValue);
//     }
    
//   return (
//     <>
//     <div className="productList_wrapper">
//        <div className="filterWraper">

//        {
//          uniqueList.map((val)=>{
           
//            return(
//              <>
//              <div className="filterbtn">
//              <span  onClick={()=>filterItem(val)}><input type="radio" name="category" className="filter_btn" onClick={()=>filterItem(val)}/>{val}</span>
//              </div>
//              </>
//            )
//          })
//         }
//         <hr />
//         <br />
//         <br />
//         <div className="priceFilter">
//           <div className="filterHeading">
//           <h3>Price Filter </h3>
//           </div>
          
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="100"   onClick={(e)=>priceFilter(e.target.value)}/> <h4>  200 to 300</h4>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="350"   onClick={(e)=>priceFilter(e.target.value)} /> <h4>  350 to 600</h4>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="600"   onClick={(e)=>priceFilter(e.target.value)} /> <h5> Above 600</h5>
            
//           </div>
//         </div>
//         <br />
//         <hr />
//         <br />
//         <br />
//         <div className="priceFilter">
//         <div className="filterHeading">
//           <h3>COLOR FILTER </h3>
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="RED"   onClick={(e)=>ColorFilter(e.target.value)}/> <h4>  RED</h4>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="BLUE"   onClick={(e)=>ColorFilter(e.target.value)} /> <h4> BLUE</h4>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="YELLOW"   onClick={(e)=>ColorFilter(e.target.value)} /> <h5> YELLOW</h5>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="BLACK"   onClick={(e)=>ColorFilter(e.target.value)} /> <h5>BLACK</h5>
            
//           </div>
//           <div className="filterbtn">
//             <input type="radio" name="radio" value="LIGHTGREEN"   onClick={(e)=>ColorFilter(e.target.value)} /> <h5>LIGHT GREEN</h5>
            
//           </div>
//         </div>
//         </div>

//        </div>
//         <div className="list_wrapper">
//           {
//             Ndata.map((val)=>{
//                 const {cover,name,price}=val;
//                 return (
//                     <>
                   
//             <div className="product_container">
//                 <div className="image_Box">
//                     <img src={cover} id="productImage" alt="product" />
//                 </div>
//                 <div className="productdetailsBox">
//                    <div className="productname">
//                     <h1>{name}</h1>
//                    </div>
//                    <div className="product_price">
//                     <p>{price}</p> <p>cut price </p> <p>discount</p>
//                    </div>
//                    <div className="size_wrapper">
//                     <p>Size </p>
//                    </div>
//                    </div>
//             </div>
//             </>
//                 )
//             })
          
// }


//         </div>
   
    
//     </div>
//     </>
//   )
// }

// export default ProductList