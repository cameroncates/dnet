import React from 'react'
import SimpleDropdown from '../widgets/SimpleDropdown'

export default function UserCommentCard(props) {
    let { profile, name, comment, className } = props
    return (

        <div className="d-flex mx-0 px-0 col-lg-12 mt-3">
            <img src={profile}                     
                style={{width: "30px", height: "30px"}}
                className="round__profile__picture mr-1" />                    
            <div className="align-self-center ml-2 w-100">
                <div className="d-flex justify-content-between">
                    <a href="#" className="text-dark small font-roboto-bold mb-0 mt-1">{name}</a>
                    <div className="align-self-start mb-1 mr-2">
                        <div className="dropdown">
                            <button className="btn bg-transparent px-0 text__grey3 py-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="mdi mdi-dots-horizontal"></span>
                            </button>
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

                </div>
                <p className="font-roboto-light text__dark small mb-0 pb-0">{comment}</p>  
                <div className={"col-lg-12 my-2 px-0 text__grey4 d-flex align-items-center font-roboto-light small pb-2 " + className}>
                    <button className="btn bg-transparent py-0 pl-0 pr-1">
                        <span className="text__grey4 small">Likes</span>
                    </button>  
                    <span>|</span>  
                    <button className="btn bg-transparent py-0 px-2">
                        <span className="text__grey4 small">Comments</span>
                    </button>                       
                </div>                                             
            </div>
        </div>       
    )
}
