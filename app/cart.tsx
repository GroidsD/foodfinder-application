'use client';

import React, { useState } from 'react';
import styles from './cart.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            img: "/product2.jpg",
            name: 'GUATEMALA COFFEE',
            price: 21.00,
            quantity: 0,
        },
        {
            id: 2,
            img: "/product.jpg",
            name: 'COLUMBIA COFFEE',
            price: 31.00,
            quantity: 0,
        },
        {
            id: 3,
            name: 'KENYA COFFEE',
            img: "/product3.jpg",
            price: 28.00,
            quantity: 0,
        },
        {
            id: 4,
            name: 'ETHIOPIA COFFEE',
            img: "/product1.jpg",
            price: 28.00,
            quantity: 0,
        },
    ]);

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

    return (
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
                {products.map((product) => (
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
                                />
                            </div>
                        </td>
                        <td>${(product.price * product.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>TOTAL:</td>
                    <td>${totalCost.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default Cart;