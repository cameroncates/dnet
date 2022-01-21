import HeadContent from '../components/partials/HeadContent'

const WhyChooseUs = () => {
    return (
        <div>
            <HeadContent 
                title="Why Choose Us"
                desc="This is a dummy description that will be changed later." />

            <main>
                <div className="border bg-white border-radius__24 mt-5 py-4">
                    <div className="row mx-0 px-4 ">
                        <div className="col-lg-8 pl-0 align-self-center">
                            <h6 className="font-roboto-bold mb-3">Why Choose Us!</h6>
                            <p className="lh__180cent">
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to
                                make a type specimen book
                            </p>
                        </div>
                        <div className="col-lg-4 px-0">
                            <div className="border-radius__24 position-relative">
                                <div className="position-absolute border-radius__24 bg__bluesky__gradient3" style={{ width: "20px", height: "66px", top: "25%", left: "-10px"}}></div>
                                <img src="/assets/img/why_choose_us/why_choose_us.png" className="w-100 border-radius__24" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="row mx-0 px-4">
                            <div className="col-lg-4 px-0">
                                <div className="border-radius__24 position-relative">
                                    <div className="position-absolute border-radius__24 bg__bluesky__gradient3" style={{ width: "20px", height: "66px", top: "25%", right: "-10px"}}></div>
                                    <img className="position-absolute border-radius__20" src="/assets/img/why_choose_us/share_your_stories2.png" width="80px" style={{ top: "-55px", left: "20px"}} />
                                    <img src="/assets/img/why_choose_us/share_your_stories.png" className="w-100 border-radius__24" />
                                </div>
                            </div>
                            <div className="col-lg-8 pr-0 pl-5 align-self-center">
                                <h6 className="font-roboto-bold mb-3">Share your Stories!</h6>
                                <p className="lh__180cent">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>        
                                <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light border-radius__10 py__3px px-4 mt-3 mb-2">
                                    <span className="small px-1">Create Story</span>
                                </button>   
                            </div>
                        </div> 
                        <div className="border w-100 my-5 position-relative">
                            <img src="/assets/img/why_choose_us/download_our_app.png" className="w-100" />
                            <div className="w-100 h-100 d-flex align-items-center justify-content-center bg__darklight__gradient position-absolute" style={{ top: "0px", left: "0px" }}>
                                <div className="text-center">
                                    <h2 className="text-white font-roboto-bold mb-3">Download Our App Now!</h2>
                                    <div className="w-100 text-center">
                                        <button className="btn bg-transparent p-0 mx-2">
                                            <img src="/assets/img/buttons/app_store_btn.svg" width="150px" />
                                        </button>
                                        <button className="btn bg-transparent p-0 mx-2">
                                            <img src="/assets/img/buttons/google_play_btn.svg" width="150px" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>    
                        <div className="row mx-0 px-4 ">
                            <div className="col-lg-8 pl-0 align-self-center">
                                <h6 className="font-roboto-bold mb-3">Connect with People!</h6>
                                <p className="lh__180cent">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to
                                    make a type specimen book
                                </p>   
                                <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light border-radius__10 py__3px px-4 mt-3 mb-2">
                                    <span className="small px-1">Find People</span>
                                </button> 
                            </div>
                            <div className="col-lg-4 px-0">
                                <div className="border-radius__24 position-relative">
                                    <div className="position-absolute border-radius__24 bg__bluesky__gradient3" style={{ width: "20px", height: "66px", top: "25%", left: "-10px"}}></div>
                                    <img src="/assets/img/why_choose_us/connect_with_people.png" className="w-100 border-radius__24" />
                                </div>
                            </div>
                        </div>   
                        <div className="row mx-0 px-4 mt-3">
                            <div className="col-lg-4 px-0">
                                <div className="border-radius__24 position-relative">
                                    <div className="position-absolute border-radius__24 bg__bluesky__gradient3" style={{ width: "20px", height: "66px", top: "25%", right: "-10px"}}></div>
                                    <img src="/assets/img/why_choose_us/upload_your_images.png" className="w-100 border-radius__24" />
                                </div>
                            </div>
                            <div className="col-lg-8 pr-0 pl-5 align-self-center">
                                <h6 className="font-roboto-bold mb-3">Upload your Images,Photos!</h6>
                                <p className="lh__180cent">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to
                                    make a type specimen book                                    
                                </p>   
                                <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light border-radius__10 py__3px px-4 mt-1 mb-2">
                                    <span className="small px-1">Upload</span>
                                </button> 
                            </div>
                        </div>                 
                    </div>
                </div>
            </main>
        </div>
    )
}

WhyChooseUs.layout = "L1"
export default WhyChooseUs