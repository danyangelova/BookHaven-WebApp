import '../../login-register.css'

export default function Register() {
    return (
        <>
        <section className="register" id="register">
        <form className='formRegister'>
            <div className="formContainer">
                <div className="bookImg"></div>
                <h2>Register</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required spellcheck="false" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />

                <label htmlFor="conpass">Confirm password</label>
                <input type="password" name="conpass" required  />

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