import React from 'react'

export default function UserInvitationsCard(props) {
    let { profile, username, connections } = props
    return (
        <div className="row mx-0 pb-3">
            <div className="d-flex mx-0 col-lg-6">
                <img src={profile}                     
                    style={{width: "58px", height: "58px"}}
                    className="round__profile__picture" />                    
                <div className="align-self-center ml-3">
                    <a href="#" className="text-dark font-roboto-bold mb-0">{username}</a>
                    <p className="font-roboto-light text__dark small mb-0 pb-0">{connections}</p>
                </div>
            </div>
            <div className="col-lg-6 text-right align-self-center pr-4">
                <button type="button" className="btn bg-transparent text-dark font-roboto-light py__3px btn__rounded px-3 mt-3 mb-2 mr-2">
                    <span className="small">Ignore</span>
                </button>          
                <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py__3px px-3 mt-3 mb-2">
                    <span className="small">Start Following</span>
                </button>                          
            </div>
        </div>   
    )
}
