
import PhotoFeedCard from '../../components/cards/PhotoFeedCard'
import HeadContent from '../../components/partials/HeadContent'
const Feed = () => {
    return (
        <div>
            <HeadContent 
                title="Photo Feed"
                desc="This is a dummy description that will be changed later." />

            <main>        
                <div className="row mx-4 pt-2 pb-4">
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/1.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/2.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/3.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/4.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/5.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/6.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/7.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/feed/8.png"    
                        />
                    </div>
                </div>          
            </main>
        </div>
    )
}

Feed.layout = "L2"
export default Feed