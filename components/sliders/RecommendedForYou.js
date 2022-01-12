import React, { useEffect } from 'react'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export default function RecommendedForYou() {
    function initSwiper() {
        new Swiper(".swiper__recommended", {
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
                    slidesPerView: 2.60
                },
                700: {
                    slidesPerView: 2.60
                }
            }
        })    
    }

    useEffect(() => {
        initSwiper()
    })
    
    return (
        <div className="border bg-white border-radius__24 mt-4">

            <div className="row mx-0 align-items-center py-4 px-2">
                <p className="col-lg-6 mb-0 font-roboto-light">Recommendations for you</p>
                <div className="col-lg-6 text-right px-1">
                    <button className="btn bg-transparent text__grey3 py-0 font-roboto-light text__primary">See All</button>
                </div>
            </div>

            <div className="swiper swiper__recommended overflow__hidden px-4 py-3">
                <div className="swiper-wrapper position-relative align-items-center">
                    <div className="swiper-slide px-2">
                        <div className="text-center py-5 px-4 w-100 border__light bg__light3 border-radius__24">
                            <img src="/assets/img/post/post-profile4.png"                                 
                                style={{width: "90px", height: "90px"}}
                                className="round__profile__picture mx-auto" />  
                            <p className="mb-0 font-roboto-light mt-2 small">Albert Thomas</p>
                            <p className="mb-0 font-roboto-light small">02 mutual connections</p>
                            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3">
                                <span className="small">Start Following</span>
                            </button>                                                    
                        </div>
                    </div>
                    <div className="swiper-slide px-2">
                        <div className="text-center py-5 px-4 w-100 border__light bg__light3 border-radius__24">
                            <img src="/assets/img/post/post-profile5.png"                                 
                                style={{width: "90px", height: "90px"}}
                                className="round__profile__picture mx-auto" />  
                            <p className="mb-0 font-roboto-light mt-2 small">Albert Thomas</p>
                            <p className="mb-0 font-roboto-light small">02 mutual connections</p>
                            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3">
                                <span className="small">Start Following</span>
                            </button>                                                    
                        </div>
                    </div>
                    <div className="swiper-slide px-2">
                        <div className="text-center py-5 px-4 w-100 border__light bg__light3 border-radius__24">
                            <img src="/assets/img/post/post-profile3.png"                                 
                                style={{width: "90px", height: "90px"}}
                                className="round__profile__picture mx-auto" />  
                            <p className="mb-0 font-roboto-light mt-2 small">Albert Thomas</p>
                            <p className="mb-0 font-roboto-light small">02 mutual connections</p>
                            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3">
                                <span className="small">Start Following</span>
                            </button>                                                    
                        </div>
                    </div>
                    <div className="swiper-slide px-2">
                        <div className="text-center py-5 px-4 w-100 border__light bg__light3 border-radius__24">
                            <img src="/assets/img/post/post-profile2.png"                                 
                                style={{width: "90px", height: "90px"}}
                                className="round__profile__picture mx-auto" />  
                            <p className="mb-0 font-roboto-light mt-2 small">Albert Thomas</p>
                            <p className="mb-0 font-roboto-light small">02 mutual connections</p>
                            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3">
                                <span className="small">Start Following</span>
                            </button>                                                    
                        </div>
                    </div>
                    <div className="swiper-slide px-2">
                        <div className="text-center py-5 px-4 w-100 border__light bg__light3 border-radius__24">
                            <img src="/assets/img/post/post-profile4.png"                                 
                                style={{width: "90px", height: "90px"}}
                                className="round__profile__picture mx-auto" />  
                            <p className="mb-0 font-roboto-light mt-2 small">Albert Thomas</p>
                            <p className="mb-0 font-roboto-light small">02 mutual connections</p>
                            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3">
                                <span className="small">Start Following</span>
                            </button>                                                    
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}
