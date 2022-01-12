import React from 'react'

export default function SwipeLeftRightSmall() {
    return (
        <>
            <button type="button" className="btn swiper-button-prev bg__light4 btn__icon__sm position-absolute zindex__1000 my-0 box-shadow__dark" style={{ top: "44%", left: "5px"}}>
                <i className="mdi mdi-chevron-left text__dark"></i>
            </button>   
            <button type="button" className="btn bg__light4 swiper-button-next btn__icon__sm position-absolute zindex__1000 my-0 box-shadow__dark" style={{ top: "44%", right: "5px"}}>
                <i className="mdi mdi-chevron-right text__dark"></i>
            </button>                  
        </>
    )
}
