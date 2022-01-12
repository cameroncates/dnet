import React, { useEffect } from 'react'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

export default function UserStories() {

    function initSwiper() {
        new Swiper(".swiper-container", {
            slidesPerView: 1,
            spaceBetween: 1,
            centeredSlides: false,
            freeMode: true,
            grabCursor: false,
            loop: false,
            pagination: {
            el: ".swiper-pagination",
            clickable: true
            },
            autoplay: {
            delay: 1000,
            disableOnInteraction: false
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
            },
            breakpoints: {
            500: {
                slidesPerView: 5.5
            },
            700: {
                slidesPerView: 5.5
            }
            }
        })
    }

    useEffect(() => {
        initSwiper()
    })


    return (
        <div className="border bg-white border-radius__24 mt-5">
            <div className="swiper swiper-container px-4 py-3">
                <div className="swiper-wrapper position-relative align-items-center">
                    {/* Own User Story */}
                    <div className="swiper-slide flex-wrap text-center">
                        <div className="position-relative px-0 mx-0">
                            <img src="/assets/img/home/suggestions/image4.png" className="round__profile__picture bg__dashed__border" style={{padding: "6px"}} />
                            <button className="position-absolute pulse__btn border__transparent" style={{ bottom: 0, right: 13}}>
                                <i className="mdi mdi-plus"></i>
                            </button>         
                        </div>
                        <p className="text__dark2 small mt-2 mb-0">Your Story</p>                      
                    </div>
                    {/* Other User Story */}
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/home/suggestions/image-1.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Yamizi Maq</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/profile.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Mack John</p>   
                    </div>
                    
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/home/suggestions/image-3.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Azua2.dw...</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/home/suggestions/image-2.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">34jennifer...</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/home/suggestions/image5.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Maddy23o...</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/home/suggestions/image6.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Azua2.dw...</p>   
                    </div>
                </div>
            </div>   

            {/* <div className="row mx-0 flex-nowrap overflow__auto scrollbar__transparent">
               
            </div> */}
        </div>
    )
}
