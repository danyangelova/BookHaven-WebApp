import { useLogin } from '../../hooks/useLogin';
import { useForm } from '../../hooks/useForm'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import '../../login-register.css'

const initialValues = { email: '', password: '' }



export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();

    const handleLogin = async ({ email, password }) => {
        try {
            await login(email, password)
            navigate('/')

        } catch (err) {
            setError(err.message)
        }
    }

    const { values, handleInputChange, handleSubmit } = useForm(initialValues, handleLogin);

    return (
        <>
            <section className="login" id="login" >
                <form className='formLogin' onSubmit={handleSubmit}>
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
                            <span>You don't have a profile? <a href="#">click here</a></span>
                        </p>
                    </div>
                </form>
            </section >
        </>
    )
}