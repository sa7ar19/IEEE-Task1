import Mockups from '../../assets/illustration-mockups.svg';

export default function Hero(){
    return(
        <div className="bg-bg-hero-desktop bg-cover bg-center h-screen flex flex-between items-center p-20" >
                <div className="left-side flex-1">
                    <h2 className='text-4xl text-very-dark-cyan my-2.5 mx-0 leading-relaxed font-heading font-semibold'>Build The Community <br/>Your Fans Will Love</h2>
                    <p className='font-body my-2.5 mx-0'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
  Create connections with your users as you engage in genuine discussion.</p>
                    <button className='btn-primary'>Get Started For Free</button>
                </div>
                <div className="right side flex-1">
                    <img src={Mockups} alt='mockups'/>
                </div>
                
         
        </div>
    )
}