import React from 'react'
import ProfileCard from '../../cards/ProfileCard'
import FooterContent from '../../partials/FooterContent'
import SideNavigation from '../../sections/SideNavigation'

export default function Sidebar() {
    return (
        <div>
            <ProfileCard />
            <SideNavigation />
            <FooterContent />
        </div>
    )
}
