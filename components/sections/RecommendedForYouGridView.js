import React from 'react'
import RecommendedDesignCard from '../cards/RecommendedDesignCard'

export default function RecommendedForYouGridView() {
    return (
        <div className="border bg-white border-radius__24 mt-4">
            <p className="mx-4 mb-0 font-roboto-light border-bottom px-2 pt-4 pb-3 text__dark">Recommendations for you</p>
            <div className="row mx-4 my-4">
                <div className="col-lg-4 px-2 mb-3">
                    <RecommendedDesignCard 
                        profile="/assets/img/post/post-profile4.png" 
                        username="Makelin Iqsem"
                        connections="02 mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image8.png" 
                        username="Joshua"
                        connections="14 mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image9.png" 
                        username="Brian Alian"
                        connections="No mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image10.png" 
                        username="Ronald Iqsem"
                        connections="17 mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image11.png" 
                        username="Gary Makelin"
                        connections="15 mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image12.png" 
                        username="Jonathan Josh"
                        connections="No mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image13.png" 
                        username="Brandon Mark"
                        connections="02 mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image14.png" 
                        username="Patrick Kail"
                        connections="No mutual connections"
                    />
                </div>
                <div className="col-lg-4 px-2 mb-3">                    
                    <RecommendedDesignCard 
                        profile="/assets/img/home/suggestions/image15.png" 
                        username="Henry Adam"
                        connections="No mutual connections"
                    />
                </div>
                <div className="col-lg-12 text-center border-top pt-4 mt-4">                
                    <button className="btn bg-transparent py-0 font-roboto-medium text__primary">Show More</button>
                </div>
            </div>   
        </div>
    )
}
