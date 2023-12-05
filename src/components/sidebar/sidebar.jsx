import './index.css';
import { Link } from 'react-router-dom';

function removeToken() {
    console.log('remove token');
    localStorage.removeItem('token');
    // window.location.href = '/';
}

const SideBar = () => {
    const isUserLoggedIn = !!localStorage.getItem('token');

    return (
        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            
            <Link to="/login">Login</Link>
            {isUserLoggedIn ? (
                <>
                    <Link to="/favorite">Favorite</Link>
                    <Link to="/" onClick={removeToken}>Logout</Link>
                </>
            ) : (
                <Link to="/register">Register</Link>
            )}
        </div>
    );
};

export default SideBar;