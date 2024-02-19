import styles from "./sidebar.module.scss";

interface MenuItem {
    title: string;
    list: Array<MenuListItem>;
}

interface MenuListItem {
    title: string;
    path: string;
    svg: string;
}

const menuItems: Array<MenuItem> = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                svg: "test",
            },
            {
                title: "Users",
                path: "/dashboard/users",
                svg: "test",
            },
            {
                title: "Products",
                path: "/dashboard/products",
                svg: "test",
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                svg: "test",
            },
        ]
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                svg: "test",
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                svg: "test",
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                svg: "test",
            },
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                svg: "test",
            },
            {
                title: "Help",
                path: "/dashboard/help",
                svg: "test",
            },
        ]
    },
]

function Sidebar() {
    return (
        <div className={styles.container}>
            <ul>
                {
                    menuItems.map((item) => {
                        return (
                            <div key={item.title}>{item.title}</div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Sidebar;