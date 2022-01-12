import React from 'react'

export default function PhotoFeedCard(props) {
    let { img } = props
    return (
        <div className="border-radius__24 bg__light d-flex align-items-center justify-content-center overflow__hidden mb-3" style={{ height: "235px" }}>
            <img src={img} width="100%" />
        </div>
    )
}
