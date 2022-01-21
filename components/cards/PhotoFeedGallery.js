import React, { useEffect } from 'react'
import SwipeLeftRightSmall from '../sliders/partials/SwipeLeftRightSmall'

import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination]) 

export default function PhotoFeedGallery() {
    function initSwiper() {
        new Swiper(".swiper__photogallery", {
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
                slidesPerView: 1
            },
            700: {
                slidesPerView: 1
            }
            }
        })
    }

    useEffect(() => {
        initSwiper()
    })
    return (

        <div>
            <div className="swiper swiper__photogallery  overflow__hidden position-relative">
                <div className="swiper-wrapper position-relative align-items-center">
                    {/* User Highlights */}
                    <div className="swiper-slide flex-wrap text-center px-5 bg__light5 mx-0">
                        <img src="/assets/img/post/photo.png" className="mb-0" />  
                    </div>
                    <div className="swiper-slide flex-wrap text-center px-5 bg__light5 mx-0">
                        <img src="/assets/img/post/photo.png" className="mb-0" />  
                    </div>
                    <div className="swiper-slide flex-wrap text-center px-5 bg__light5 mx-0">
                        <img src="/assets/img/post/photo.png" className="mb-0" />  
                    </div>
                    <div className="swiper-slide flex-wrap text-center px-5 bg__light5 mx-0">
                        <img src="/assets/img/post/photo.png" className="mb-0" />  
                    </div>
                    <div className="swiper-slide flex-wrap text-center px-5 bg__light5 mx-0">
                        <img src="/assets/img/post/photo.png" className="mb-0" />  
                    </div>
                </div>
                <div className="position-relative d-flex align-items-center justify-content-center my-3">
                    <button type="button" className="btn swiper-button-prev bg__light4 position-relative btn__icon__sm zindex__1000 my-0 box-shadow__dark mx-1" style={{ top: "auto", left: "auto"}}>
                        <i className="mdi mdi-chevron-left text__dark"></i>
                    </button>   
                    <button type="button" className="btn bg__light4 swiper-button-next position-relative btn__icon__sm zindex__1000 my-0 box-shadow__dark mx-1" style={{ top: "auto", right: "auto"}}>
                        <i className="mdi mdi-chevron-right text__dark"></i>
                    </button>                  
                </div>    
            </div>   
        </div>
    )
}
