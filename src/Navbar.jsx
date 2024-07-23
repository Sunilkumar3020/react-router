import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav>
            <ul>
                <li><Link to="react-router/">Home</Link></li>
                <li><Link to="react-router/about">About Us</Link></li>
                <li><Link to="react-router/project">Project</Link></li>
                <li><Link to="react-router/contact">Contact Us</Link></li>
            </ul>
        </nav>

    )
}
export default Navbar