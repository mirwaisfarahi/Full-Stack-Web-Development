import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="App">
            <h3>React Router DOM</h3>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Navbar;