// import React from "react"
// import "./Header.css"
// // import Head from "./Head"
// import Search from "./Search"
// import Navbar from "./Navbar"



// const Header = ({ CartItem }) => {
//   return (
//     <>
//       {/* <Head /> */}
//       <Search CartItem={CartItem} />
//       
//       <Navbar />
//     </>
//   )
// }

// export default Header







import React from "react"
import "./Header.css"
// import Head from "./Head"
import Search from "./Search"
import Navbar from "./Navbar"

 import {BrowserRouter as Router,Route,Switch}  from "react-router-dom"

const Header = ({ CartItem }) => {
  return (
    <>
      {/* <Head /> */}
      <Search CartItem={CartItem} />
      
      <Navbar />
    
     
      
    </>
  )
}

export default Header
