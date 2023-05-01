import React, { useEffect, useState } from "react";
import axios from 'axios';
import Layout from "./Layout";
import { RotatingLines } from 'react-loader-spinner'
import CountUp from 'react-countup';

const ReportUser = () => {
    const [loader, setLoader] = useState(false);
    const [showmodal, setShowModal] = useState(0);

    const [data, setData] = useState([]);
    const [maleCount, setMaleCount] = useState(0);
    const [ischeck, setIsCheck] = useState(false);
    const [femaleCount, setFemaleCount] = useState(0);


    useEffect(() => {
        getUsers(); // this will fire only on first render
    }, []);

    function getUsers() {
        setLoader(true)

        axios.post('http://3.16.154.66:8000/admin_get_report_user')
            .then(function (response) {
                // handle success
                setData(response.data.info);
                setMaleCount(response.data.sum_of_male_users);
                setFemaleCount(response.data.sum_of_female_users);
                setLoader(false)

                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                setLoader(false)

                console.log(error);
            })
            .finally(function () {

                //always executed
            });


    }

    return <>
        <Layout />
        <div className="usertable-body " style={{ overflow: 'auto' }}>
            <div className="usertable-body-container">
                <div className="">
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '25px', margin: '0px' }}>
                            <h4 style={{ margin: '0px' }}>Reported users</h4>

                        </span>
                        <span>
                            <div className="usertable-header" style={{ border: 0 }}>
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
                    <div className="all-btns" style={{ margin: '0px' }}>
                        <div className="users-list">
                            <div>
                                <h6>Users: <br /><CountUp end={60} /></h6>

                            </div>
                            <div>
                                <h6>Men:  <br /><CountUp end={30} /></h6>

                            </div>
                            <div>
                                <h6>Women:  <br /><CountUp end={10} /></h6>

                            </div>
                            <div>
                                <h6>Non-binary:  <br /><CountUp end={29} /></h6>

                            </div>

                            <select style={{ marginRight: '3px', borderRight: '9px solid transparent', }}>
                                <option value="Gender" hidden>Gender</option>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                                <option value="2">Everyone</option>
                            </select>


                            <div style={{ border: '1px solid #ccc', marginRight: '3px', borderRadius: '10px', }}>
                                <svg style={{ width: '15px', marginLeft: '15px' }} class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                        <div className="res-header-icon">
                            <button className="email-btn">Email</button>
                            <button className="push-btn">Push Notific.</button>
                            <button className="inapp-btn">In-App Netlify</button>
                            <button className="veryfy-btn">Approve</button>
                            <button className="suspend-btn">Suspend</button>
                        </div>
                    </div>
                </div>

                <div className="reportUsertable" >

                    {loader ? <div style={{ display: 'flex', justifyContent: 'center', height: '78vh' }}>

                        <RotatingLines
                            strokeColor="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="96"
                            visible={true}
                        />
                    </div> :
                        <table>
                            <tr className="table-header" style={{ fontSize: '10px', color: 'white', backgroundColor: 'grey' }}>
                                <th style={{ padding: '0px 22px' }}>
                                    <input onClick={(event) => event.target.checked == false ? setIsCheck(false) : setIsCheck(true)} type="checkbox" className="checkMainBox" value="Bike" />
                                </th>
                                <th style={{ position: 'relative' }}>
                                    Sign up Time
                                </th>
                                <th style={{ padding: '0px 22px' }}>Name- Person <br />Getting Reported</th>
                                <th>Name- Person Who<br /> Submitted Reported</th>
                                <th># Times User<br /> Got Reported</th>
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
                                <th>Phone</th>
                                <th>Religion<svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                                <th>Ethinicity<svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                                <th>Job Title<svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                                <th>Company<svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                                <th>Overall Experience</th>
                                <th>Safe & Respectful</th>
                                <th>Conversation</th>
                                <th>Profile Accurate</th>
                                <th># Matches</th>
                                <th>Last Login</th>
                            </tr>
                            <div className="report-modsal" id="mydiv" style={showmodal == 0 ? { display: 'none' } : { display: 'block' }} >
                                <div className="close-icon" onClick={() => setShowModal(0)}>

                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.12976 7.00019L12.6606 2.71019C12.859 2.52188 12.9704 2.26649 12.9704 2.00019C12.9704 1.73388 12.859 1.47849 12.6606 1.29019C12.4621 1.10188 12.193 0.996094 11.9124 0.996094C11.6319 0.996094 11.3627 1.10188 11.1643 1.29019L6.64407 5.59019L2.12381 1.29019C1.9254 1.10188 1.6563 0.996094 1.3757 0.996094C1.09511 0.996094 0.826004 1.10188 0.627593 1.29019C0.429182 1.47849 0.317716 1.73388 0.317716 2.00019C0.317716 2.26649 0.429182 2.52188 0.627593 2.71019L5.15839 7.00019L0.627593 11.2902C0.528834 11.3832 0.450447 11.4938 0.396953 11.6156C0.343459 11.7375 0.315918 11.8682 0.315918 12.0002C0.315918 12.1322 0.343459 12.2629 0.396953 12.3848C0.450447 12.5066 0.528834 12.6172 0.627593 12.7102C0.725546 12.8039 0.842083 12.8783 0.970483 12.9291C1.09888 12.9798 1.2366 13.006 1.3757 13.006C1.5148 13.006 1.65252 12.9798 1.78092 12.9291C1.90932 12.8783 2.02586 12.8039 2.12381 12.7102L6.64407 8.41019L11.1643 12.7102C11.2623 12.8039 11.3788 12.8783 11.5072 12.9291C11.6356 12.9798 11.7733 13.006 11.9124 13.006C12.0515 13.006 12.1893 12.9798 12.3177 12.9291C12.4461 12.8783 12.5626 12.8039 12.6606 12.7102C12.7593 12.6172 12.8377 12.5066 12.8912 12.3848C12.9447 12.2629 12.9722 12.1322 12.9722 12.0002C12.9722 11.8682 12.9447 11.7375 12.8912 11.6156C12.8377 11.4938 12.7593 11.3832 12.6606 11.2902L8.12976 7.00019Z" fill="#ABB4BD" />
                                    </svg>
                                </div>

                                <h2>
                                    View Report
                                </h2>
                                <h6>1/18/2023 | 7:00pm</h6>
                                <div className="main-div">
                                    <div style={{ color: '#ABB4BD', display: 'flex', justifyContent: 'space-between' }}>
                                        <div style={{ fontSize: '20px' }}>
                                            Submitted by
                                        </div>
                                        <div style={{ color: '#6D6D6D' }}>
                                            Tracy James
                                            <br />
                                            trcyjames@gmail.com
                                            <br />
                                            516-232-1222
                                        </div>
                                    </div>

                                    <div style={{ color: '#ABB4BD', fontSize: '20px' }}>
                                        Reason:
                                    </div>
                                    <br />
                                    <div style={{ paddingLeft: '13px', color: '#6D6D6D' }}>
                                        This profile is a scam, fake, or spam
                                    </div>
                                    <br />
                                    <div style={{ color: '#ABB4BD', fontSize: '20px' }}>
                                        Please provide more details about this issue:
                                    </div>
                                    <br />
                                    <div style={{ paddingLeft: '13px', color: '#6D6D6D' }}>
                                        This profile is creep and now real and this<br /> ajswdedwqswdswdeswdqwdeqswdwqwsqqsws
                                    </div>
                                </div>
                            </div>
                            {data.map(function (object, i) {
                                return <>
                                    <tr>
                                        <td>
                                            {ischeck ?
                                                <input checked id={object.report_id} type="checkbox" className="checkMainBox" value="Bike" />
                                                :
                                                <input id={object.report_id} type="checkbox" className="checkMainBox" value="Bike" />
                                            }
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'end' }}>
                                                <label for="cb1"></label>
                                                <div style={{ marginLeft: '10px' }}>
                                                    {object.F_created_at}
                                                </div>
                                                <div>
                                                    <a onClick={() => setShowModal(1)} className="view-report">View Report</a>

                                                    <div className="verify-icon">

                                                        <svg width="15" height="15" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0.433594 2.46618L1.81763 3.85022L4.59803 1.06982" stroke="#27AE60" stroke-width="0.932758" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                                <div className="popup-div">
                                                    <span>
                                                        {object.full_name ? object.full_name : '-'}
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
                                            </div>
                                        </td>

                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />

                                                <div className="popup-div">
                                                    <span>
                                                        {object.full_name ? object.full_name : '-'}
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
                                            </div>
                                        </td>
                                        <td>{object.reported_at ? object.reported_at : '-'}</td>
                                        <td>{object.location ? object.location : '-'}</td>
                                        <td>{object.birthdate ? object.birthdate : '-'}</td>
                                        <td>{object.gender ? object.gender : '-'}</td>
                                        <td>{object.email ? object.email : '-'}</td>
                                        <td>{object.phone_number ? object.phone_number : '-'}</td>
                                        <td>{object.religion ? object.religion : '-'}</td>
                                        <td>{object.ethnicity ? object.ethnicity : '-'}</td>
                                        <td>{object.ethnicity ? object.ethnicity : '-'}</td>
                                        <td>{object.job_title ? object.job_title : '-'}</td>
                                        <td>{object.avg_overall_experience}</td>
                                        <td>{object.avg_selft_respect}</td>
                                        <td>{object.avg_conversation}</td>
                                        <td>{object.avg_profile_accurate}</td>
                                        <td>No</td>
                                        <td>Today</td>

                                    </tr>
                                </>;
                            })}
                        </table>}
                </div>
            </div >
        </div >
    </>;
};

export default ReportUser;