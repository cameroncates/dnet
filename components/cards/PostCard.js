import React from 'react'
import SimpleDropdown from '../widgets/SimpleDropdown'

export default function PostCard(props) {
    let { username, profile, location, post } = props
    return (
        <div className="border bg-white border-radius__24 mt-4">
            <div className="row mx-0">
                <div className="d-flex mx-0 p-4 col-lg-6">
                    <img src={profile}                     
                        style={{width: "64px", height: "64px"}}
                        className="round__profile__picture" />                    
                    <div className="align-self-center ml-3">
                        <a href="#" className="text-dark font-roboto-bold mb-0">{username}</a>
                        <p className="font-roboto-light text__dark small mb-0 pb-0">{location}</p>
                        <p className="bg-transparent my-0 text__grey4 font-roboto-light">
                            <span className="mr-2 small">23 min ago</span>
                            <img src="/assets/img/post/time.svg" width="16px" />
                        </p>    
                    </div>
                </div>
                <div className="col-lg-6 text-right align-self-center pr-4">
                    <div className="dropdown">
                        <button className="btn bg-transparent px-0 mdi mdi-dots-horizontal mdi-24px text__grey3 py-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                        <SimpleDropdown 
                            list={
                                [
                                    { title: "Save Post", className: "text__dark border-bottom" },
                                    { title: "Unfollow", className: "text__dark border-bottom" },
                                    { title: "Report", className: "text__danger border-bottom" },
                                    { title: "Copy Post Link", className: "text__dark border-bottom" },
                                    { title: "Cancel", className: "text__dark" },
                                ]
                            }    
                        />
                    </div>                    
                </div>
                <div className="col-lg-12">
                    <img src={post} className="w-100 border-radius__8 border" />
                </div>
                <div className="col-lg-12 my-2 px-2 row mx-0">
                    <div className="mx-0 col-lg-8 px-0">
                        <button className="btn bg-transparent py-3">
                            <img src="/assets/img/post/like.svg" width="20px" />
                            <span className="ml-2 text__dark small">28.59k Likes</span>
                        </button>    
                        <button className="btn bg-transparent py-3">
                            <img src="/assets/img/post/comment.svg" width="20px" />
                            <span className="ml-2 text__dark small">32 Comments</span>
                        </button>   
                        <button className="btn bg-transparent py-3">
                            <img src="/assets/img/post/share.svg" width="20px" />
                            <span className="ml-2 text__dark small">02 Share</span>
                        </button>                       
                    </div>
                    <div className="mx-0 col-lg-4 text-right px-0 align-self-center">
                        <button className="btn align-items-center bg-transparent">
                            <img src="/assets/img/post/saved.svg" width="15px" />
                        </button>                         
                    </div>
                </div>
            </div>

        </div>
    )
}
