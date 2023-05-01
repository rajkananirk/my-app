import React, { useEffect, useState } from "react";

import Layout from "./Layout";
import CountUp from 'react-countup';

const Contact = () => {
    const [showmodal, setShowModal] = useState(0);
    const [ischeck, setIsCheck] = useState(false);

    // const handleClose = (reason) => {

    //     console.log('hiii')

    //     setShowModal(true);
    //     return;
    // };


    return <>
        <Layout />


        <div className="usertable-body" style={{ overflow: 'auto' }}>
            <div className="usertable-body-container">
                <div className="">
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '25px', margin: '0px' }}>
                            <h4 style={{ margin: '0px' }}>Contact Us</h4>

                        </span>
                        <span>
                            <div className="usertable-header" style={{ border: 0, padding: '0' }}>
                                <div className="all-btns" style={{ marginTop: '20px' }}>
                                    <div className="users-list">
                                        <button className="export-btn">Export CSV</button>

                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="usertable-header" style={{ border: 0 }}>
                    <div className="all-btns" style={{ justifyContent: 'flex-end' }}>

                        <select style={{ borderRight: '9px solid transparent' }}>
                            <option value="Gender" hidden>Gender</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                            <option value="2">Other</option>
                        </select>

                        <div style={{ border: '1px solid #ccc', borderRadius: '10px', display: 'flex', marginRight: '35px' }}>
                            <svg style={{ width: '15px', marginLeft: '15px' }} class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                            <input type="search" placeholder="Search" />
                        </div>
                        <div style={{ display: 'flex' }} className="res-header-icon">
                            <button className="push-btn">Push Notification</button>
                            <button className="inapp-btn">In-App Notification</button>
                            <button className="veryfy-btn">Approve</button>
                            <button className="suspend-btn">Suspend</button>
                        </div>
                    </div>
                </div>



                <div className="reportUsertable" style={{ position: 'relative' }}>

                    <table>
                        <tr className="table-header" style={{ fontSize: '10px', color: 'white', backgroundColor: 'grey' }}>

                            <th style={{ padding: '0px 22px' }}>
                                <input onClick={(event) => event.target.checked == false ? setIsCheck(false) : setIsCheck(true)} type="checkbox" className="checkMainBox" value="Bike" />
                            </th>
                            <th>Sign up Time</th>
                            <th>Name</th>
                            <th>Location <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Birthdate <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Gender <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Email</th>
                            <th>Phone #</th>
                            <th>Religion</th>
                            <th>Ethinicity</th>
                            <th>Job title</th>
                            <th>Hometown</th>
                            <th>Highest Lev. <br />of Educatio</th>
                            <th>University</th>
                            <th>Looking for</th>
                            <th>Age Range</th>
                            <th>Height Range</th>
                            <th>Distance</th>
                            <th>Ethnicity Prefer.</th>
                            <th>Religion Prefer.</th>
                            <th>Preferred 1st<br /> Date Spot</th>
                            <th>About Me</th>
                            <th>Sign in Method</th>
                            <th>Interests</th>
                            <th># Ratings Received</th>
                            <th>Overall Experience</th>
                            <th>Safe & Respectful</th>
                            <th>Conversation</th>
                            <th>Profile Accurate</th>
                            <th># Matches</th>
                            <th>Last Login</th>
                            <th># logins</th>
                            <th># Swipes-”No” Xs</th>
                            <th># Swipes-”Yes”</th>
                            <th># Likes Received</th>
                            <th># Times Reported</th>
                            <th># Times They <br />Reported Others</th>
                            <th># Messages Sent</th>
                            <th># Messages Received</th>
                            <th># Answered Convos</th>
                        </tr>


                        <div className="" id="mydiv" style={showmodal == 0 ? { display: 'none', width: 'min-content' } : { display: 'block', width: 'min-content' }} >
                            <div className="close-icon" onClick={() => setShowModal(0)}>

                                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.12976 7.00019L12.6606 2.71019C12.859 2.52188 12.9704 2.26649 12.9704 2.00019C12.9704 1.73388 12.859 1.47849 12.6606 1.29019C12.4621 1.10188 12.193 0.996094 11.9124 0.996094C11.6319 0.996094 11.3627 1.10188 11.1643 1.29019L6.64407 5.59019L2.12381 1.29019C1.9254 1.10188 1.6563 0.996094 1.3757 0.996094C1.09511 0.996094 0.826004 1.10188 0.627593 1.29019C0.429182 1.47849 0.317716 1.73388 0.317716 2.00019C0.317716 2.26649 0.429182 2.52188 0.627593 2.71019L5.15839 7.00019L0.627593 11.2902C0.528834 11.3832 0.450447 11.4938 0.396953 11.6156C0.343459 11.7375 0.315918 11.8682 0.315918 12.0002C0.315918 12.1322 0.343459 12.2629 0.396953 12.3848C0.450447 12.5066 0.528834 12.6172 0.627593 12.7102C0.725546 12.8039 0.842083 12.8783 0.970483 12.9291C1.09888 12.9798 1.2366 13.006 1.3757 13.006C1.5148 13.006 1.65252 12.9798 1.78092 12.9291C1.90932 12.8783 2.02586 12.8039 2.12381 12.7102L6.64407 8.41019L11.1643 12.7102C11.2623 12.8039 11.3788 12.8783 11.5072 12.9291C11.6356 12.9798 11.7733 13.006 11.9124 13.006C12.0515 13.006 12.1893 12.9798 12.3177 12.9291C12.4461 12.8783 12.5626 12.8039 12.6606 12.7102C12.7593 12.6172 12.8377 12.5066 12.8912 12.3848C12.9447 12.2629 12.9722 12.1322 12.9722 12.0002C12.9722 11.8682 12.9447 11.7375 12.8912 11.6156C12.8377 11.4938 12.7593 11.3832 12.6606 11.2902L8.12976 7.00019Z" fill="#ABB4BD" />
                                </svg>
                            </div>

                            <h2>
                                View Message
                            </h2>
                            <h6>1/18/2023 | 7:00pm</h6>
                            <div className="main-div">
                                <div style={{ color: '#ABB4BD' }}>
                                    Message Topic:
                                </div>
                                <br />
                                <div style={{ paddingLeft: '13px', color: '#6D6D6D' }}>
                                    this app is great
                                </div>
                                <br />
                                <div style={{ color: '#ABB4BD' }}>
                                    Message:
                                </div>
                                <br />
                                <div style={{ paddingLeft: '13px', color: '#6D6D6D' }}>
                                    This profile is a scam, fake, or spamThis profile is creep and now real and this ajswdedwqswdswdeswdqwdeqswdwqwsqqswsThis profile is creep
                                </div>
                                <br />
                                <div style={{ color: '#ABB4BD' }}>
                                    Best number/email to reach you:
                                </div>
                                <br />
                                <div style={{ paddingLeft: '13px', color: '#6D6D6D' }}>
                                    516-732-5090
                                </div>
                            </div>
                        </div>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>

                        <tr>
                            <td>
                                {ischeck ?
                                    <input checked type="checkbox" className="checkMainBox" value="Bike" />
                                    :
                                    <input type="checkbox" className="checkMainBox" value="Bike" />
                                }
                            </td>
                            <td>
                                <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                    <label for="cb1"></label>
                                    <div style={{ marginLeft: '10px' }}>
                                        1/18/23 | 7:00pm
                                    </div>
                                    <div>
                                        <a onClick={() => setShowModal(1)} style={{ fontSize: '10px' }} className="view-report">View Message</a>


                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="popup-div" style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                    <div>
                                        <span>
                                            Raj Kanani
                                            <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                        <ul style={{ fontWeight: '600', top: '65%' }}>
                                            <li style={{ color: 'red' }}>Suspend</li>
                                            <li style={{ color: 'blue' }}>Email</li>
                                            <li style={{ fontSize: '12px' }}>Send in-app notification</li>
                                            <li style={{ fontSize: '12px' }}>Send push notification</li>
                                            <li style={{ fontSize: '12px' }}>View profile</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td>New york, NY</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>516-732-2020</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>Base Text</td>
                            <td>Base Text</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>

                    </table>
                </div>
            </div >
        </div >
    </>;
};

export default Contact;