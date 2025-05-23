"use client";
import React from 'react';
import styles from './header.module.css';
import logo from "@/public/logo1.png";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AuthElement from "./auth-element";

const Header = () => {
    return (
        <div>
            <Carousel
                showArrows={true}
                showIndicators={true}
                infiniteLoop={true}
                dynamicHeight={false}
                showThumbs={true}
            >
                <div>
                    <img src="/banner.jpg" alt="image1" className={styles.imgStyle} />

                </div>
                <div>
                    <img src="/banner1.jpg" alt="image2" className={styles.imgStyle} />

                </div>
                <div>
                    <img src="/banner2.jpg" alt="image3" className={styles.imgStyle} />

                </div>
            </Carousel>
            <header className={styles.menuHeader} id="fixed-menu">
                <a href="/"><Image src={logo} alt="Logo" className={styles.logo} width={150} height={70} /></a>
                <nav className={styles.menu}>
                    <ul id="main-menu">
                        <li><a href="/">HOME</a></li>
                        <li><a href="#news">NEWS</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#menu">MENU</a></li>
                        <li><a href="#gallery">GALLERY</a></li>
                        <AuthElement />
                    </ul>
                </nav>
            </header>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"></link>
            <script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"></script>
        </div>
    );
};

export default Header;