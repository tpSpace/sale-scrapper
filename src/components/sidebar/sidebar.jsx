import './index.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/favorite">Favorite</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/logout">Logout</Link>
        </div>
    );
};

export default SideBar;