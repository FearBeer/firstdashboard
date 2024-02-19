import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

import styles from "../ui/dashboard/dashboard.module.scss"; 

function Layout({ children } : Readonly<{children: React.ReactNode;}>) {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                &#34;Макет&#34;
                {children}
            </div>            
        </div>
    )
}

export default Layout;