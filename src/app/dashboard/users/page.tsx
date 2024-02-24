import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.scss";

function UsersPage() {
    return (
        <div className={styles.container}>
            <Search placeholder="Find user..."/>
        </div>
    );
}

export default UsersPage;