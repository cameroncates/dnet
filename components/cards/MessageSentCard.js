import React from 'react'

export default function MessageSentCard(props) {
    let {text} = props
    return (
        <div className="row mx-0 justify-content-end my-3 mr-1">
            <div className="col-lg-10 bg__primary__opaque pt-3 pb-2 px-4 border-radius__13">
                <p className="text__dark font-roboto-light mb-1">{text}</p>                                       
                <p className="mb-0 text__grey4 font-roboto-regular small text-right">10:30 AM</p>    
            </div>
        </div>
    )
}
