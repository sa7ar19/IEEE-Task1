import logo from "../../assets/logo.svg";

export default function Navbar(){
    return(
        <nav className="flex justify-between bg-transparent h-20 py-3 px-4 ">
            <img src={logo} alt="logo" className="w-auto m-4"/>
            <button type="button" className="m-2 text-very-dark-cyan bg-white shadow-xl focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-8 py-2.5 me-2 mb-2">Try It Free</button>

        </nav>
    )
}