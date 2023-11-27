import YourUsers from '../../assets/illustration-your-users.svg';

export default function ThirdCard(){
    return(
    <div className="card">
      <div className="p-4">
        <h4>Your Users</h4>
        <p>It takes no time at all to integrate Huddle with your app's authentication solution. 
          This means, once signed in to your app, your users can start chatting immediately. </p>
      </div>
      <div>
        <img src={YourUsers} alt=""/>
      </div>
    </div>
    )
}