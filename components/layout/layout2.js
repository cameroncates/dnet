import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from './partials/navbar'
import Footer from './partials/footer'
import Sidebar from './partials/sidebar'
import UserHighlights from '../sliders/UserHighlights'
import SimpleSelectOption from '../widgets/SimpleSelectOption'

export default function Layout2({ children }) {

    const [menu, setMenu] = useState([
        { name: "Photo Feed", key: "feed", path: "/profile/feed" },
        { name: "Videos", key: "videos", path: "/profile/videos" },
        { name: "Saved Photos", key: "saved", path: "/profile/saved" },
    ])

    const router = useRouter(),
        tabname = router.pathname.split("/").pop()

    return (
        <>
            <Navbar />
                <div className="container px-0">
                    <div className="row mx-0">
                        <div className="col-lg-4 px-0 mb-5">
                            <Sidebar />
                        </div>
                        <div className="col-lg-8 pl-4 mb-5">     
                            <UserHighlights />                   
                            <div className="border bg-white border-radius__24 mt-4 px-2">
                                <div className="row mx-4 border-bottom my-3 pt-2 pb-3">
                                    <div className="col-lg-8 px-0">
                                        {menu && menu.map((menuitem, key) => (
                                            <Link href={menuitem.path} key={key}>
                                                    <a className="btn bg-transparent mr-1">
                                                        <span className={"transition__3 " + (menuitem.key == tabname ? 'text__primary font-roboto-medium' : 'text__dark font-roboto-light')}>{menuitem.name}</span>
                                                    </a>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="col-lg-4 px-0 text-right align-self-center">
                                        <SimpleSelectOption 
                                            list={
                                                [
                                                    { title: "For 1 Month" },
                                                    { title: "For 2 Month" },
                                                    { title: "For 3 Month" },
                                                    { title: "View All" },
                                                ]
                                            }                                
                                        />
                                    </div>
                                </div>                         
                                {children}           
                            </div>      
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}