import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

export default function UserConversationBlock(props) {
    let { profile, username, connections, path, id, notification } = props
    const router = useRouter()
    return (
        <div className={router.query.mid == id ? "bg__primary__opaque" : null}>
            <Link href={path}>
                <a className="row mx-0 py-3 pl-2 text-decoration__none hover__light border-bottom ml-3">
                    <div className="d-flex col-lg-9 px-0 py-1">
                        <img src={profile}                     
                            style={{width: "48px", height: "48px"}}
                            className="round__profile__picture" />                    
                        <div className="align-self-center ml-2">
                            <div className="d-flex align-items-center">
                                <h6 className="text-dark font-roboto-bold mb-0 mr-2">{username}</h6>
                                {notification ?
                                    <div className="text-white bg__red d-flex align-items-center justify-content-center" style={{ fontSize: "9.5px", width: "16px", height: "16px", borderRadius: "22px"}}>
                                        {notification}
                                    </div>
                                : null}
                            </div>
                            <p className="font-roboto-light text__dark small mb-0 pb-0">
                                {connections} 
                            </p>

                        </div>
                    </div>
                    <div className="col-lg-3 text-right align-self-start pl-0 pr-2">
                        <p className="mb-0 mt-2 text__grey4 font-roboto-regular small">10:30 AM</p>    
                    </div>
                </a>
            </Link>   
        </div>
    )
}
