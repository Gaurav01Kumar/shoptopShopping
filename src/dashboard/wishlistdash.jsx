import React from "react"
import "./dashboard.css"
import { Link } from "react-router-dom"
const Wishlistdash = () => {
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
                            <div class="transfer-section-header">
                                <h2>Your Wishlist</h2>
                            </div>
                            <div class="transfers">
                                <div class="transfer">
                                    <div class="transfer-logo">
                                        <img src="images/arrivals/Men/men5.jpg" />
                                    </div>
                                    <dl class="transfer-details">
                                        <div>
                                            <dt>Rider Devil Biker T-shirt</dt>
                                        </div>
                                        <div>
                                            <dt>Color : Black</dt>
                                            <dd>Size : M</dd>
                                        </div>
                                        <div>
                                            <dt><button>Remove</button><button>Buy Now</button></dt>
                                        </div>
                                    </dl>
                                    <div class="transfer-number">
                                        <span>Rs. 350</span>
                                    </div>
                                </div>
                                <div class="transfer">
                                    <div class="transfer-logo">
                                        <img src="images/arrivals/Men/men8.jpg" />
                                    </div>
                                    <dl class="transfer-details">
                                        <div>
                                            <dt>Running Athelete T-shirt</dt>
                                        </div>
                                        <div>
                                            <dt>Color : Yellow</dt>
                                            <dd>Size : L</dd>
                                        </div>
                                        <div>
                                            <dt><button>Remove</button><button>Buy Now</button></dt>
                                        </div>
                                    </dl>
                                    <div class="transfer-number">
                                        <span>Rs. 399</span>
                                    </div>
                                </div>
                                <div class="transfer">
                                    <div class="transfer-logo">
                                        <img src="images/arrivals/Men/men4.jpg" />
                                    </div>
                                    <dl class="transfer-details">
                                        <div>
                                            <dt>Runner Sports T-shirt</dt>
                                        </div>
                                        <div>
                                            <dt>Color : Green</dt>
                                            <dd>Size : XL</dd>
                                        </div>
                                        <div>
                                            <dt><button>Remove</button><button>Buy Now</button></dt>
                                        </div>
                                    </dl>
                                    <div class="transfer-number">
                                        <span>Rs. 349</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Wishlistdash
