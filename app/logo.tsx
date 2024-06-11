import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";
import logo from "@/public/logo1.png";


async function Logo(): Promise<JSX.Element> {
    return (
        <Link href="/" passHref className={styles.root}>
            <Image
                src={logo}
                alt="Logo: Food Finder"
                sizes="100vw"
                fill
                priority
            />
        </Link>
    );
}

export default Logo;