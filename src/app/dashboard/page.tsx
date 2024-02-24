import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.scss";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
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
                <Chart />
            </div>
            <div className={styles.rightbar}>
                <Rightbar />
            </div>
        </div>
    );
}

export default Dashboard;