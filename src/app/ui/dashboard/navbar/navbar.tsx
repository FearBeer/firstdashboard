'use client'

import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";

function Navbar() {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {pathname.split("/").pop()}
            </h3>
            <input
                type="text"
                placeholder="Найти..."
                className={styles.serach}
             />
        </div>
    );
}

export default Navbar;