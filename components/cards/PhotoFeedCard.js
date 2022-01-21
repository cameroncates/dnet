import React from 'react'
import SimpleDropdown from '../widgets/SimpleDropdown'
import UserCommentCard from './UserCommentCard'
import PhotoFeedGallery from './PhotoFeedGallery'
import User2ndCommentCard from './User2ndCommentCard'
import PhotoFeedModal from '../modals/PhotoFeedModal'

export default function PhotoFeedCard(props) {
    let { img } = props
    return (
        <>
            <div data-toggle="modal" data-target="#photo__feed__modal" className="border-radius__24 bg__light d-flex align-items-center justify-content-center overflow__hidden mb-3" style={{ height: "235px" }}>
                <img src={img} width="100%" />
            </div>
            <PhotoFeedModal />                       
        </>
    )
}
