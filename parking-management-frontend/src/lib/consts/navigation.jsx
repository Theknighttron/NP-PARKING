import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog,
    HiCalendar
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
        path: "/stats",
        icon: <HiOutlineViewGrid />
    },
    {
        key: "support",
        label:"Help and Support",
        path: "/support",
        icon: <HiOutlineQuestionMarkCircle />
    }
]
