import React from 'react';
import styles from './body.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import title from "@/public/title.jpg";
import icon1 from "@/public/icon1.jpg";
import icon2 from "@/public/icon2.jpg";
import icon3 from "@/public/icon3.jpg";
import icon4 from "@/public/icon4.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Body = () => {
    return (
        <div className={styles.bodyStyle}>
            <div className={styles.cartButtonContainer}>
                <span className={styles.cartButton}>
                    <p className={styles.pTag}>Add to cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
                </span>
            </div>
            <div className={styles.introduce}>
                <div className={styles.introduceHeader}>
                    <h1>OUR DELICIOUS OFFER</h1>
                    <Image src={title} className={styles.introduceHeaderImg} alt="Responsive image" />
                    <p className={styles.introduceHeaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Image src={icon1} className={styles.introduceBodyImg} alt="Responsive image" />
                            <a href="" className={styles.a}>TYPES OF COFFEE</a>
                            <p>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>

                        </div>
                        <div className="col-3">
                            <Image src={icon2} className={styles.introduceBodyImg} alt="Responsive image" />
                            <a href="" className={styles.a}>BEAN VARIETIES</a>
                            <p>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
                        </div>
                        <div className="col-3">
                            <Image src={icon3} className={styles.introduceBodyImg} alt="Responsive image" />

                            <a href="" className={styles.a}>COFFEE & PASTRY</a>
                            <p>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
                        </div>
                        <div className="col-3">
                            <Image src={icon4} className={styles.introduceBodyImg} alt="Responsive image" />

                            <a href="" className={styles.a}>COFFEE TO GO</a>
                            <p>Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus. Aeneantos commodo</p>
                        </div>
                    </div>
                </div >
            </div>

            <div className={styles.about}>
                <div className={styles.aboutHeader}>
                    <h1>THE COFFEE HERALD</h1>
                    <img src="/title.jpg" className={styles.aboutHeaderImg} />
                    <p className={styles.aboutHeaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore</p>
                </div>
                <div className={styles.aboutBody}>
                    <div className="row">
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad1.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>PREP TECHNIQUES</a>
                            <p>Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                                nisi, nam eget dui. Etiam rhoncus maecenas tempus,</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad2.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>FRENCH PRESS</a>
                            <p>Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                                nisi, nam eget dui. Etiam rhoncus maecenas tempus,</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad3.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>TURKISH IBRIK</a>
                            <p>Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                                nisi, nam eget dui. Etiam rhoncus maecenas tempus,</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.shopping}>
                <div className={styles.shoppingHeader}>
                    <h1>THE COFFEE HERALD</h1>
                    <img src="/title.jpg" className={styles.shoppingHeaderImg} />
                    <p className={styles.shoppingHeaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product.jpg" />
                                    <button>ADD TO CART</button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p>ETHIOPIA COFFEE</p>
                                </a>
                                <p>$15.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product1.jpg" />
                                    <button>ADD TO CART</button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p>KENYA COFFEE</p>
                                </a>
                                <p>$18.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product2.jpg" />
                                    <button>ADD TO CART</button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p>COLUMBIA COFFEE</p>
                                </a>
                                <p>$21.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product3.jpg" />
                                    <button>ADD TO CART</button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p>GUATEMALA COFFEE</p>
                                </a>
                                <p>$25.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.gallery}>
                <div className={styles.introduceGallery}>
                    <h1>Our Sweet Gallery</h1>
                    <img src="/title.jpg" />
                    <p className={styles.galleryHeaderText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore</p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <img src="/port-1-gallery-8.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-9.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-6.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-3.jpg" className={styles.galleryHeaderImg} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-3">
                        <img src="/port-1-gallery-10.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-11.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-1.jpg" className={styles.galleryHeaderImg} />
                    </div>
                    <div className="col-3">
                        <img src="/port-1-gallery-2.jpg" className={styles.galleryHeaderImg} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Body;
