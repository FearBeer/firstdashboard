import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.scss";
import Transactions from "../ui/dashboard/transactions/transactions";

function Dashboard() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cards}>
                <Card />
                <Card />
                <Card />
            </div>
            <div className={styles.transactions}>
                <Transactions />
            </div>
            <div className={styles.chart}>
                chart
            </div>
            <div className={styles.rightbar}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt corporis pariatur voluptatem a. Quidem laborum sint sunt soluta rerum fugiat possimus maxime voluptas, iusto, doloribus ab perspiciatis nulla similique architecto!
            </div>
        </div>
    );
}

export default Dashboard;