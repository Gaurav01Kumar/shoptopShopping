import React from "react"
import "./dashboard.css"
import { Link } from "react-router-dom"
const Accountdash = () => {
return (
    <>
    <div class="app">
				<header class="app-header">
					<div class="app-header-navigation">
						<div class="tabs">
							<h2 className="dashboard">Dashboard</h2>
						</div>
					</div>
					<div class="app-header-actions dropdown">
						


						<div class="dropdown" style={{ "float": "right;" }}>
							{/* <button class="dropbtn">Right</button> */}
							<button class="user-profile dropbtn" id="profilebutton">
								<span className="adminName">Priyam Sheth</span>
							<span>
								<img src="images/profiles/profile.jpg" />
							</span>
						</button>
							<div class="dropdown-content">
								<Link to="./Dashboard">
									<i class="ph-check-square"></i>
									<span>Orders</span>
								</Link>
								<Link to="./Addressdash">
									<i class="ph-swap"></i>
									<span>Address</span>
								</Link>
								<Link to="./Wishlistdash">
									<i class="ph-file-text"></i>
									<span>Wishlist</span>
								</Link>
								<Link to="./Accountdash">
									<i class="ph-globe"></i>
									<span>Account</span>
								</Link>
								<a href="/Logout">
									<i class="ph-globe"></i>
									<span>Log Out</span>
								</a>

							</div>
						</div>

					</div>
				</header>
				<div class="app-body-account">
					<div class="app-body-navigation">
						<nav class="navigation">
							<Link to="./Dashboard">
								<i class="ph-check-square"></i>
								<span>Orders</span>
							</Link>
							<Link to="./Addressdash">
								<i class="ph-swap"></i>
								<span>Address</span>
							</Link>
							<Link to="./Wishlistdash">
								<i class="ph-file-text"></i>
								<span>Wishlist</span>
							</Link>
							<Link to="./Accountdash">
								<i class="ph-globe"></i>
								<span>Account</span>
							</Link>
							<a href="/Logout">
								<i class="ph-globe"></i>
								<span>Log Out</span>
							</a>
						</nav>
					</div>
                    <div class="app-body-main-content">
					
                        <section class="transfer-section">
							 <div class="transfer-section-header account-section-header">
                                <h2>My Account</h2>
                            </div>
							 
							<form class="dash_form form1">
                                <label>First Name : </label>
                                <input type="text" name="first_name" /><br />
                                <label>Last Name : </label>
                                <input type="text" name="last_name" /><br />
                                <label>E-mail Address : </label>
                                <input type="email" name="email_address" /><br />
                                <label>Contact Number : </label>
                                <input type="number" name="contact_number" /><br />
                                <label>Address : </label><br />
                                <textarea row="10" cols="40"></textarea><br />
								{/* <input type="textarea" name="contact_number" /><br /> */}
                                <button>Submit</button>
								<button className="editbtn">Edit Info</button>
                            </form>
                        </section>
                    </div>
					<div class="dash_form profilepic">
						<h2>Profile Picture</h2>
						<img src="images/profiles/profile.jpg" />
						<button className="editbutton">Edit Image</button>
					</div>
            </div>
    </div>
    </>
)
};
export default Accountdash
