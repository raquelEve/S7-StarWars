import starWarsLogo from '../assets/star_wars_logo_PNG43.webp'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className='flex justify-center'>
                <h1><img src={starWarsLogo} className="h-36" alt="Star Wars logo" /></h1>
            </div>
            <nav className='flex justify-center border-y-2 border-slate-300'>
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'active' : 'navbarLink')}
                        >
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/starships"
                            className={({ isActive }) => (isActive ? 'active' : 'navbarLink')}
                        >
                            Starships
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
