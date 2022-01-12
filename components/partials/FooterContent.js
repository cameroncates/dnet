import React from 'react'

export default function FooterContent() {
    return (
        <div className="mt-4 mb-5 text__grey4">
            <div className="d-flex align-items-center flex-wrap">
                <a className="text__grey4" href="#">Terms and Conditions</a>
                <span className="px-2">.</span>
                <a className="text__grey4" href="#">Privacy Policy</a>
                <span className="px-2">.</span>
                <a className="text__grey4" href="#">FAQ</a>
                <span className="px-2">.</span>
                <a className="text__grey4" href="#">Locations</a>
            </div>
            <div className="d-flex align-items-center w-100 my-2">
                <img src="/assets/img/dnet1.png" width="44px" />
                <span className="ml-2"> D NET Corporation @2021</span>
            </div>
        </div>
    )
}
