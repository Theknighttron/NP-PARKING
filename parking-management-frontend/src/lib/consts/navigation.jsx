import {
    HiOutlineViewGrid,
    HiOutlineLogout,
} from 'react-icons/hi';


export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/",
        icon: <HiOutlineViewGrid />
    },

]


export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: "settings",
        label:"Dashboard",
        path: "/map/stats",
        icon: <HiOutlineViewGrid />
    },
    {
        key: "leave",
        label:"Logout",
        path: "/",
        icon: <HiOutlineLogout />        
    }
]
