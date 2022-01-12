import React from 'react'
import UserInvitationsCard from '../cards/UserInvitationsCard'

export default function UserInvitations() {
    return (
        <div className="border bg-white border-radius__24 mt-5">
            <p className="mx-4 mb-0 font-roboto-light border-bottom px-2 pt-4 pb-3 text__dark">Invitations</p>
            <div className="row mx-4 my-4">
                <div className="col-lg-12 px-2 mb-3 border-bottom">
                    <UserInvitationsCard 
                        profile="/assets/img/home/suggestions/image7.png" 
                        username="Jenny Jenny"
                        connections="02 mutual connections"
                    />
                </div>
                <div className="col-lg-12 px-2 mb-3 border-bottom">
                    <UserInvitationsCard 
                        profile="/assets/img/home/suggestions/image6.png" 
                        username="John Adam"
                        connections="No mutual connections"
                    />
                </div>
                <div className="col-lg-12 px-2 mb-3 border-bottom">
                    <UserInvitationsCard 
                        profile="/assets/img/home/suggestions/image9.png" 
                        username="Alizah Madiz"
                        connections="10 mutual connections"
                    />
                </div>
                <div className="col-lg-12 px-2 mb-3">
                    <UserInvitationsCard 
                        profile="/assets/img/home/suggestions/image8.png" 
                        username="Makelin Iqsem"
                        connections="23 mutual connections"
                    />
                </div>
                <div className="col-lg-12 text-center border-top pt-3">                
                    <button className="btn bg-transparent py-0 font-roboto-medium text__primary">Show More</button>
                </div>
            </div>   
        </div>
    )
}
