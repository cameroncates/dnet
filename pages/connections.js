
import Image from 'next/image'
import CreatePostCard from '../components/cards/CreatePostCard'
import PostCard from '../components/cards/PostCard'
import HeadContent from '../components/partials/HeadContent'
import RecommendedForYouGridView from '../components/sections/RecommendedForYouGridView'
import UserInvitations from '../components/sections/UserInvitations'

const Connections = () => {
    return (
        <div>
            <HeadContent 
                title="Connections"
                desc="This is a dummy description that will be changed later." />

            <main>
                <UserInvitations />
                <RecommendedForYouGridView />
            </main>
        </div>
    )
}

Connections.layout = "L1"
export default Connections