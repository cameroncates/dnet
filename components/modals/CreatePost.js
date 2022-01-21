import React, { useState } from 'react'
import PhotoFeedGallery from '../cards/PhotoFeedGallery'
import User2ndCommentCard from '../cards/User2ndCommentCard'
import SimpleDropdown from '../widgets/SimpleDropdown'
import SimpleSelectOption from '../widgets/SimpleSelectOption'
import SimpleSelectOption2 from '../widgets/SimpleSelectOption2'

export default function CreatePostStep1() {
    const [step, setStep] = useState(1)
    return (
        <div className="modal fade" id="create__post__step1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                
                {/* STEP 1 */}
                <div className="modal-content border-radius__12 transition__3 text-center py-3 px-0">
                    {step == 1 ? 
                            <>
                                <p className="pb-4 border-bottom mt-2">Create New Post</p>
                                <div className="py-4">
                                    <img src="/assets/img/image_upload_dragdrop.svg" width="55px" className="mb-1" />
                                    <p className="pb-2 mt-3">Drag Photos and Videos here</p>

                                    <div className="upload-btn-wrapper">
                                        <button data-dismiss="modal" type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light py-2 border-radius__6 my-1 px-4">
                                            <span className="small">Select from my computer</span>
                                        </button>                            
                                        <input type="file" name="myfile" onChange={() => setStep(2)} />
                                    </div>                                               
                                </div>
                            </>
                    : null}
                    {step == 2 ? 
                        <>
                            <div className="row mx-0 align-items-center">
                                <div className="col-lg-4 text-left">
                                    <button onClick={() => setStep(1)} className="btn p-0 bg-transparent">
                                        <span className="mdi mdi-chevron-left mdi-24px"></span>
                                    </button>
                                </div>
                                <div className="col-lg-4">                            
                                    <p className="mb-0 font-roboto-light">Create New Post</p>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button onClick={() => setStep(3)} className="btn bg-transparent py-0 font-roboto-medium text__primary">Save</button>
                                </div>
                                <div className="col-lg-12 bg__light5 mt-3 px-0">
                                    <img src="/assets/img/post/create_new_post.png" className="w-100" />
                                </div>
                                <div className="col-lg-12 border-bottom px-0">
                                    <textarea className="w-100 text-left font-roboto-light mt-3 px-4 border-0 resize__none" rows="3" placeholder="Write your Message...">
                                    </textarea>
                                </div>
                                <div className="col-lg-12 px-0 px-4">
                                    <div className="row mx-0 border-bottom py-3">
                                        <p className="col-6 px-0 mb-0 text-left font-roboto-light">Select Audiance</p>

                                        <div className="col-6 px-0 text-right align-self-center">
                                            <SimpleSelectOption2 
                                                list={
                                                    [
                                                        { title: "Private" },
                                                        { title: "Public" },
                                                    ]
                                                }                                
                                            />
                                        </div>                                        
                                    </div>
                                    <button onClick={() => setStep("location")} className="col-lg-12 btn px-0 mb-0 bg-transparent text-left font-roboto-light mt-3 pb-3 border-bottom">Add Location</button> 
                                    <div className="row mx-0 py-3">
                                        <p className="col-6 px-0 mb-0 text-left font-roboto-light">Select Audiance</p>

                                        <div className="col-6 px-0 text-right">
                                            <label className="toggle-switch ">
                                                <input type="checkbox" className="checkbox" id="checkbox" />
                                                <span className="switch-btn"></span>
                                            </label>                                            
                                        </div>                                        
                                    </div>
                                </div>
                            </div>                  
                        </>
                    : null}
                    {step == 3 ? 
                        <>
                            <div className="row mx-0 align-items-center">
                                <div className="col-lg-4 text-left">
                                    <button onClick={() => setStep(2)} className="btn p-0 bg-transparent">
                                        <span className="mdi mdi-chevron-left mdi-24px"></span>
                                    </button>
                                </div>
                                <div className="col-lg-4">                            
                                    <p className="mb-0 font-roboto-light">Create New Post</p>
                                </div>
                                <div className="col-lg-4 text-right">
                                    <button data-dismiss="modal" className="btn bg-transparent py-0 font-roboto-medium text__primary">Next</button>
                                </div>
                                <div className="col-lg-12 bg__light5 mt-3 px-0">
                                    <img src="/assets/img/post/create_new_post.png" className="w-100" />
                                </div>
                                <div className="col-lg-12 px-0 mt-3">

                                    <button type="button" className="btn bg__light2 btn__icon mx-2">
                                        <img src="/assets/img/icons/zoom_inout.svg" width="20px" />
                                    </button>          
                                    <button type="button" className="btn bg__light2 btn__icon mx-2">
                                        <img src="/assets/img/icons/crop_image.svg" width="20px" />
                                    </button>      
                                    <button type="button" className="btn bg__light2 btn__icon mx-2">
                                        <img src="/assets/img/icons/addimage.svg" width="20px" />
                                    </button>                                  
                                </div>
                            </div>                  
                        </>
                    : null}
                    {step == "location" ? 
                        <>
                            <div className="row mx-0 align-items-center border-bottom mx-4 pb-2">
                                <div className="col-lg-4 text-left px-0">
                                    <button onClick={() => setStep(2)} className="btn p-0 bg-transparent">
                                        <span className="mdi mdi-chevron-left mdi-24px"></span>
                                    </button>
                                </div>
                                <div className="col-lg-4 px-0">                            
                                    <p className="mb-0 font-roboto-light">Location</p>
                                </div>                                
                            </div>  
                            <div className="row mx-0 px-4 mt-4">
                                <input type="text" className="bg__light2 border-radius__24 px-4 py-2 form-control bg-transparent border-0" placeholder="Search your Location" />                            
                                <div className="w-100 mt-2">
                                    <div className="d-flex mx-0 border-bottom w-100 py-3">
                                        <button type="button" className="btn bg__light2 btn__icon mr-2">
                                            <img src="/assets/img/icons/location.svg" width="25px" />
                                        </button>                                                              
                                        <div className="align-self-center text-left ml-2">
                                            <a href="#" className="text-dark font-roboto-bold mb-0">Lorem Ipsum</a>
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">Dummy text of the printing</p>
                                        </div>
                                    </div>   
                                    <div className="d-flex mx-0 border-bottom w-100 py-3">
                                        <button type="button" className="btn bg__light2 btn__icon mr-2">
                                            <img src="/assets/img/icons/location.svg" width="25px" />
                                        </button>                                                              
                                        <div className="align-self-center text-left ml-2">
                                            <a href="#" className="text-dark font-roboto-bold mb-0">Lorem Ipsum</a>
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">Dummy text of the printing</p>
                                        </div>
                                    </div>   
                                    <div className="d-flex mx-0 border-bottom w-100 py-3">
                                        <button type="button" className="btn bg__light2 btn__icon mr-2">
                                            <img src="/assets/img/icons/location.svg" width="25px" />
                                        </button>                                                              
                                        <div className="align-self-center text-left ml-2">
                                            <a href="#" className="text-dark font-roboto-bold mb-0">Lorem Ipsum</a>
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">Dummy text of the printing</p>
                                        </div>
                                    </div> 
                                    <div className="d-flex mx-0 border-bottom w-100 py-3">
                                        <button type="button" className="btn bg__light2 btn__icon mr-2">
                                            <img src="/assets/img/icons/location.svg" width="25px" />
                                        </button>                                                              
                                        <div className="align-self-center text-left ml-2">
                                            <a href="#" className="text-dark font-roboto-bold mb-0">Lorem Ipsum</a>
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">Dummy text of the printing</p>
                                        </div>
                                    </div> 
                                    <div className="d-flex mx-0 w-100 py-3">
                                        <button type="button" className="btn bg__light2 btn__icon mr-2">
                                            <img src="/assets/img/icons/location.svg" width="25px" />
                                        </button>                                                              
                                        <div className="align-self-center text-left ml-2">
                                            <a href="#" className="text-dark font-roboto-bold mb-0">Lorem Ipsum</a>
                                            <p className="font-roboto-light text__dark small mb-0 pb-0">Dummy text of the printing</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>                
                        </>
                    : null}
                </div>

            </div>
        </div>
    )
}
