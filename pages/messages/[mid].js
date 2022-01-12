import React from 'react'
import { useRouter } from 'next/router'
import HeadContent from '../../components/partials/HeadContent'
import UserStories from '../../components/sliders/UserStories'
import UserInvitationsCard from '../../components/cards/UserInvitationsCard'
import UserConversationBlock from '../../components/cards/UserConversationBlock'
import MessageSentCard from '../../components/cards/MessageSentCard'
import MessageReceivedCard from '../../components/cards/MessageReceivedCard'
import NewMessageModal from '../../components/modals/NewMessageModal'


const Messages = () => {
    const router = useRouter()
    return (
        <div>
            <HeadContent 
                title="Messages"
                desc="This is a dummy description that will be changed later." />

            <main>
                {/* MODALS */}
                <NewMessageModal />

                <div className="border bg-white border-radius__24 mt-5">
                    <div className="row mx-0 align-items-center border-bottom mt-3 px-1 pb-2">
                        <div className="col-lg-6 px-1">
                            <button className="btn bg-transparent py-3"  data-toggle="modal" data-target="#new__msg__modal">
                                <img src="/assets/img/messages/new_msg.svg" width="20px" />
                            </button>                              
                        </div>
                        <div className="col-lg-6">
                            <input type="text" className="placeholder__light px-4 py-2 border-0 form-control bg__light2 border-radius__24" placeholder="Search By Name"  />
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-lg-5 border-right py-3 px-0 overflow__auto scrollbar__sm" style={{ height: "605px"}}>
                            <div className="d-flex align-items-center justify-content-between pl-3 pr-2 mb-3">
                                <h6 className="text-dark font-roboto-bold mb-0 small">All Messages</h6>
                                <button className="btn bg-transparent py-0 px-0 font-roboto-medium text__primary">
                                    <span className="small">Requests (2)</span>
                                </button>
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="It is a long established..."
                                    path="/messages/1"
                                    id="1"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/2"
                                    id="2"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/3"
                                    id="3"
                                    notification="6"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/4"
                                    id="4"
                                    notification="2"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/5"
                                    id="5"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/6"
                                    id="6"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/7"
                                    id="7"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/8"
                                    id="8"
                                />                        
                            </div>
                            <div>
                                <UserConversationBlock 
                                    profile="/assets/img/home/suggestions/image12.png" 
                                    username="Jenny Jenny"
                                    connections="02 mutual connections"
                                    path="/messages/9"
                                    id="9"
                                />                        
                            </div>
                        </div>
                        {router.query.mid >= 0 ? 
                            <div className="col-lg-7 align-self-end px-2">
                                <div>
                                    <div className="overflow__auto scrollbar__sm px-2"  style={{ height: "517px"}}>
                                        {/* Scenario 1 */}
                                        {router.query.mid == "3" ? 
                                            <>
                                                <MessageReceivedCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here,"
                                                />
                                                <MessageSentCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal"
                                                />                                        
                                            </>
                                        : router.query.mid == "2" || router.query.mid == "4" || router.query.mid == "5" || router.query.mid == "6" ?
                                            <>
                                                {/* Scenario 1.1 */}
                                                <MessageReceivedCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here,"
                                                />
                                                <MessageReceivedCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here,"
                                                />
                                                <MessageSentCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal"
                                                />
                                                <MessageReceivedCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                                    opposed to using 'Content here,"
                                                />
                                                <MessageSentCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal"
                                                />
                                                <MessageSentCard 
                                                    text="The point of using Lorem Ipsum is that it has a more-or-less normal"
                                                />                                        
                                            </>                                    
                                        : null }
                                    </div>
                                    {/* Send Message Container */}
                                    <div className="px-2">
                                        <div className="input-group border py-1 my-3 border-radius__35">
                                            <div className="input-group-prepend border-0 pl-3">
                                                <button className="btn bg-transparent py-2 px-1">
                                                    <img src="/assets/img/messages/attachments.svg" width="20px" />
                                                </button>        

                                                <button className="btn bg-transparent py-2 px-1">
                                                    <img src="/assets/img/messages/emoji.svg" width="20px" />
                                                </button>        
                                            </div>
                                            <input type="text" className="placeholder__light form-control border-0 bg-transparent" placeholder="Write a message...." aria-label="Username" aria-describedby="basic-addon1" />
                                            <div className="input-group-append mr-3">
                                                    <button type="button" className="btn bg__bluesky__gradient2 text-white font-roboto-light btn__rounded py-0 my-1 px-4">
                                                        <span className="small">Send</span>
                                                    </button>                
                                            </div>                                
                                        </div>                             
                                    </div>
                                </div>
                            </div>                        
                        
                        :   <div className="col-lg-7 align-self-center px-2">
                                <div className="text-center">
                                    <img src="/assets/img/messages/no_msgs.svg" width="155px" />
                                    <h6 className="text-dark font-roboto-bold mt-4">Send Message</h6>  
                                    <p className="font-roboto-light text__dark small mb-0 pb-0">
                                        Let’s start chat with your Friends!
                                    </p>                                  
                                </div>
                            </div>                        
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

Messages.layout = "L1"
export default Messages
