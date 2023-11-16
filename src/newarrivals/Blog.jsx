import React from "react"
import "./style_blog.css"
import { Link } from "react-router-dom"
const Blog = () => {
    return (
        <>
            <h1 className="center">Welcome to Our Blog Page</h1>
            <div className="Container">
                <div className="Box1">
                    <img src="images/blog_images/blog (3).jpg" alt="blog_images" className="blogimgs"/>
                    <h1 className="Blog_head">The Most Innovative Things Happening With T-shirts In 2022
                    <p>The one clothing piece in the apparel industry which never goes out of trend is T-shirt. Whether it’s a graphic tee, over-sized tee, or a body-hugging tee, it is something which is loved by people of all age groups. But also, the trend of custom designed tees has also...</p>
                    <Link to="/blog4"><p className="button_blog">Read More</p></Link>
                 </h1>
                </div>
                <div className="Box1">                
                    <img src="images/blog_images/blog (1).jpg" alt="blog_images" className="blogimgs"/>
                    <h1 className="Blog_head">Customized T-shirts
                    <p>Customization as the name suggests, custom-made. Such a wonderful concept in the apparel industry it is. Customized clothing is all according to your wish. You get your idea of a clothing implemented on that clothing itself, which you can either wear or give as an extraordinary gift to your loved ones. The idea itself of...</p>
                    <Link to="/blog3"><p className="button_blog">Read More</p></Link>
                 </h1>
                </div>
                <div className="Box1">                
                    <img src="images/blog_images/blog (2).jpg" alt="blog_images" className="blogimgs"/>
                    <h1 className="Blog_head">Fashion Would Never Fade Away
                    <p>It is said that fashion would never fade away from any culture, be it for men or women … every type of fashion would continue for ages. fashion is said to be evergreen.  All men and women I am sure would love to explore new fashion styles that will bring on your face a bright...</p>
                    <Link to="/blog2"><p className="button_blog">Read More</p></Link>
                 </h1>
                </div>
                <div className="Box1">             
                    <img src="images/blog_images/blog (4).jpg" alt="blog_images" className="blogimgs"/>
                    <h1 className="Blog_head">What Kind Of Lifestyle Are You Living ?
                    <p>Have you ever heard the phrase, “it’s not a diet, it’s a lifestyle”? This post is truly not about the diet you must follow or something you must follow for being healthy. Here I’ll speak about the concept of a “lifestyle” and the way we use this idea in many aspects of living our lives.One day I got an inspiration within the shower (things always come to you within the shower, haina?)...</p>
                    <Link to="/blog1"><p className="button_blog">Read More</p></Link>
                 </h1>
                </div>
            </div>
        </>
    );
};
export default Blog