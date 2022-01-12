import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function SideNavigation() {
    const [menu, setMenu] = useState([
        { name: "Home", key: "", path: "/", iconDark: "/assets/img/side-navigation/home.svg", iconPrimary: "/assets/img/side-navigation/home_active.svg" },
        { name: "Connections", key: "connections", path: "/connections", iconDark: "/assets/img/side-navigation/connection.svg", iconPrimary: "/assets/img/side-navigation/connections_active.svg" },
        { name: "My Profile", key: "profile", path: "/profile/feed", iconDark: "/assets/img/side-navigation/profile.svg", iconPrimary: "/assets/img/side-navigation/profile_active.svg" },
        { name: "Messages", key: "messages", path: "/messages/-1", iconDark: "/assets/img/side-navigation/message.svg", iconPrimary: "/assets/img/side-navigation/messages_active.svg" },
        { name: "Why Choose Us", key: "why-choose-us", path: "/why-choose-us" , iconDark: "/assets/img/side-navigation/whychooseus.svg", iconPrimary: "/assets/img/side-navigation/whychooseus_active.svg" },
        { name: "Settings", key: "settings", path: "/settings", iconDark: "/assets/img/side-navigation/setting.svg", iconPrimary: "/assets/img/side-navigation/setting_active.svg" },
    ])

    const router = useRouter(),
        pathname = router.pathname.split("/")[1] // GET THE CONTROLLER
    return (
        <div className="border bg-white border-radius__24 mt-4 pl-4 py-4">
            {menu && menu.map((menuitem, key) => (
                <Link href={menuitem.path} key={key}>
                        <a className={"btn hover__light w-100 bg-transparent py-3 d-flex align-items-center " + (key < (menu.length - 1) ? "border-bottom" : null)}>
                            <img src={pathname == menuitem.key ? menuitem.iconPrimary : menuitem.iconDark} width="20px" />
                            <span 
                                className={"ml-3 " + (pathname == menuitem.key ? 'text__primary font-roboto-medium' : 'text__dark')}>{menuitem.name}</span>
                        </a>
                </Link>
            ))}
        </div>
    )
}
