import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Free Shipping",
      decs: "For Prepaid Orders",
    },
    {
      cover: <i class='fa-solid fa-hand-holding-dollar'></i>,
      title: "Cash On Delivery",
      decs: "Pay Extra For COD",
    },
    {
      cover: <i class='fa-solid fa-certificate'></i>,
      title: "Great Quality ",
      decs: "100% Guarantee",
    },
    {
      cover: <i class="fa-solid fa-piggy-bank"></i>,
      title: "Huge Savings",
      decs: "At Lowest Prices",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
