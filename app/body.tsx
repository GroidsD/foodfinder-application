'use client';
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
import Link from 'next/link'
import useScroll from 'next/router';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';

const Body = () => {
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 900) {
                setShowGoTop(true);
            } else {
                setShowGoTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoTopClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    const scroll = useScroll;
    interface Product {
        id: number;
        img: string;
        name: string;
        price: number;
        quantity: number;
    }

    const handleScrollToCart = () => {
        const cartTable = document.getElementById('carttable');
        if (cartTable) {
            cartTable.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const [products, setProducts] = useState<Product[]>([]);
    const handleAddToCart = (product: Product) => {
        const existingProductIndex = products.findIndex((p) => p.id === product.id);

        if (existingProductIndex !== -1) {
            // Product already exists in the cart, update quantity
            const updatedProducts = [...products];
            updatedProducts[existingProductIndex].quantity += 1;
            setProducts(updatedProducts);
        } else {
            // Product doesn't exist in the cart, add it
            setProducts([...products, { ...product, quantity: 1 }]);
        }

        toast.success(`Added ${product.name} to cart successfully!`, {
            className: 'custom-toast',
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const handleDelete = (id: number, e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleQuantityChange = (id: number, quantity: number) => {
        setProducts(
            products.map((product) =>
                product.id === id ? { ...product, quantity } : product
            )
        );
    };

    const totalCost = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const handlePay = () => {
        if (products.length === 0) {
            toast.error('No products in cart. Please add some products before paying.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            setProducts([]);
            toast.success('Payment successful!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    return (

        <div className={styles.bodyStyle}>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <Link href="#carttable" onClick={handleScrollToCart}>
                <button className={styles.CartBtn}>
                    <span className={styles.IconContainer}>
                        <FontAwesomeIcon icon={faShoppingCart} className={styles.icon} />
                    </span>
                    <p className={styles.text}>Go to Cart</p>
                </button>
            </Link>
            <div className={styles.introduce} id='news'>
                <div className={styles.introduceHeader}>
                    <h1> DELICIOUS OFFER</h1>
                    <Image src={title} className={styles.introduceHeaderImg} alt="Responsive image" />
                    <p className={styles.introduceHeaderText}>A caffè corretto is often prepared by simply adding a few drops of the desired spirit into an espresso shot; however in some cases the alcohol is served in a shot alongside the coffee, allowing the customer to pour the quantity they desire</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Image src={icon1} className={styles.introduceBodyImg} alt="Responsive image" />
                            <a href="" className={styles.a}>TYPES OF COFFEE</a>
                            <p>Caffè corretto is an Italian caffeinated alcoholic drink, consisting of a shot of espresso with a small amount of liquor, usually grappa, and sometimes sambuca or brandy.</p>

                        </div>
                        <div className="col-3">
                            <Image src={icon2} className={styles.introduceBodyImg} alt="Responsive image" />
                            <a href="" className={styles.a}>BEAN VARIETIES</a>
                            <p>The variety of beans used in Caffè Corretto can vary depending on personal preference or availability.</p>
                        </div>
                        <div className="col-3">
                            <Image src={icon3} className={styles.introduceBodyImg} alt="Responsive image" />

                            <a href="" className={styles.a}>COFFEE & PASTRY</a>
                            <p>Coffee & Pastry could refer to a variety of things, such as a coffee shop that sells pastries, a type of coffee drink that includes a pastry, or a menu category that includes both coffee and pastries.</p>
                        </div>
                        <div className="col-3">
                            <Image src={icon4} className={styles.introduceBodyImg} alt="Responsive image" />

                            <a href="" className={styles.a}>COFFEE TO GO</a>
                            <p>It likely refers to a coffee drink that is prepared to be taken away and consumed on the go, rather than being served in a sit-down setting.</p>
                        </div>
                    </div>
                </div >
            </div>

            <div className={styles.about} id="about">
                <div className={styles.aboutHeader}>
                    <h1>THE COFFEE HERALD</h1>
                    <img src="/title.jpg" className={styles.aboutHeaderImg} />
                    <p className={styles.aboutHeaderText}>The Coffee Herald would likely provide information and updates about this coffee drink, as well as other coffee-related topics.</p>
                </div>
                <div className={styles.aboutBody}>
                    <div className="row">
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad1.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>PREP TECHNIQUES</a>
                            <p>This is the most common method of brewing coffee in the US. Hot water is poured over coffee grounds in a filter and the brewed coffee drips into a carafe or cup below.</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="./PREPTECHNIQUES.html" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad2.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>FRENCH PRESS</a>
                            <p>Coarsely ground coffee is placed in a French press pot and hot water is added. After a few minutes, the plunger is pressed down, separating the grounds from the brewed coffee.</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="./FRENCHPRESS.html" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-4">
                            <a href="" className={styles.a}><img src="/ad3.jpg" className={styles.aboutBodyImg} /></a>
                            <br />
                            <a href="" className={styles.aboutBodyTitle}>TURKISH IBRIK</a>
                            <p> The unique shape of the ibrik allows for the coffee to be brewed slowly and evenly, resulting in a strong, rich, and flavorful cup of coffee.</p>
                            <div className={styles.aboutBodyReadMore}>
                                <a href="./TURKISHIBRIK.html" className={styles.a}>
                                    <p> --- READ MORE ---</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.shopping} id='menu'>
                <div className={styles.shoppingHeader}>
                    <h1>THE COFFEE BEST SELLER</h1>
                    <img src="/title.jpg" className={styles.shoppingHeaderImg} />
                    <p className={styles.shoppingHeaderText}>A caffè corretto is often prepared by simply adding a few drops of the desired spirit into an espresso shot; however in some cases the alcohol is served in a shot alongside the coffee, allowing the customer to pour the quantity they desire.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product2.jpg" />
                                    <button
                                        style={{ fontWeight: 'bold' }}
                                        onClick={() => handleAddToCart({ id: 1, img: "/product2.jpg", name: 'COLUMBIA COFFEE', price: 21.00, quantity: 1 })}
                                        className="btn btn-warning">
                                        ADD TO CART
                                    </button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p> COLUMBIA COFFEE</p>
                                </a>
                                <p>$21.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product.jpg" />
                                    <button
                                        style={{ fontWeight: 'bold' }}
                                        onClick={() => handleAddToCart({ id: 2, img: "/product.jpg", name: 'ETHIOPIA COFFEE', price: 31.00, quantity: 1 })}
                                        className="btn btn-warning">
                                        ADD TO CART
                                    </button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p> ETHIOPIA COFFEE</p>
                                </a>
                                <p>$31.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product3.jpg" />
                                    <button
                                        style={{ fontWeight: 'bold' }}
                                        onClick={() => handleAddToCart({ id: 3, img: "/product3.jpg", name: 'GUATEMALA COFFEE', price: 28.00, quantity: 1 })}
                                        className="btn btn-warning">
                                        ADD TO CART
                                    </button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p> GUATEMALA COFFEE</p>
                                </a>
                                <p>$28.00</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    <img src="/product1.jpg" />
                                    <button
                                        style={{ fontWeight: 'bold' }}
                                        onClick={() => handleAddToCart({ id: 4, img: "/product1.jpg", name: 'KENYA COFFEE', price: 29.00, quantity: 1 })}
                                        className="btn btn-warning">
                                        ADD TO CART
                                    </button>
                                </div>
                                <a href="" className={styles.a}>
                                    <p>KENYA COFFEE</p>
                                </a>
                                <p>$29.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.gallery} id='gallery'>
                <div className={styles.introduceGallery}>
                    <h1>Our Sweet Gallery</h1>
                    <img src="/title.jpg" />
                    <p className={styles.galleryHeaderText}>Our Sweet Gallery should offer a variety of sweet treats that pair well with coffee, such as pastries, cookies, cakes, doughnuts, biscotti, macarons, brownies, cinnamon rolls, churros, and tarts.</p>
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
            <div className={styles.cartContainer} id="carttable">
                <div style={{ textAlign: "center", marginBottom: "30px" }}>
                    <h1>VIEW CART</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope='col'> Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <tr key={product.id}>
                                    <th scope="row">
                                        <a className={styles.delete} href="" onClick={(e) => handleDelete(product.id, e)}>
                                            X
                                        </a>
                                    </th>
                                    <td>
                                        <img src={product.img} className={styles.img} />
                                        {product.name}
                                    </td>
                                    <td>${product.price.toFixed(2)}</td>
                                    <td>
                                        <div data-mdb-input-init className="form-outline" style={{ width: '22rem' }}>
                                            <i className="fas fa-dollar-sign trailing"></i>
                                            <input
                                                type="number"
                                                id="form1"
                                                min={0}
                                                value={product.quantity}
                                                onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                                                className="form-control form-icon-trailing"
                                                style={{ width: "100%", }}
                                            />
                                        </div>
                                    </td>
                                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center" }}>
                                    Your cart is empty.
                                </td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>TOTAL:</td>
                            <td>${totalCost.toFixed(2)}</td>
                            <td>
                                <button
                                    style={{ fontWeight: 'bold' }}
                                    type='submit'
                                    onClick={handlePay}
                                    className="btn btn-primary">PAYMENT</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div>
                {showGoTop && (
                    <button className={styles.goTop} onClick={handleGoTopClick}>
                        ^
                    </button>
                )}
            </div>
        </div >
    );
};

export default Body;