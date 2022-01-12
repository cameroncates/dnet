
import PhotoFeedCard from '../../components/cards/PhotoFeedCard'
import HeadContent from '../../components/partials/HeadContent'
const Saved = () => {
    return (
        <div>
            <HeadContent 
                title="Saved"
                desc="This is a dummy description that will be changed later." />

            <main>        
                <div className="row mx-4 pt-2 pb-4">
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/1.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/2.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/3.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/4.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/5.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/6.png"    
                        />
                    </div>
                    <div className="col-lg-4 px-2">
                        <PhotoFeedCard 
                            img="/assets/img/profile/saved/7.png"    
                        />
                    </div>
                </div>          
            </main>
        </div>
    )
}

Saved.layout = "L2"
export default Saved