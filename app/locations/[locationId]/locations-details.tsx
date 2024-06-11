import { LocationType } from "@/mongoose/locations/interface";
import styles from "./locations-details.module.css";

interface PropsInterface {
    location: LocationType;
}

async function LocationsDetails(props: PropsInterface): Promise<JSX.Element> {
    const location = props.location;
    return (
        <div>
            {location && (
                // <ul className={styles.root}>
                //     <li>
                //         <b>ID: </b>
                //         {location.id}
                //     </li>
                //     <li>
                //         <b>Product: </b>
                //         {location.product}
                //     </li>
                //     <li>
                //         <b>Category: </b>
                //         {location.category}
                //     </li>
                //     <li>
                //         <b>Price: </b>
                //         {location.price}
                //     </li>
                // </ul>
                <div className={styles.root}>
                    <div className="row">
                        <div className="col-3">
                            <div className={styles.shoppingBody}>
                                <div className={styles.shoppingBodyImg}>
                                    {/* <img src="/product.jpg" /> */}
                                    <button>{location.category}</button>
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
                                    {/* <img src="/product1.jpg" /> */}
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
                                    {/* <img src="/product2.jpg" /> */}
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
                                    {/* <img src="/product3.jpg" /> */}
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
            )}
        </div>
    );
}

export default LocationsDetails;

