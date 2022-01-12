import React from 'react'

export default function RecommendedDesignCard(props) {
    let { profile, username, connections } = props
    return (
        <div className="text-center py-4 px-4 w-100 border__light bg__light3 border-radius__24">
            <img src={profile}                                
                style={{width: "90px", height: "90px"}}
                className="round__profile__picture mx-auto mt-2 mb-1" />  
            <h6 className="mb-1 font-roboto-bold text-dark mt-2 small">{username}</h6>
            <p className="mb-0 font-roboto-light small">{connections}</p>
            <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__4px px-4 mt-3 mb-2">
                <span className="small">Start Following</span>
            </button>                                                    
        </div>
    )
}
