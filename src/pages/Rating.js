import { Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
import Header from "./components/Header";
import styles from "../styles/Home.module.scss";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { RotatingLines } from 'react-loader-spinner'

const Rating = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const [ratingCount, setOfRatingCount] = useState(0);
    const [overAllCount, setOfOverallCount] = useState(0);
    const [selfRespectFulCount, setSelfRespectFulCount] = useState(0);
    const [conversationCount, setConversationCount] = useState(0);
    const [profileAccurateCount, setProfileAccurateCount] = useState(0);
    const [allUserCount, setAllUserCount] = useState(0);

    useEffect(() => {
        setLoader(true)
        getUsers(); // this will fire only on first render
    }, []);

    function getUsers() {
        axios.post('http://3.16.154.66:8000/admin_get_rating_user')
            .then(function (response) {
                // handle success

                setOfRatingCount(response.data.sum_of_ratings);
                setOfOverallCount(response.data.sum_of_overall_ratings);
                setSelfRespectFulCount(response.data.self_respectful_ratings);
                setConversationCount(response.data.conversation_ratings);
                setProfileAccurateCount(response.data.profile_accurate_ratings);
                setAllUserCount(response.data.sum_of_users);
                setData(response.data.info);
                setLoader(false)


            })
            .catch(function (error) {
                // handle error
                setLoader(false)

                console.log(error);
            })
            .finally(function () {

                // always executed
            });

    }
    return (
        <>
            <Layout />
            <div className={styles.mainContaint}>
                <div className="usertable-body">
                    <div className="usertable-body-container">
                        <div className="usertable-header">
                            <h4>Ratings</h4>
                        </div>
                        <div className="usertable-score-header">
                            <div className="row">
                                <div className="column">
                                    <h2>1,000</h2>
                                    <span>Ratings Given</span>

                                </div>
                                <div className="column">
                                    <h2>4.0</h2>
                                    <span>Overall Experience <br />Average</span>
                                </div>
                                <div className="column">
                                    <h2>4.3</h2>
                                    <span>Safe & Respectful <br />Average</span>
                                </div>
                                <div className="column">
                                    <h2>3.455</h2>
                                    <span>Conversation<br />Average</span>
                                </div>
                                <div className="column" style={{ border: 'none' }}>
                                    <h2>3.4443</h2>
                                    <span>Profile Accurate<br />Average</span>
                                </div>

                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                                <button>Export CSV</button>
                            </div>
                        </div>
                        <div className="reportUsertable">

                            {loader ? <div style={{ display: 'flex', justifyContent: 'center', height: '78vh' }}>

                                <RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}
                                />
                            </div> : <table>
                                <tr className="table-header" style={{ fontSize: '10px', padding: '0px 15px', color: 'white', backgroundColor: 'grey' }}>
                                    <th colSpan={3}>Date of Rating </th>
                                    <th>Rating Made by</th>
                                    <th>Rating Given to</th>
                                    <th>Overall Experience</th>
                                    <th>Safe & Respectful</th>
                                    <th>Conversation</th>
                                    <th>Profile Accurate</th>
                                    <th># Matches</th>
                                    <th>Total Ratings<br /> Received</th>
                                    <th>Total Ratings <br />Given</th>
                                </tr>
                                {data.map(function (object, i) {
                                    return <>
                                        <tr>
                                            <td colSpan={3}>{object.created_at}</td>
                                            <td>
                                                <div className="popup-div">
                                                    <span>
                                                        {object.by_full_name}
                                                        <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <ul style={{ fontWeight: '600' }}>
                                                        <li style={{ color: 'red' }}>Suspend</li>
                                                        <li style={{ color: 'blue' }}>Email</li>
                                                        <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                                        <li style={{ fontSize: '12px' }}>Send push notification</li>
                                                        <li style={{ fontSize: '12px' }}>View profile</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="popup-div">
                                                    <span>
                                                        {object.to_full_name}
                                                        <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </span>
                                                    <ul style={{ fontWeight: '600' }}>
                                                        <li style={{ color: 'red' }}>Suspend</li>
                                                        <li style={{ color: 'blue' }}>Email</li>
                                                        <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                                        <li style={{ fontSize: '12px' }}>Send push notification</li>
                                                        <li style={{ fontSize: '12px' }}>View profile</li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>{object.rating_type == 4 ? object.rating_star : 0}</td>
                                            <td>{object.rating_type == 1 ? object.rating_star : 0}</td>
                                            <td>{object.rating_type == 2 ? object.rating_star : 0}</td>
                                            <td>{object.rating_type == 3 ? object.rating_star : 0}</td>
                                            <td>No</td>
                                            <td>{object.sum_of_my_rating}</td>
                                            <td>{object.sum_of_given_rating}</td>
                                        </tr>
                                    </>;
                                })}

                            </table>}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Rating;