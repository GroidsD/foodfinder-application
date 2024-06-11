import Link from "next/link";
import Image from "next/image";
import styles from "./logoMenu.module.css";
import logo from "@/public/logo1.png";


async function LogoMenu(): Promise<JSX.Element> {
    return (
        <Link href="/" passHref className={styles.logo}>
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

export default LogoMenu;