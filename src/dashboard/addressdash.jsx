import React from "react"
import "./dashboard.css"
import { Link } from "react-router-dom"
const Addressdash = () => {
    return (
        <>
            <div class="app">
                <header class="app-header">
                    <div class="app-header-navigation">
                        <div class="tabs">
                            <h2 className="dashboard">Dashboard</h2>
                        </div>
                    </div>
                    {/* <div class="app-header-actions">
                        <button class="user-profile">
                            <span>Priyam Sheth</span>
                            <span>
                                <img src="images/profiles/profile.jpg" />
                            </span>
                        </button>
                    </div> */}
                    <div class="app-header-actions dropdown">
						


						<div class="dropdown" style={{ "float": "right;" }}>
							{/* <button class="dropbtn">Right</button> */}
							<button class="user-profile dropbtn">
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
                <div class="app-body">
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
                            <div class="transfer-section-header Address-header">
                                <h2>Address</h2>
                            </div>
                            <h3 className="Address-sub-header">Primary Address</h3>
                            <form class="dash_form Address_form" style={{"align":"center"}}>
                                <label>Address Line 1 : </label>
                                <input type="text" name="address-line1" /><br />
                                <label>Address Line 2 : </label>
                                <input type="text" name="address-line2" /><br />
                                <label>Address Line 3 : </label>
                                <input type="text" name="address-line3" /><br />
                                <label>District : </label>
                                <input type="text" name="district" /><br />
                                <label>State : </label>
                                <input type="text" name="state" /><br />
                                <label>Postal Code : </label>
                                <input type="number" name="postal_code" /><br />
                                <button>Add New</button>
                                <button>Edit Info</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Addressdash
