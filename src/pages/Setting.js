import { Outlet, Link } from "react-router-dom";
import Layout from "./Layout";


const Setting = () => {
    return (
        <>
            <Layout />
            <div className="modal">
                <h1>Settings</h1>
                <div className="in-div">
                    <h2>Change password</h2>

                    <div style={{ marginLeft: '15px' }}>
                        <div>
                            <h4>Change password</h4>
                            <input placeholder="Old password" />
                        </div>
                        <div>
                            <h4>New password</h4>
                            <input placeholder="New password" />
                        </div>
                        <div>
                            <h4>Confirm New password</h4>
                            <input placeholder="New password" />
                        </div>
                    </div>

                </div>
                <div className='send_btn'>
                    <Link to="/home">
                        <button >Save</button>
                    </Link>
                </div>

            </div>
        </>
    )
};

export default Setting;