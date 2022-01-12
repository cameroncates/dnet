
import Image from 'next/image'
import CreatePostCard from '../components/cards/CreatePostCard'
import PostCard from '../components/cards/PostCard'
import HeadContent from '../components/partials/HeadContent'
import RecommendedForYou from '../components/sliders/RecommendedForYou'
import UserStories from '../components/sliders/UserStories'

const Home = () => {
    return (
        <div>
            <HeadContent 
                title="Home"
                desc="This is a dummy description that will be changed later." />

            <main>
                <UserStories />
                <CreatePostCard />
                <PostCard 
                    username="Ericaz_Salon"
                    location="Washington, USA"
                    profile="/assets/img/profile.png"
                    post="/assets/img/post/post-image.png"
                />
                <RecommendedForYou />
                <PostCard 
                    username="Milson_Technologies"
                    location="NewYork, City"
                    profile="/assets/img/post/post-profile2.png"
                    post="/assets/img/post/post-image2.png"
                />
            </main>
        </div>
    )
}

Home.layout = "L1"
export default Home