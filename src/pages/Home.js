import React, { useEffect, useState } from "react";
import axios from 'axios';
import Layout from "./Layout";
import Header from "./components/Header";
import CountUp from 'react-countup';
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    const [sumUserCount, setSumUserCount] = useState(0);
    const [sumReportUserCount, setReportUserCount] = useState(0);


    useEffect(() => {
        getUsers(); // this will fire only on first render
    }, []);
    function getUsers() {
        axios.post('http://3.16.154.66:8000/admin_get_dashboard_count')
            .then(function (response) {
                // handle success
                setReportUserCount(response.data.reported_user);
                setSumUserCount(response.data.sum_of_users);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {

                //always executed
            });

    }
    return <>
        <Layout />
        <div className="usertable-body" style={{ overflow: 'auto' }}>
            <Header />
            <div className="usertable-body-container">
                <div className="usertable-score-header" style={{ borderBottom: '4px solid #D9D9D9' }}>

                    <div className="row">
                        <div className="column">
                            <h2><CountUp end={3} /></h2>
                            <span>Approved Users</span>

                        </div>
                        <div className="column">
                            <h2><CountUp end={10} /></h2>
                            <span>Approved Men<br /> Users</span>
                        </div>
                        <div className="column">
                            <h2><CountUp end={15} /></h2>
                            <span>Approved Wowen<br /> Users</span>
                        </div>
                        <div className="column">
                            <h2><CountUp end={25} /></h2>
                            <span>Approved “Other”<br /> Users</span>
                        </div>
                        <div className="column">
                            <h2><CountUp end={45} /></h2>
                            <span> <Link style={{ textDecoration: 'none', color: 'black' }} to="/applicants">Applicants </Link></span>
                        </div>
                        <div className="column">
                            <h2><CountUp end={15} /></h2>
                            <span> <Link style={{ textDecoration: 'none', color: 'black' }} to="/report-users">Reports </Link></span>

                        </div>
                        <div className="column" style={{ border: 'none' }}>
                            <h2><CountUp end={95} /></h2>
                            <span><Link style={{ textDecoration: 'none', color: 'black' }} to="/rating">Ratings Given</Link></span>


                        </div>
                    </div>

                </div>
                <div className="sendnotification-body">
                    <div className="containtt" style={{ display: 'flex' }}>
                        <div className="push">
                            <Link to="/push">
                                <button style={{ backgroundColor: '#1E1F28', cursor: 'pointer' }}>Send Notification</button>
                            </Link>
                        </div>
                        <div className="push">
                            <Link to="/push">
                                <button className='e-btn' style={{ cursor: 'pointer' }}>Send Email</button>
                            </Link>
                        </div>

                    </div>

                    <div className="user-details" style={{ padding: '1rem 26px' }}>
                        <h5 >
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/applicants">
                                Users
                            </Link>
                            <span><CountUp end={sumUserCount} /></span>
                        </h5>
                        <h5>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/rating">
                                Ratings
                            </Link>
                        </h5>
                        <h5>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/contact">
                                Contact Us
                            </Link>
                            <span><CountUp end={24} /></span>
                        </h5>
                        <h5 style={{ marginLeft: '7px' }}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/swipe-activity">
                                Swipe Activity
                            </Link>
                        </h5>
                        <h5 style={{ marginRight: '25px' }}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/report-users">
                                Reports
                            </Link>
                            <span><CountUp end={sumReportUserCount} /></span>
                        </h5>
                    </div>

                    <div className="user-updates">
                        <h5>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/push">
                                View Push Notifications
                            </Link>
                        </h5>
                        <h5>Update Entry Fields</h5>
                    </div>

                    <div className="user-setting">
                        <h5>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/settings">
                                Settings
                            </Link>
                        </h5>
                    </div>
                </div>

            </div>

        </div>
    </>;
};

export default Home;