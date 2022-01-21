import React from 'react'
import logo from '../../../public/assets/img/home/header/D net_icon.svg'
import notificationBell from '../../../public/assets/img/home/header/notification_icon.svg'
import searchIcon from '../../../public/assets/img/home/header/search_icon.svg'

export default function navbar() {
    return (
        <div className="bg__bluesky__gradient container-fluid px-0">
            <div className="container px-0">
                <div className="row mx-0 align-items-center justify-content-between">
                    <div className="col-lg-2">
                        <img src={logo.src} width="120px" />
                    </div>
                    <div className="col-lg-8 py-4 text-right">
                        <div className="d-flex justify-content-end">
                            <div className="input-group mr-4" style={{borderRadius: "35px", backgroundColor: "rgba(255, 255, 255, 0.25)"}}>
                                <div className="input-group-prepend border-0">
                                    <span  
                                        style={{borderRadius: "35px 0px 0px 35px"}} 
                                        className="input-group-text bg-transparent pl-4 pr-1 border-0">
                                            <img src={searchIcon.src} width="16px" />
                                        </span>
                                </div>
                                <input style={{borderRadius: "0px 35px 35px 0px"}} type="text" className="placeholder__white form-control border-0 bg-transparent text-white" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>                        

                            <button type="button" data-toggle="modal" data-target="#create__post__step1"  className="btn bg-white box-shadow__dark font-roboto-regular btn__rounded mr-4">
                                Create Post
                            </button>     
                            <button type="button" className="btn bg-white btn__icon box-shadow__dark">
                                <span className="position-relative">
                                    <img src={notificationBell.src} width="22px" />
                                    <span className=" position-absolute bg-danger text-white" style={{ fontSize: "7.5px", width: "11px", height: "11px", borderRadius: "22px", top: "0px", right: "-2px"}}>6</span>
                                </span>
                            </button>                        

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
