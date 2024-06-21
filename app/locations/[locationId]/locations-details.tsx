"use client";
import { LocationType } from "@/mongoose/locations/interface";
import styles from "./locations-details.module.css";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';

interface PropsInterface {
    location: LocationType;
}

async function LocationsDetails(props: PropsInterface): Promise<JSX.Element> {
    const location = props.location;
    interface Product {
        id: number;
        img: string;
        name: string;
        price: number;
        quantity: number;
        remain: string;
    }
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
    return (
        <div>
            {location && (
                <ul className={styles.root}>
                    <li>
                        <b>ID: </b>
                        {location.id}
                    </li>
                    <li>
                        <b>Product: </b>
                        {location.product}
                    </li>
                    <li>
                        <b>Category: </b>
                        {location.category}
                    </li>
                    <li>
                        <b>Price: </b>
                        {location.price}
                    </li>
                    <li>
                        <b>Location: </b>
                        {location.location_id}
                    </li>
                    <li>
                        <b>Remain: </b>
                        {location.remain}
                    </li>
                </ul>
            )}
        </div>
    );
}

export default LocationsDetails;

