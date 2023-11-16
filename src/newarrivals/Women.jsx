import React,{useState} from "react";
import Cart from "./Cart";
import "./style.css";
import Ndata from "./Ndata1";
import {Link} from 'react-router-dom'

//function for find unique filter element 
const uniqueList=[
  ...new Set (Ndata.map((curr)=>{
return curr.category;

})
)
]
const Women = ({addToCart,val}) => {
  const [filterData,setFilterData]=useState(Ndata);

  //filter function when click any button 
  const filterItem =(category)=>{
    console.log("jel")
const updatedList =Ndata.filter((curr)=>{
 return curr.category===category;
});
setFilterData(updatedList)
};
const priceFilter=(value)=>{
  let value1=parseInt(value);
  let value2=value1+100;
 
 const update=Ndata.filter((curr)=>{
   if(value1>=600){
     return curr.price>=600;
   }
   return curr.price>value1 &&  curr.price<value2;
 })
 setFilterData(update)
}


let width = window.innerWidth;
const [show,setShow]=useState(width>1000?false:true);
  return (
    <>
      <section className="NewArrivals background">
      
  
      <div className="filterButton">
      <button className ="displayFilter" onClick={()=>setShow(!show)}><h2>Filters &#9663;</h2></button>
      </div>
        <div className="container product_wrapeer">
        <div className={show ? "hide":"filter_wrapper"}>
        <div className="top_heading">
           <h2>Filters</h2> 
           {
            //when user click click all then return Ndata 
           }
           <Link onClick={()=>setFilterData(Ndata)}>CLEAR ALL</Link>
          </div>
          <div className="filterOptions">
        {

         uniqueList.map((val)=>{
           
           return(
            
             <>
              <div className="filterbtn">
             <span  onClick={()=>filterItem(val)}><input type="radio" name="category" className="filter_btn" onClick={()=>filterItem(val)}/>{val}</span>
             </div>
             </>
           )
         })
        }
        </div>
        <div className="priceFilter">
        <div className="filterHeading">
          <h3>PRICE FILTER </h3>
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="100"   onClick={(e)=>priceFilter(e.target.value)}/> <h4>  200 to 300</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="350"   onClick={(e)=>priceFilter(e.target.value)} /> <h4>  350 to 600</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="600"   onClick={(e)=>priceFilter(e.target.value)} /> <h4> Above 600</h4>
            
          </div>
        </div>
        <div className="priceFilter">
        <div className="filterHeading">
          <h3>Color Filter</h3>
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="100"   onClick={(e)=>priceFilter(e.target.value)}/> <h4>  Red</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="350"   onClick={(e)=>priceFilter(e.target.value)} /> <h4> Blue</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="600"   onClick={(e)=>priceFilter(e.target.value)} /> <h4> Yellow</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="600"   onClick={(e)=>priceFilter(e.target.value)} /> <h4>Black</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="600"   onClick={(e)=>priceFilter(e.target.value)} /> <h4>Light Green</h4>
            
          </div>
        </div>
        </div>
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png" alt="new icon"/>
              <h2>Women </h2>
            </div>
            {/* <div className="heading-right row ">
              <span>Filter</span>
              <i className="fa-solid fa-caret-right"></i>
            </div> */}
          </div>

          <Cart addToCart={addToCart} val={val} Ndata={filterData}/>
        </div>
      </section>
    </>
  );
};

export default Women;
