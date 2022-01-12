
import PhotoFeedCard from '../../components/cards/PhotoFeedCard'
import HeadContent from '../../components/partials/HeadContent'
const Videos = () => {
    return (
        <div>
            <HeadContent 
                title="Videos"
                desc="This is a dummy description that will be changed later." />

            <main>        
                <div className="row mx-4 pt-2 pb-4">
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/1.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/2.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/3.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/4.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/5.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/6.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/7.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/videos/8.png"    
                        />
                    </div>
                </div>          
            </main>
        </div>
    )
}

Videos.layout = "L2"
export default Videos