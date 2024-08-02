import { useRegister } from '../../hooks/useRegister'
import { useForm } from '../../hooks/useForm';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import '../../login-register.css'

const initialValues = { email: '', password: '', rePassword: '' };



export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const handleRegister = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            return setError('Password do not match')
        }
        try {
            await register(email, password)
            navigate('/')
            
        } catch (err) {
            setError(err.message)
        }
    }

    const { values, handleInputChange, handleSubmit } = useForm(initialValues, handleRegister);

    return (
        <>
            <section className="register" id="register">
                <form className='formRegister' onSubmit={handleSubmit}>
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
                            <span>If you already have a profile <a href="#">click here</a></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    )
}