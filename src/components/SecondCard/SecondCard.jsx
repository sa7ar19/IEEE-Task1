import FlowingConversation from '../../assets/illustration-flowing-conversation.svg';

export default function SecondCard(){
    return(
        <div className="card"> 
        
            <div>
            <img src={FlowingConversation} alt=""/>
            </div>
            <div className="p-6">
            <h4>Flowing Conversations</h4>
            <p className="text-color">You wouldn't paginate a conversation in real life, so why do it online? Our threads 
                have just-in-time loading for a more natural flow.</p>
            </div>
        </div>
    )
}