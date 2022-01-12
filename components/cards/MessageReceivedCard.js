import React from 'react'

export default function MessageReceivedCard(props) {
    let {text} = props
    return (
        <div className="row mx-0 my-3 mr-1">
            <div className="d-flex col-lg-12 px-0 mb-3">
                <img src="/assets/img/home/suggestions/image12.png"                   
                    style={{width: "48px", height: "48px"}}
                    className="round__profile__picture" />                    
                <div className="align-self-center ml-2">
                    <h6 className="text-dark font-roboto-bold mb-0">Jenny Jenny</h6>
                </div>
            </div>            

            <div className="col-lg-10 bg__light2 pt-3 pb-2 px-4 border-radius__13">
                <p className="text__dark font-roboto-light mb-1">{text}</p>                                       
                <p className="mb-0 text__grey4 font-roboto-regular small text-right">10:30 AM</p>    
            </div>
        </div>
    )
}
