import '../../login-register.css'

export default function Login() {
    return (
        <>
            <section className="login" id="login" >
            <form className='formLogin'>
                <div className="formContainer">
                    <div className="bookImg"></div>
                    <h2>Login</h2>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required spellCheck="false" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required spellCheck="false" />
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