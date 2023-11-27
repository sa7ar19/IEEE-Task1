import Logo from '../../assets/logo.svg'
import LocationIcon from '../../assets/icon-location.svg';
import PhoneIcon from '../../assets/icon-phone.svg';
import EmailIcon from '../../assets/icon-email.svg';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons';


export default function Footer(){
    return(
        <div className="w-screen my-0 mx-auto overflow-auto px-[40px] bg-very-dark-cyan pt-[2rem] text-very-pale-cyan flex gap-3 justify-between">
    
        <div className="flex flex-col gap-3">
            {/* sec */}
            <div>
                <img src={Logo} alt="logo" className="w-auto"/>
            </div>
            
            <div className="flex gap-3">
                <img src={LocationIcon} alt="" className='mt-2 w-auto h-4'/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua</p>
            </div>
            
            <div className="items-center h-[100%] gap-3 flex justify-start">
                <img src={PhoneIcon} alt=""/>
                <p> +1-543-123-4567</p>
            </div>
            
            <div className="email flex gap-3">
                <img src={EmailIcon} alt=""/>
                <p> example@huddle.com</p>
            </div>
        </div>
        {/* sec2 */}
        <div className="menu-one  hover:border-b-very-pale-cyan">
            <nav>
                <ul>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">What We Do</Link></li>
                <li><Link href="#">FAQ</Link></li>
                </ul>
            </nav>
        </div>
        {/* sec3 */}
        <div>
            <nav>
                <ul>
                <li><Link href="#">Career</Link></li>
                <li><Link href="#">Blog</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
        {/* sec4 */}
        <div className="socials">
            {/* <Link href="#" className='my-0 mx-[10px]'><FontAwesomeIcon icon={faGithub} /></Link> */}
        </div>
  </div>
    )
}