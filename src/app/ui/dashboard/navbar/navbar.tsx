'use client'

import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import Search from "../search/search";

function Navbar() {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                {pathname.split("/").pop()}
            </h3>
            <Search placeholder="Find..." />
        </div>
    );
}

export default Navbar;