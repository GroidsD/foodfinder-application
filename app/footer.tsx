import Image from "next/image";
import logo from "@/public/logo1.png";
import styles from "./footer.module.css";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

async function Footer(): Promise<JSX.Element> {
    return (
        <footer className={styles.footerContainer}>
            <Image src={logo} alt="Logo" className="logo" width={200} height={100} />
            <div className={styles.textwidget}>
                <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"}</p>
                <p>{"incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"}</p>
                <p>{"nostrud exercitation ullamco laboris."}</p>
            </div>
            <div className="container" style={{ marginTop: 50 }}>
                <h5 className={styles.titleStore}>STORES</h5>
                <div className={styles.direction}>
                    <p>
                        <a className={styles.a}
                            href="https://www.google.rs/maps/place/S+Dunsmuir+Ave,+Los....3499286"
                            target="_blank"
                            rel="noopener"
                        >
                            Dunsmuir Ave, Los Angeles, CA 90036, USA
                        </a>
                    </p>
                    <p>
                        <a className={styles.a}
                            href="https://www.google.rs/maps/place/Atkins+Ave,+Brookly....8775764"
                            target="_blank"
                            rel="noopener"
                        >
                            Atkins Ave, Brooklyn, NY 11208, USA
                        </a>
                    </p>
                </div>
            </div>
        </footer >

    );
};

export default Footer;