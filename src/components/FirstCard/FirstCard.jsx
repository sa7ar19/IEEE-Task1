import GrowTogether from '../../assets/illustration-grow-together.svg';

export default function FirstCard(){
    return(
        <>
            <div className="card">
                <div className='p-4'>
                    <h4>Grow Together</h4>
                    <p>Generate meaningful discussions with your audience and build a strong, loyal community. 
                    Think of the insightful conversations you miss out on with a feedback form. </p>
                </div>
                <div>
                    <img src={GrowTogether} alt="" />
                </div>
            </div>
        </>
    )
}