import React from 'react'

export default function ProfileCard() {
    return (
        <div className="border bg-white border-radius__24 mt-5">
            <div className="row mx-0">
                <img src="/assets/img/profile.png" className="round__profile__picture bg__blueaqua__gradient p-1 m-4" />                    
                <div className="align-self-center">
                    <h5 className="font-roboto-bold mb-0">Jennifier Desouza</h5>
                    <p className="font-roboto-regular font-weight-light mb-2">Gamer</p>
                    <button className="btn bg__light2 border-radius__5 py-0 px-3"><span className="small font-roboto-light">Edit Profile</span></button>
                </div>
            </div>
            <div className="row border-top mx-4 pt-3">
                <div className="col-lg-4">
                    <h6 className="font-roboto-bold mb-0">121</h6>
                    <p className="font-roboto-light text__grey4">Post</p>
                </div>
                <div className="col-lg-4">
                    <h6 className="font-roboto-bold mb-0">2.240</h6>
                    <p className="font-roboto-light text__grey4">Following</p>
                </div>
                <div className="col-lg-4">
                    <h6 className="font-roboto-bold mb-0">1,234</h6>
                    <p className="font-roboto-light text__grey4">Followers</p>
                </div>
            </div>
        </div>
    )
}
