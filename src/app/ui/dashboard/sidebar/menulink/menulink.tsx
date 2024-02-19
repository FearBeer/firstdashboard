'use client'

import Link from "next/link";
import styles from "./menulink.module.scss";
import { MenuSubcategory } from "../sidebar";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
    item: MenuSubcategory,
}

function MenuLink({item}: MenuLinkProps) {
    const pathname = usePathname();
    return (
        <Link
            href={item.path}
            className={
                `${pathname === item.path
                ? `${styles.link} ${styles.active}`
                : styles.link}`
            }
        >
            {item.svg}
            {item.title}
        </Link>
    );
};

export default MenuLink;