import { Link } from 'react-router-dom'

const Register = () => {
    return (
            <div className="container">
                <div className="section">
                    <div className="title">
                        <h1>REGISTER</h1>
                    </div>
                    <div className="form">
                        <form>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="email"/>
                            <input type="image"/>
                            <input type="hidden" value="3"/>
                            <button type="submit"><i class="fa-solid fa-right-to-bracket"></i><span> Login</span></button>
                        </form>
                        <span>Sudah punya akun ? <Link to="/login">Login</Link></span>
                    </div>
                </div>
            </div>
    )
}

export default Register 