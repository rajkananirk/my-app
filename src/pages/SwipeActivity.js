import React from "react";
import styles from "../styles/Home.module.scss";
import Layout from "./Layout";

const SwipeActivity = () => {
    return <>
        <Layout />
        <div className={styles.mainContaint}>
            <div className="usertable-body">
                <div className="usertable-body-container">


                    <div className="usertable-header">
                        <h4>Swiping Activity</h4>
                    </div>

                    <div className="usertable-score-header">
                        <div className="row">
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes today</span>

                            </div>
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes yesterday</span>

                            </div>
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes This Week</span>

                            </div>
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes Last Week</span>

                            </div>
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes today</span>

                            </div>
                            <div className="column">
                                <h2>1,000</h2>
                                <span>Swipes This Month</span>

                            </div>
                            <div className="column" style={{ border: 'none' }}>
                                <h2>1,000</h2>
                                <span>Swipes Last Month</span>


                            </div>


                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <button>Export CSV</button>
                        </div>
                    </div>
                    <div className="reportUsertable">
                        <table>
                            <tr className="table-header" style={{ fontSize: '10px', color: 'white', backgroundColor: 'grey' }}>
                                <th>Swipe Time </th>
                                <th colSpan={2} style={{ padding: '0px 47px' }}>
                                    Swipe by
                                </th>
                                <th colSpan={3} style={{ padding: '0px 47px' }}>Profile Swiped</th>
                                <th style={{ padding: '0px 30px' }}>Type
                                    <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L11 1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </th>
                                <th className="asc-desc">Other User Seen <br />Swiper’s Profile
                                    <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L11 1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </th>
                                <th style={{ padding: '0px 30px' }}>Match?
                                    <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1L6 6L11 1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </th>
                                <th>Sent Message?</th>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>1/18/23 | 7:00pm</td>
                                <td colSpan={2}>
                                    <div className="popup-div">
                                        <span>
                                            Michael
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
                                <td colSpan={3}>
                                    <div className="popup-div">
                                        <span>
                                            Abigail
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
                                <td>Like</td>
                                <td>Seen</td>
                                <td>Yes</td>
                                <td>Yes</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
        </div >
    </>;
};

export default SwipeActivity;