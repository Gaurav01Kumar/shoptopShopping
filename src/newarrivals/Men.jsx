import React,{useState} from "react"
import Cart from "./Cart"
import "./style.css"
import {Link} from "react-router-dom"
import Ndata from "./Ndata";

//function for find unique filter element 
const uniqueList=[
  ...new Set (Ndata.map((curr)=>{
return curr.category;

})
)
]

const Men = ({ addToCart, val  }) => {
  const [filterData,setFilterData]=useState(Ndata);
//filter function when click any button 
  const filterItem =(category)=>{
   
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


//Color Filter Option 
const ColorFilter=(value)=>{
  value.toLocaleLowerCase();
const updatedValue=Ndata.filter((curr)=>{
  const value2=curr.color.toLocaleLowerCase();
  
  return value2===value;
})

setFilterData(updatedValue);
}

let width = window.innerWidth;
const [show,setShow]=useState(width>1000?false:true);
const [fShow,setfShow]=useState(false);
  return (
    <>
      <section className="NewArrivals background">
      {
      // <div className="sorting_wrapper">
      // <button onClick={()=>setShow(false)}>Sort </button>
      // <div className={show ? "sorting_option_wrapper" : "hello"} >
      //    <button>Most Popular</button>
         
      //    <button>Price low to high</button>
      //    <button>price high to low</button>
      // </div>
      // </div>
      }
      <div className="filterButton">
      <button className ="displayFilter" onClick={()=>setShow(!show)}><h2>Filters &#9663;</h2></button>
      </div>
        <div className="container product_wrapeer">
        <div className={show ? "hide":"filter_wrapper "}>
          <div className="top_heading">
           <h2>Filters</h2> 
           {
            //when user click click all then return Ndata 
           }
           <Link onClick={()=>setFilterData(Ndata)}>CLEAR ALL</Link>
          </div>
           <div className="filterOptions">
           <div id={fShow?"category_Wrapper":" hide_category"}>
           <div id="top_Wrapper">
          <Link > Category </Link>

          <i class="fa fa-caret-down" onClick={()=>setfShow(!fShow)}></i>
          </div>
        {
         uniqueList.map((val)=>{
           
           return(
             <>
             <div className="filterbtn ">
             <span  onClick={()=>filterItem(val)}><input type="radio" name="category" className="filter_btn " onClick={()=>filterItem(val)}/>{val}</span>
             </div>
             </>
           )
         })
        }
        </div>
        </div>
        <div className="priceFilter">
          <div className="filterHeading">
          <h3>Price Filter </h3>
          </div>
          
          <div className="filterbtn">
            <input type="radio" name="radio" value="100"   onClick={(e)=>priceFilter(e.target.value)}/> <h4>  100 to 300</h4>
            
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
            <input type="radio" name="radio" value="RED"   onClick={(e)=>ColorFilter(e.target.value)}/> <h4>  Red</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="BLUE"   onClick={(e)=>ColorFilter(e.target.value)} /> <h4> Blue</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="YELLOW"   onClick={(e)=>ColorFilter(e.target.value)} /> <h4> Yellow</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="BLACK"   onClick={(e)=>ColorFilter(e.target.value)} /> <h4>Black</h4>
            
          </div>
          <div className="filterbtn">
            <input type="radio" name="radio" value="LIGHTGREEN"   onClick={(e)=>ColorFilter(e.target.value)} /> <h4>Light Green</h4>
            
          </div>
        </div>
        </div>
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"   alt="new icon" />
              <h2>Men</h2>
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

export default Men
