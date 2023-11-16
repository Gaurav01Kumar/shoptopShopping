// import React, { useState } from "react"
// import { Link } from "react-router-dom"

// const Navbar = () => {
//   // Toogle Menu
//   const [MobileMenu, setMobileMenu] = useState(false)
//   return (
//     <>
//       <header className="header">
//         <div className="container d_flex">
//           {/* <div className='catgrories d_flex'>
//             <span class='fa-solid fa-border-all'></span>
//             <h4>
//               Categories <i className='fa fa-chevron-down'></i>
//             </h4>
//           </div> */}

//           <div className="navlink">
//             <ul
//               className={
//                 MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
//               }
//               onClick={() => setMobileMenu(false)}
//             >
//               {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
//               <li>
//                 <Link to="/">home</Link>
//               </li>
//               <li>
//                 <Link to="/Men">
//                   Men
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/Women">Women</Link>
//               </li>
//               <li>
//                 <Link to="/kids">Kids</Link>
//               </li>
//               <li>
//                 <Link to="/Customize">Customize</Link>
//               </li>
            
//               <li>
//                 <Link to="/Blog">Blog</Link>
//               </li>
//               <li>
//                 <Link to="/LoginComponent">Login</Link>
//               </li>
//             </ul>

//             <button
//               className="toggle"
//               onClick={() => setMobileMenu(!MobileMenu)}
//             >
//               {MobileMenu ? (
//                 <i className="fas fa-times close home-btn"></i>
//               ) : (
//                 <i className="fas fa-bars open"></i>
//               )}
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Navbar


import React,{useState} from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {

 
  
  const handleclick=()=>{
    console.log("clicked..");
    
    if (document.getElementById('searchdiv').style.visibility !== "hidden") {
      // document.getElementById('searchdiv').style.display = "none";
      document.getElementById('searchdiv').style.visibility  = "hidden";

    console.log("hi..");

    } else {
      // document.getElementById('searchdiv').style.display  = "block";
      document.getElementById('searchdiv').style.visibility = "visible";

      console.log("hello..");
    }
  
  }
  const [isMobile,setIsMobile]=useState(false);
  return (
    <div>
      <nav className='navbar'>
        <ul className={isMobile ?"nav-links-mobile":"nav-links"} 
        onClick={()=>setIsMobile(false)}>

            <Link to="/" className='Home'>
                  <li>Home</li> 
                </Link>
                 <Link to="/Men" className='Men'>
                  <li>Men</li> 
                 </Link>
                 <Link to="/Women" className='Women'>
                  <li>Women</li> 
                 </Link>
            
                 <Link to="/kids" className='kids'>
                  <li>Kids</li></Link>
                  <Link to="/Customize" className='Customize'>
                   <li>Customize</li> 
                    </Link>
                    <Link to="/Blog" className='Blog'>
                      <li>Blog</li></Link>
                      <li class="search1 pos"><button onClick={handleclick}>
        <i class="fa fa-search" aria-hidden="true"></i>Search
      </button></li>
      {/* <div  id="third" style={{display:"none"}} className='search-box2 search-bar f_flex search1'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />

            
          </div> */}

        </ul>
        <button className='mobile-menu-icon'
        onClick={()=> setIsMobile(!isMobile) }
            >
          {isMobile ? (<i className='fas fa-times'></i>) :(<i className='fas fa-bars'></i>)}
            </button>
      </nav>
          </div>
  );
};

export default Navbar;
