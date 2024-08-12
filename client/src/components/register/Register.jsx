import { useRegister } from '../../hooks/useAuth'
import { useForm } from '../../hooks/useForm';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../login-register.css'


const initialValues = { email: '', password: '', rePassword: '' };



export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();


    const handleRegister = async (event) => {
        event.preventDefault(); 
        setError('');

        const { email, password, rePassword } = values;


        if (password !== rePassword) {
            setError('Passwords do not match');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            if (err.message.includes('already exists')) {
                setError('Email already exists.');
            } else {
                setError('Registration failed. Please try again.');
            }
        }
    }

    const { values, handleInputChange } = useForm(initialValues);

    return (
        <>
            <section className="register" id="register">
                <form className='formRegister' onSubmit={handleRegister}>
                    <div className="formContainer">
                        <div className="bookImg"></div>
                        <h2>Register</h2>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            spellCheck="false"
                            required
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="rePassword">Confirm password</label>
                        <input
                            type="password"
                            name="rePassword"
                            value={values.rePassword}
                            onChange={handleInputChange}
                            required
                        />
                        {error &&
                            <p className='errorMessage'>
                                <span>{error}</span>
                            </p>
                        }

                        <input type="submit" value="Register" />
                        <p className="field">
                            <span>If you already have a profile <Link to="/login">click here</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    )
}
