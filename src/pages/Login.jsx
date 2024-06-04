import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { setUser } from '../store/slices/Userslice';
import Header from '../common/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user));
            // Redirigir a starshipsPage
            navigate('/starships');
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <>
            <main className='container text-center mx-auto w-1/2'>
                <div className='login border-2 rounded-md border-primary p-4 my-8'>
                    <form onSubmit={handleLogin}>
                        <label className="input input-bordered flex items-center gap-2 my-6">
                            email
                            <input
                                type="email" className="grow"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 my-6">
                            Password
                            <input
                                type="password" className="grow"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </label>
                        <button className='btn btn-primary my-6' type="submit">Login</button>
                    </form>
                </div>
                <p><Link to="/register">I do not have an account</Link></p>
            </main>
        </>
    );
};

export default Login;
