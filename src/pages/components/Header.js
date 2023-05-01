import { Outlet, Link } from "react-router-dom";
// import { HiHome } from "react-icons/Hi";
// import { RiBarChartBoxFill } from "react-icons/Ri";
// import { BsSearch } from "react-icons/Bs";
// import { AiFillLayout, AiFillEye } from "react-icons/Ai";
// import { TbReportSearch } from "react-icons/Tb";
// import { ImEarth } from "react-icons/Im";
import { Search } from 'react-icons/fa';


const Header = ({ title }) => {

    return (
        <>
            <div style={{ textAlign: 'end' }}>
                <span>
                    {title}
                </span>
                <span>

                    <svg
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid gray',
                            borderRadius: '37px',
                            padding: '7px',
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                    >
                        <path d="M19.023 16.977a35.13 35.13 0 01-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0016 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
                    </svg>
                    <svg
                        style={{
                            backgroundColor: 'white',
                            border: '1px solid gray',
                            borderRadius: '37px',
                            padding: '7px',
                            marginLeft: '30px'
                        }}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="25px"
                        width="25px"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6 8a6 6 0 1112 0v2.917c0 .703.228 1.387.65 1.95L20.7 15.6a1.5 1.5 0 01-1.2 2.4h-15a1.5 1.5 0 01-1.2-2.4l2.05-2.733a3.25 3.25 0 00.65-1.95V8zm6 13.5A3.502 3.502 0 018.645 19h6.71A3.502 3.502 0 0112 21.5z"
                        />
                    </svg>
                </span>
            </div>
        </>
    )
};

export default Header;