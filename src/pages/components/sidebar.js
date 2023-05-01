import { Outlet, Link } from "react-router-dom";
// import { HiHome } from "react-icons/Hi";
// import { RiBarChartBoxFill } from "react-icons/Ri";
// import { BsSearch } from "react-icons/Bs";
// import { AiFillLayout, AiFillEye } from "react-icons/Ai";
// import { TbReportSearch } from "react-icons/Tb";
// import { ImEarth } from "react-icons/Im";
import { FaBeer } from "react-icons/fa";


const Layout = () => {
    return (
        <>
            <div className="sidebarr">
                <ul>
                    <li>

                    </li>
                    <li>
                        Homepage
                    </li>
                    <li>
                        Applicants
                    </li>
                    <li>
                        <Link to="/push">
                            Approved Users
                        </Link>
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Reports
                    </li>
                    <li>
                        Swipe Activity
                    </li>
                    <li>
                        Email notific.
                    </li>
                    <li>
                        <Link to="/push">
                            Push notific.
                        </Link>
                    </li>
                    <li>
                        Settings
                    </li>
                </ul>
                <span className="hover-span">Hello</span>
            </div>
        </>
    )
};

export default Layout;