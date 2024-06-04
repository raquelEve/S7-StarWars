import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { setUser } from '../store/slices/Userslice';
import Header from '../common/Header';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            dispatch(setUser(userCredential.user));
            // Redirigir a la página starships
            navigate('/starships');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };


    return (
        <>
            <main className='container text-center mx-auto w-1/2'>
                <div className='signup border-2 rounded-md border-primary p-4 my-8'>
                    <form onSubmit={handleRegister}>
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
                            email
                            <input
                                type="password" className="grow"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </label>
                        <button className='btn btn-primary my-6' type="submit">Register</button>
                    </form>
                    <p><Link to="/login">do you have an account?</Link></p>
                </div>
            </main>
        </>
    );
};

export default Register;
