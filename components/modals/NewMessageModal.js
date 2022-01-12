import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export default function NewMessageModal() {
    const [users, setUsers] = useState([
        { uid: 1, name: "Jenny Jenny", profile: "/assets/img/home/suggestions/image7.png", checked: false },
        { uid: 2, name: "Adam John", profile: "/assets/img/home/suggestions/image8.png", checked: false },
        { uid: 3, name: "Liza Melson", profile: "/assets/img/home/suggestions/image9.png", checked: false },
        { uid: 4, name: "Jenny Jenny", profile: "/assets/img/home/suggestions/image10.png", checked: false },
        { uid: 5, name: "Adam John", profile: "/assets/img/home/suggestions/image11.png", checked: false },
        { uid: 6, name: "Liza Melson", profile: "/assets/img/home/suggestions/image12.png", checked: false }
    ]),
        [keywords, setKeywords] = useState("")
    function updateUserChecked(uid) {
        let newUsers = [...users]
        newUsers.map((user, i) => {
            if (user.uid == uid) {
                newUsers[i]["checked"] = !newUsers[i]["checked"]
                setUsers(newUsers)
            } 
        })
    }
    function handleKeywords(e) {
        setKeywords(e.target.value)
    }
    function initSwiper() {
        new Swiper(".swiper__newmsg", {
            slidesPerView: 1,
            spaceBetween: 1,
            centeredSlides: false,
            freeMode: false,
            grabCursor: false,
            loop: false,
            autoplay: {
            delay: 1000,
            disableOnInteraction: false
            },
            breakpoints: {
                500: {
                    slidesPerView: "auto"
                },
                700: {
                    slidesPerView: "auto"
                }
            }
        })    
    }

    useEffect(() => {
        initSwiper()
    })
    return (
        <div className="modal fade" id="new__msg__modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content border-radius__24 px-1 transition__3">
                    <div className="modal-header row align-items-center mx-4 mt-3 px-0">
                        <div className="col-lg-3 px-0">
                            <button className="btn bg-transparent p-0 mx-0"  data-dismiss="modal" aria-label="Close">
                                <img src="/assets/img/icons/close.svg" width="12px" />
                            </button>   
                        </div>
                        <div className="col-lg-6 text-center">
                            <p className="font-roboto-light text__dark mb-0 pb-0">Create New Message</p>                        
                        </div>
                        <div className="col-lg-3 text-right px-0">

                            <Link href="/messages/1">
                                <a data-dismiss="modal" className="btn bg-transparent p-0 font-roboto-medium text__primary">Next</a>
                            </Link>                            
                        </div>
                    </div>
                    <div className="modal-body">
                        {/* INPUT FIELD */}
                        <div className="d-flex align-items-center">
                            <p className="font-roboto-medium small mb-0 mr-3">To: </p>
                            <div className="input-group bg__light2 border-radius__35">
                                <div className="input-group-prepend border-0 align-self-center">
                                    <div className="font-roboto-regular ml-2 d-flex" style={{ maxWidth: "205px" }}>
                                        <div className="swiper swiper__newmsg overflow__hidden">
                                            <div className="swiper-wrapper">
                                                {users && users.filter(user => user.checked).map((user, index) => (
                                                    <div key={index} className="swiper-slide px-2 d-inline-block w__auto"> 
                                                        <u className="small text__nowrap">{user.name}</u>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>                                                                                
                                    </div>
                                </div>
                                <input type="text" value={keywords} onChange={handleKeywords} className=" form-control bg-transparent border-0" />
                            </div>                            
                        </div>

                        {/* LIST VIEW */}
                        <form action="#" className="my-4">
                            {users && users.filter(user => user.name.toLowerCase().includes(keywords.toLowerCase())).map((user, index) => (
                                <div onClick={() => updateUserChecked(user.uid)} key={index}   
                                    className={"hover__primary cursor__pointer px-3 py-2 d-flex align-items-center justify-content-between " + (user.checked ? "bg__primary__opaque2" : null)}>
                                    <div className="d-flex mx-0">
                                        <img src={user.profile}                    
                                            style={{width: "28px", height: "28px"}}
                                            className="round__profile__picture" />                    
                                        <div className="align-self-center ml-3">
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">{user.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input onChange={() => updateUserChecked(user.uid)} type="checkbox" id={`user__${user.uid}`} name="radio-group" checked={user.checked} />
                                        <label htmlFor={`user__${user.uid}`}></label>
                                    </div>
                                </div>
                            ))}
                        </form>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}
