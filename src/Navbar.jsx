import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="container mx-auto bg-blue-400">
            <ul className="flex justify-between p-4 text-white font-bold"> 
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar