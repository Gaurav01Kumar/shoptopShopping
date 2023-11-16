import React from 'react';
import "./quickpage.css";

const About=()=>{
    return(
        <>
        <section id = "about_section">
        <div className="heading_about">
            <h1>Our Story</h1>
        </div>
        <div className="about_section_left">
            <img src='./images/quickLink/team.jpg'  alt="about " className="img_about"></img>
            <h1 className='about_heading'>Who we are ?</h1>
        <p className='para_style'><strong className='strong_about'>SHOPTOP</strong> is an E-Commerce Market Place and Platform through where we sell our products. Our Brand has categorized into two sub-brands, one is <strong className='strong_about'>MOULIK</strong> clothing which deals with casual clothing and customized clothing. Whereas, other is <strong className='strong_about'>GYMVERSE</strong> which is an active wear brand which was launched in February, 2022.</p>
        </div>
        <div className="about_section_right">
        <h1 className='about_heading'>How we started ?</h1>
        <p className='para_style'>We started this company in 2021. Back then we used to sell products from a small 10×12 room. We travelled all directions to get the best products for our customer. We started working through Whatsapp groups and with best products and aiming to deliver quality and unique styles, we are here to serve you.</p>
        </div>
        <div className="about_section_left">
            <h1 className='about_heading'>Mission</h1>
        <p className='para_style'>Provide Earth's Biggest best in class and unique collection of apparels with genuine quality standard in all the aspects of business. All the above things, we will make possible by active participation of youth in our Business from all over the world</p>
        </div>
        <div className="about_section_right">
         <h1 className='about_heading'>Vision</h1>
         <p className='para_style'>Our Customer will feel sense of Happiness and Confidence after wearing our Apparels with our equal focus on our Mother Nature.</p>
         </div>
        <div className="about_section_left">
         <h1 className='about_heading'>Aim</h1>
         <p className='para_style'>Our Aim is fast deliveries to our customers and to provide best quality products and services.We also aim to provide Bloggers, Photographers, Artists, Creators a platform to showcase their Art and Talent.</p>
        </div>
        <div className="about_section_right">
         <h1 className='about_heading'>Our Pioneers</h1>
         <h2 className='about_section_left'>Founder | Mr. Novin Moulik</h2>
         <img src='./images/quickLink/novin.jpg' alt="about "  className='img_about_left'></img>
         <p className='para_style'>Founder of SHOPTOP is <strong className='strong_about'>Novin Moulik</strong>. He is a Mechanical Engineer and have vast manufacturing experience. This experience helped us to procure Raw Materials at right price and lean manufacturing process along with building strong team.</p>
         <h2 className='about_section_right'>Co-Founder | Mr. Abhijeet Moulik</h2>
         <img src='./images/quickLink/abhi.jpg'  alt="about " className='img_about_right'></img>
         <p className='para_style'>Co-Founder of SHOPTOP is <strong className='strong_about'>Abhijeet Moulik</strong>. He is a Mechanical Engineer and Artist having strong creative mind that helped us on all the place where we have to design. He had designed website, T-shirts, Active Wear and that leads to get close to our Mission and Vision.</p>
        </div>
        </section>
        </>
    )
}
export default About;