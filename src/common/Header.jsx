import React from 'react';
import starWarsLogo from '../assets/star_wars_logo_PNG43.webp'
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, Navigate, useLocation } from "react-router-dom";
import { clearUser } from '../store/slices/Userslice';

const Header = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const location = useLocation();

    const handleLogout = () => {
        // Limpiar el usuario en el estado global
        dispatch(clearUser());
        return <Navigate to="/" replace />;

    };

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const welcomeMessage = 'Welcome to the Republic!';
    return (
        <>

            <div className='flex justify-end p-4'>
                <div className='flex justify-end p-4 items-center'>
                    {user ? (
                        <>
                            <span>Hello {user.email}</span>
                            <button onClick={handleLogout} className='btn btn-primary  btn-sm ml-2'>Logout</button>
                        </>
                    ) : (
                        (!isLoginPage && !isRegisterPage) ? (
                            <Link to="/login" className='btn btn-primary  btn-sm ml-2'>login</Link>
                        ) : (
                            <span>{welcomeMessage}</span>
                        )
                    )}
                </div>
            </div>
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
        </>
    );
}

export default Header;
