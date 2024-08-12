import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

import '../../login-register.css'


const initialValues = { email: '', password: '' }



export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();


    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');

        const { email, password } = values;

        try {
            await login(email, password)
            navigate('/')
        } catch (err) {
            setError("Email or password don't match");
        }
    }

    const { values, handleInputChange } = useForm(initialValues);

    return (
        <>
            <section className="login" id="login" >
                <form className='formLogin' onSubmit={handleLogin}>
                    <div className="formContainer">
                        <div className="bookImg"></div>
                        <h2>Login</h2>
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
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleInputChange}
                            spellCheck="false"
                            required
                        />
                        {error &&
                            <p className="errorMessage">
                                <span>{error}</span>
                            </p>
                        }
                        <input type="submit" value="Login" />
                        <p className="field">
                            <span>You don't have a profile? <Link to="/register">click here</Link></span>
                        </p>
                    </div>
                </form>
            </section >
        </>
    )
}