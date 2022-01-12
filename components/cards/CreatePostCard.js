import React from 'react'

export default function CreatePostCard() {
    return (
        <div className="border bg-white border-radius__24 mt-4 py-2">
            <div className="row mx-0 py-2 justify-content-around">
                <div className="col-9 px-3">
                    <div className="d-flex mx-0 align-items-center">
                        <img src="/assets/img/profile.png" 
                            style={{width: "42px", height: "42px"}}
                            className="round__profile__picture bg__blueaqua__gradient p__2px" />                                        
                        <input type="text" className="placeholder__light border-0 form-control bg-transparent" placeholder="What’s new Jennifer?"  />
                    </div>
                </div>
                <div className="col-2 align-self-center px-0 text-center">
                    <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py-1">
                        Post it!
                    </button>                        
                </div>
            </div>
        </div>
    )
}
