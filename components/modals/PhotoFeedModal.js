import React from 'react'
import PhotoFeedGallery from '../cards/PhotoFeedGallery'
import User2ndCommentCard from '../cards/User2ndCommentCard'
import SimpleDropdown from '../widgets/SimpleDropdown'

export default function PhotoFeedModal() {
    return (

        <div className="modal fade" id="photo__feed__modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content border-radius__24 transition__3">
                    <div className="row mx-0">
                        <div className="col-lg-7 pl-0 pr-4">    
                            <PhotoFeedGallery />                          
                        </div>
                        <div className="col-lg-5 px-0 mt-4 pr-3">
                            <div className="row mx-0 overflow__auto scrollbar__sm " style={{ height: "625px"}}>
                                <div className="d-flex mx-0 px-0 col-lg-8">
                                    <img src="/assets/img/post/post-profile5.png"                     
                                        style={{width: "54px", height: "54px"}}
                                        className="round__profile__picture" />                    
                                    <div className="align-self-center ml-3">
                                        <a href="#" className="text-dark font-roboto-bold mb-0">Jennifier Desouza</a>
                                        <p className="font-roboto-light text__dark small mb-0 pb-0">California</p>
                                        <p className="bg-transparent my-0 text__grey4 font-roboto-light">
                                            <span className="mr-2 small">23 min ago</span>
                                            <img src="/assets/img/post/time.svg" width="16px" />
                                        </p>    
                                    </div>
                                </div>   
                                <div className="col-lg-4 text-right pl-0">
                                    <div className="dropdown">
                                        <button className="btn bg-transparent px-0 mdi mdi-dots-horizontal mdi-24px text__grey3 py-0" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                        <SimpleDropdown 
                                            list={
                                                [
                                                    { title: "Delete", className: "text__danger border-bottom" },
                                                    { title: "Edit Post", className: "text__dark border-bottom" },
                                                    { title: "Cancel", className: "text__dark" },
                                                ]
                                            }    
                                        />
                                    </div>                    
                                </div>  
                                <p className="col-lg-12 font-roboto-light px-0 lh__180cent small mt-3 mb-1">
                                    It is a long established fact that a reader will be distracted by the readable
                                    content of a page when looking
                                    at its layout. The point of using Loremep
                                    Ipsum is that it has a more-or-less normal distribution of letters, as the
                                    opposed to using 'Content here, content here.  
                                </p> 
                                {/* hashtags  */}
                                <div className="text__primary2 small font-roboto-bold text-align__justify">
                                    <a href="#" className="mr-1">#Art</a>
                                    <a href="#" className="mr-1">#Love</a>
                                    <a href="#" className="mr-1">#Colors</a>
                                    <a href="#" className="mr-1">#Creativity</a>
                                </div>
                                <div className="col-lg-12 my-2 px-0 row mx-0 border-top border-bottom">
                                    <div className="mx-0 col-lg-10 px-0">
                                        <button className="btn bg-transparent py-2 pl-0">
                                            <img src="/assets/img/post/like_pressed.svg" width="18px" />
                                            <span className="ml-1 text__dark small">Likes 190</span>
                                        </button>    
                                        <button className="btn bg-transparent py-2">
                                            <img src="/assets/img/post/comment.svg" width="18px" />
                                            <span className="ml-1 text__dark small">Comments 23</span>
                                        </button>   
                                        <button className="btn bg-transparent py-2">
                                            <img src="/assets/img/post/share.svg" width="18px" />
                                            <span className="ml-1 text__dark small">Share</span>
                                        </button>                       
                                    </div>
                                    <div className="mx-0 col-lg-2 text-right px-0 align-self-center">
                                        <button className="btn align-items-center bg-transparent px-1">
                                            <img src="/assets/img/post/saved.svg" width="12px" />
                                        </button>                         
                                    </div>
                                </div>
                                <User2ndCommentCard
                                    profile="/assets/img/users/user2.png"
                                    name="Markein James"
                                    comment="It is a long established fact that a reader will be dRistracted by the readable
                                    content of a page when looking
                                    at its layout."
                                    className="border-bottom"
                                />  
                                <User2ndCommentCard
                                    profile="/assets/img/users/user1.png"
                                    name="Markein James"
                                    comment="It is a long established fact that a reader will be distracted"
                                    className="border-bottom"
                                />   
                                <User2ndCommentCard
                                    profile="/assets/img/post/post-profile5.png"
                                    name="Jennifier Desouza"
                                    comment="It is a long established fact that a reader will be distracted. Haha!"
                                />                  
                            </div>
                                <div className="mt-4">
                                    <div className="input-group border py-1 my-3 border-radius__35">
                                        <div className="input-group-prepend border-0 pl-3">
                                            <button className="btn bg-transparent py-1 px-1">
                                                <img src="/assets/img/messages/attachments.svg" width="20px" />
                                            </button>        

                                            <button className="btn bg-transparent py-1 px-1">
                                                <img src="/assets/img/messages/emoji.svg" width="20px" />
                                            </button>        
                                        </div>
                                        <input type="text" className="placeholder__light form-control border-0 bg-transparent" placeholder="Write a message...." aria-label="Username" aria-describedby="basic-addon1" />
                                        <div className="input-group-append mr-2">
                                            <div className="align-self-center">
                                                <button type="button" className="btn bg__light5 text-dark font-roboto-light btn__rounded py-0 my-1 px-4">
                                                    <span className="small">Send</span>
                                                </button>                
                                            </div>
                                        </div>                                
                                    </div>                             
                                </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
