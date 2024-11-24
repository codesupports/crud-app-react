import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white flex justify-between py-9 px-4">
            <Link to="/">Crud App</Link>
            <nav>
                <ul className="flex gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Add">Add</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;