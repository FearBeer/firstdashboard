import styles from "./rightbar.module.scss";

function Rightbar() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.card_notification}>New Feature!</span>
                <h3>How to use new feature</h3>
                <span className={styles.card_info}>Takes 5 min to learn</span>
                <span className={styles.card_description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolorum vel. Dolorem sapiente facere quia, ea voluptates unde quas veniam vitae mollitia fugit sunt, eaque hic vero quo aut quisquam?
                </span>
            </div>
            <div className={styles.card}>
                <span className={styles.card_notification}>Notification</span>
                <h3>How to use new feature</h3>
                <span className={styles.card_info}>Takes 5 min to learn</span>
                <span className={styles.card_description}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, dolorum vel. Dolorem sapiente facere quia, ea voluptates unde quas veniam vitae mollitia fugit sunt, eaque hic vero quo aut quisquam?
                </span>
            </div>
        </div>
    );
}

export default Rightbar;