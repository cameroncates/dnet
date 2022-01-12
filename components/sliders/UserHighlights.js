import React, { useEffect } from 'react'

import Swiper, { Navigation, Pagination } from 'swiper'
import SwipeLeftRightSmall from './partials/SwipeLeftRightSmall'
Swiper.use([Navigation, Pagination])

export default function UserHighlights() {

    function initSwiper() {
        new Swiper(".swiper__userhighlights", {
            slidesPerView: 1,
            spaceBetween: 1,
            centeredSlides: false,
            freeMode: true,
            grabCursor: false,
            loop: false,
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
            <div className="swiper swiper__userhighlights  overflow__hidden px-4 py-3 position-relative">
                <div className="swiper-wrapper position-relative align-items-center">
                    {/* User Highlights */}
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/food.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Food</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/nature.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Nature</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/furniture.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Furniture</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/mickwedding.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">MickWedding</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/workholic.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">Workholic</p>   
                    </div>
                    <div className="swiper-slide flex-wrap text-center p-2">
                        <img src="/assets/img/highlights/christmas.png" className="round__profile__picture bg__aquawhite__gradient p-1 mb-0" />  
                        <p className="text__dark2 small mt-1 mb-0">ChristmasS...</p>   
                    </div>
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
                <SwipeLeftRightSmall />          
            </div>   
        </div>
    )
}
