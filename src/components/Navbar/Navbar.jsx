import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">BrandName</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;