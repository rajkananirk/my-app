import { Outlet, Link } from "react-router-dom";
import Layout from "./Layout";


const Login = () => {
    return (
        <>
            <div className="modal">
                <h1>Login</h1>
                <div className="in-div">
                    <div>
                        <h2>Email</h2>
                        <input />
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                        <h2>Password</h2>
                        <input />
                    </div>

                    <span>Forgot password? Reset</span>
                </div>
                <div className='send_btn'>
                    <Link to="/home">
                        <button >Enter</button>
                    </Link>
                </div>

            </div>
        </>
    )
};

export default Login;