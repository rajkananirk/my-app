import React, { useEffect, useState } from "react";
import axios from 'axios';
import Layout from "./Layout";
import { RotatingLines } from 'react-loader-spinner'
import CountUp from 'react-countup';


const User = () => {
    const [data, setData] = useState([]);
    const [ischeck, setIsCheck] = useState(false);


    const [loader, setLoader] = useState(false);
    const [verifyCount, setVerifiedCount] = useState(0);
    const [unVerifyCount, setUnVerifieCount] = useState(0);
    const [allUserCount, setAllUserCount] = useState(0);

    useEffect(() => {
        getUsers(); // this will fire only on first render
    }, []);
    function getUsers() {
        setLoader(true)
        axios.post('http://3.16.154.66:8000/admin_get_users')
            .then(function (response) {
                // handle success
                setVerifiedCount(response.data.verified_user);
                setUnVerifieCount(response.data.un_verified_user);
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
    return <>
        <Layout />

        <div className="usertable-body" style={{ overflow: 'auto' }}>
            <div className="usertable-body-container">
                <div className="usertable-header" style={{ border: 0 }}>
                    <h4 style={{ marginTop: '15px', marginBottom: '0px' }}>Applicants </h4>
                    <div className="all-btns res-all-btns" style={{
                        justifyContent: 'center'
                    }}>
                        < div className="f-div" style={{ marginLeft: '15px', display: 'flex', alignItems: 'center' }}>
                            <select style={{ marginLeft: '10px', borderRight: '9px solid transparent', marginRight: '3px' }}>
                                <option value="Gender" hidden>Gender</option>
                                <option value="0">Male</option>
                                <option value="1">Female</option>
                                <option value="2">Other</option>
                            </select>
                            <select style={{ marginLeft: '10px', borderRight: '9px solid transparent' }}>
                                <option value="0">Location</option>
                                <option value="1">India</option>
                                <option value="2">Canada</option>
                            </select>
                            <div style={{ marginLeft: '10px', border: '1px solid #ccc', marginRight: '3px', borderRadius: '10px', display: 'flex' }}>
                                <svg style={{ width: '15px', marginLeft: '15px' }} class="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><title id="title">Search Icon</title><desc id="desc">A magnifying glass icon.</desc><g class="search-path" fill="none" stroke="#848F91"><path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" /><circle cx="8" cy="8" r="7" /></g></svg>
                                <input type="search" placeholder="Search" />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }} className="res-header-icon">

                            <button className="email-btn">Email</button>
                            <button className="inapp-btn">In-App Netlify</button>
                            <button className="veryfy-btn">Verify</button>
                            <button className="suspend-btn">Suspend</button>
                            <button className="export-btn">Export CSV</button>
                        </div>
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
                        <tr className="table-header" style={{ fontSize: '10px', color: 'white', backgroundColor: 'grey' }}>
                            <th style={{ padding: '0px 22px' }}>
                                <input onClick={(event) => event.target.checked == false ? setIsCheck(false) : setIsCheck(true)} type="checkbox" className="checkMainBox" value="Bike" />

                            </th>
                            <th style={{ position: 'relative' }}>
                                Sign up Time
                            </th>
                            <th>Name</th>
                            <th>Location
                                <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </th>
                            <th>Birthdate  <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Gender  <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Email</th>
                            <th>Phone #</th>
                            <th> Religion <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Ethinicity <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Job title <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Hometown
                                <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                            <th className="asc-desc"> Highest Lev.<br /> of Educatio
                                <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                                </svg></th>
                            <th> University <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Looking for <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Age Range <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Height Range <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Distance <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Ethnicity Prefer. <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Religion Prefer. <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th className="asc-desc"> Preferred 1st<br /> Date Spot <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> About Me <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th> Sign in Method <svg style={{ marginLeft: '8px' }} width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L6 6L11 1" stroke="#050505" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></th>
                            <th>Interests </th>
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
                            <th># Times They Reported Others</th>
                            <th># Messages Sent</th>
                            <th># Messages Received</th>
                            <th># Answered Convos</th>
                        </tr>

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
                                                {object.created_at}
                                            </div>
                                        </div>
                                    </td>

                                    <td style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>


                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <img style={{ objectFit: 'cover', borderRadius: '50%', marginRight: '5px' }} width={45} height={45} src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                                            <div style={{ position: 'absolute', top: '5px', left: '54px' }}>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.0002 2.72729C8.02507 2.72729 7.7772 2.73593 7.00147 2.77123C6.22725 2.80669 5.69878 2.92926 5.23637 3.10911C4.75805 3.29487 4.3523 3.54336 3.94807 3.94775C3.54354 4.35199 3.29506 4.75775 3.10871 5.23593C2.92841 5.69851 2.80568 6.22714 2.77084 7.00108C2.73614 7.77684 2.72705 8.02487 2.72705 10C2.72705 11.9752 2.73584 12.2223 2.77099 12.9981C2.80659 13.7723 2.92917 14.3008 3.10886 14.7632C3.29476 15.2415 3.54324 15.6473 3.94762 16.0515C4.3517 16.4561 4.75744 16.7052 5.23546 16.8909C5.69817 17.0708 6.22679 17.1934 7.00086 17.2288C7.7766 17.2641 8.02431 17.2727 9.99926 17.2727C11.9745 17.2727 12.2216 17.2641 12.9973 17.2288C13.7716 17.1934 14.3006 17.0708 14.7634 16.8909C15.2415 16.7052 15.6467 16.4561 16.0507 16.0515C16.4553 15.6473 16.7037 15.2415 16.8901 14.7634C17.0689 14.3008 17.1916 13.7721 17.228 12.9982C17.2628 12.2224 17.2719 11.9752 17.2719 10C17.2719 8.02487 17.2628 7.77699 17.228 7.00123C17.1916 6.22699 17.0689 5.69851 16.8901 5.23608C16.7037 4.75775 16.4553 4.35199 16.0507 3.94775C15.6462 3.5432 15.2417 3.29472 14.7629 3.10911C14.2993 2.92926 13.7705 2.80669 12.9963 2.77123C12.2206 2.73593 11.9736 2.72729 9.99789 2.72729H10.0002ZM9.34776 4.0379C9.54139 4.0376 9.75744 4.0379 10.0002 4.0379C11.9419 4.0379 12.1721 4.04487 12.9389 4.07972C13.6479 4.11214 14.0328 4.23063 14.2891 4.33017C14.6285 4.46199 14.8705 4.61957 15.1249 4.87411C15.3794 5.12866 15.537 5.37108 15.6691 5.71048C15.7686 5.96654 15.8873 6.35139 15.9195 7.06048C15.9544 7.82714 15.962 8.05745 15.962 9.99835C15.962 11.9393 15.9544 12.1696 15.9195 12.9362C15.8871 13.6453 15.7686 14.0302 15.6691 14.2862C15.5373 14.6256 15.3794 14.8673 15.1249 15.1217C14.8703 15.3762 14.6287 15.5338 14.2891 15.6656C14.0331 15.7656 13.6479 15.8838 12.9389 15.9162C12.1722 15.9511 11.9419 15.9587 10.0002 15.9587C8.05825 15.9587 7.82811 15.9511 7.06147 15.9162C6.3524 15.8835 5.96756 15.765 5.71105 15.6655C5.37167 15.5337 5.12925 15.3761 4.87471 15.1215C4.62018 14.867 4.4626 14.6252 4.33049 14.2856C4.23094 14.0296 4.11231 13.6447 4.08004 12.9356C4.04519 12.169 4.03822 11.9387 4.03822 9.99654C4.03822 8.05442 4.04519 7.82533 4.08004 7.05866C4.11246 6.34957 4.23094 5.96472 4.33049 5.70836C4.4623 5.36896 4.62018 5.12654 4.87471 4.87199C5.12925 4.61745 5.37167 4.45987 5.71105 4.32775C5.96741 4.22775 6.3524 4.10957 7.06147 4.07699C7.73235 4.04669 7.99235 4.0376 9.34776 4.03608V4.0379ZM13.8822 5.24548C13.4004 5.24548 13.0095 5.63593 13.0095 6.1179C13.0095 6.59972 13.4004 6.99063 13.8822 6.99063C14.364 6.99063 14.7549 6.59972 14.7549 6.1179C14.7549 5.63608 14.364 5.24517 13.8822 5.24517V5.24548ZM10.0002 6.26517C7.93765 6.26517 6.26543 7.93745 6.26543 10C6.26543 12.0626 7.93765 13.7341 10.0002 13.7341C12.0627 13.7341 13.7343 12.0626 13.7343 10C13.7343 7.93745 12.0625 6.26517 10 6.26517H10.0002ZM10.0002 7.57578C11.3389 7.57578 12.4243 8.66108 12.4243 10C12.4243 11.3388 11.3389 12.4243 10.0002 12.4243C8.66126 12.4243 7.57599 11.3388 7.57599 10C7.57599 8.66108 8.66126 7.57578 10.0002 7.57578Z"
                                                        fill="url(#paint0_radial_901_33874)"
                                                    />
                                                    <path
                                                        d="M10.0002 2.72729C8.02507 2.72729 7.7772 2.73593 7.00147 2.77123C6.22725 2.80669 5.69878 2.92926 5.23637 3.10911C4.75805 3.29487 4.3523 3.54336 3.94807 3.94775C3.54354 4.35199 3.29506 4.75775 3.10871 5.23593C2.92841 5.69851 2.80568 6.22714 2.77084 7.00108C2.73614 7.77684 2.72705 8.02487 2.72705 10C2.72705 11.9752 2.73584 12.2223 2.77099 12.9981C2.80659 13.7723 2.92917 14.3008 3.10886 14.7632C3.29476 15.2415 3.54324 15.6473 3.94762 16.0515C4.3517 16.4561 4.75744 16.7052 5.23546 16.8909C5.69817 17.0708 6.22679 17.1934 7.00086 17.2288C7.7766 17.2641 8.02432 17.2727 9.99926 17.2727C11.9745 17.2727 12.2216 17.2641 12.9973 17.2288C13.7716 17.1934 14.3006 17.0708 14.7634 16.8909C15.2415 16.7052 15.6467 16.4561 16.0507 16.0515C16.4553 15.6473 16.7037 15.2415 16.8901 14.7634C17.0689 14.3008 17.1916 13.7721 17.228 12.9982C17.2628 12.2224 17.2719 11.9752 17.2719 10C17.2719 8.02487 17.2628 7.77699 17.228 7.00123C17.1916 6.22699 17.0689 5.69851 16.8901 5.23608C16.7037 4.75775 16.4553 4.35199 16.0507 3.94775C15.6462 3.5432 15.2417 3.29472 14.7629 3.10911C14.2993 2.92926 13.7705 2.80669 12.9963 2.77123C12.2206 2.73593 11.9736 2.72729 9.99789 2.72729H10.0002ZM9.34776 4.0379C9.54139 4.0376 9.75744 4.0379 10.0002 4.0379C11.9419 4.0379 12.1721 4.04487 12.9389 4.07972C13.6479 4.11214 14.0328 4.23063 14.2891 4.33017C14.6285 4.46199 14.8705 4.61957 15.1249 4.87411C15.3794 5.12866 15.537 5.37108 15.6691 5.71048C15.7686 5.96654 15.8873 6.35139 15.9195 7.06048C15.9544 7.82714 15.962 8.05745 15.962 9.99835C15.962 11.9393 15.9544 12.1696 15.9195 12.9362C15.8871 13.6453 15.7686 14.0302 15.6691 14.2862C15.5373 14.6256 15.3794 14.8673 15.1249 15.1217C14.8703 15.3762 14.6287 15.5338 14.2891 15.6656C14.0331 15.7656 13.6479 15.8838 12.9389 15.9162C12.1722 15.9511 11.9419 15.9587 10.0002 15.9587C8.05825 15.9587 7.82811 15.9511 7.06147 15.9162C6.3524 15.8835 5.96756 15.765 5.71105 15.6655C5.37167 15.5337 5.12925 15.3761 4.87471 15.1215C4.62018 14.867 4.4626 14.6252 4.33049 14.2856C4.23094 14.0296 4.11231 13.6447 4.08004 12.9356C4.04519 12.169 4.03822 11.9387 4.03822 9.99654C4.03822 8.05442 4.04519 7.82533 4.08004 7.05866C4.11246 6.34957 4.23094 5.96472 4.33049 5.70836C4.4623 5.36896 4.62018 5.12654 4.87471 4.87199C5.12925 4.61745 5.37167 4.45987 5.71105 4.32775C5.96741 4.22775 6.3524 4.10957 7.06147 4.07699C7.73235 4.04669 7.99235 4.0376 9.34776 4.03608V4.0379ZM13.8822 5.24548C13.4004 5.24548 13.0095 5.63593 13.0095 6.1179C13.0095 6.59972 13.4004 6.99063 13.8822 6.99063C14.364 6.99063 14.7549 6.59972 14.7549 6.1179C14.7549 5.63608 14.364 5.24517 13.8822 5.24517V5.24548ZM10.0002 6.26517C7.93765 6.26517 6.26543 7.93745 6.26543 10C6.26543 12.0626 7.93765 13.7341 10.0002 13.7341C12.0627 13.7341 13.7343 12.0626 13.7343 10C13.7343 7.93745 12.0625 6.26517 10 6.26517H10.0002ZM10.0002 7.57578C11.3389 7.57578 12.4243 8.66108 12.4243 10C12.4243 11.3388 11.3389 12.4243 10.0002 12.4243C8.66127 12.4243 7.576 11.3388 7.576 10C7.576 8.66108 8.66127 7.57578 10.0002 7.57578Z"
                                                        fill="url(#paint1_radial_901_33874)"
                                                    />
                                                    <defs>
                                                        <radialGradient
                                                            id="paint0_radial_901_33874"
                                                            cx="0"
                                                            cy="0"
                                                            r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(6.59055 18.3931) rotate(-90) scale(14.4156 13.4071)"
                                                        >
                                                            <stop stop-color="#FFDD55" />
                                                            <stop offset="0.1" stop-color="#FFDD55" />
                                                            <stop offset="0.5" stop-color="#FF543E" />
                                                            <stop offset="1" stop-color="#C837AB" />
                                                        </radialGradient>
                                                        <radialGradient
                                                            id="paint1_radial_901_33874"
                                                            cx="0"
                                                            cy="0"
                                                            r="1"
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="translate(0.290709 3.77512) rotate(78.6811) scale(6.44383 26.5608)"
                                                        >
                                                            <stop stop-color="#3771C8" />
                                                            <stop offset="0.128" stop-color="#3771C8" />
                                                            <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                                                        </radialGradient>
                                                    </defs>
                                                </svg>

                                                <svg style={{ marginRight: '2px' }} width="15" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2395 15H3.76051C1.76231 15 0.492022 13.8349 0.377839 11.8884L0.00674444 6.13256C-0.050347 5.26046 0.256519 4.42326 0.870253 3.78837C1.47685 3.15349 2.33322 2.7907 3.21814 2.7907C3.4465 2.7907 3.66773 2.65814 3.77478 2.44884L4.2886 1.45116C4.70965 0.634884 5.76584 0 6.68645 0H8.32069C9.24129 0 10.2903 0.634884 10.7114 1.44419L11.2252 2.46279C11.3323 2.65814 11.5464 2.7907 11.7819 2.7907C12.6668 2.7907 13.5232 3.15349 14.1297 3.78837C14.7435 4.43023 15.0503 5.26046 14.9933 6.13256L14.6222 11.8953C14.4937 13.8698 13.2591 15 11.2395 15ZM6.68645 1.04651C6.15836 1.04651 5.48752 1.45116 5.24488 1.9186L4.73106 2.92326C4.43133 3.48837 3.85328 3.83721 3.21814 3.83721C2.61868 3.83721 2.06203 4.07442 1.64812 4.5C1.24135 4.92558 1.03439 5.48372 1.07721 6.06279L1.4483 11.8256C1.53393 13.2349 2.31181 13.9535 3.76051 13.9535H11.2395C12.6811 13.9535 13.4589 13.2349 13.5517 11.8256L13.9228 6.06279C13.9585 5.48372 13.7587 4.92558 13.3519 4.5C12.938 4.07442 12.3813 3.83721 11.7819 3.83721C11.1467 3.83721 10.5687 3.48837 10.2689 2.93721L9.74798 1.9186C9.51248 1.45814 8.84165 1.05349 8.31356 1.05349H6.68645V1.04651Z" fill="#067B8C" />
                                                    <path d="M8.57069 5.23255H6.42976C6.13717 5.23255 5.89453 4.99534 5.89453 4.70929C5.89453 4.42324 6.13717 4.18604 6.42976 4.18604H8.57069C8.86329 4.18604 9.10593 4.42324 9.10593 4.70929C9.10593 4.99534 8.86329 5.23255 8.57069 5.23255Z" fill="#067B8C" />
                                                    <path d="M7.50057 12.2093C5.92342 12.2093 4.646 10.9605 4.646 9.41863C4.646 7.87677 5.92342 6.62793 7.50057 6.62793C9.07772 6.62793 10.3551 7.87677 10.3551 9.41863C10.3551 10.9605 9.07772 12.2093 7.50057 12.2093ZM7.50057 7.67444C6.51574 7.67444 5.71646 8.45584 5.71646 9.41863C5.71646 10.3814 6.51574 11.1628 7.50057 11.1628C8.4854 11.1628 9.28468 10.3814 9.28468 9.41863C9.28468 8.45584 8.4854 7.67444 7.50057 7.67444Z" fill="#067B8C" />
                                                </svg>

                                                <svg width="15" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.2395 15H3.76051C1.76231 15 0.492022 13.8349 0.377839 11.8884L0.00674444 6.13256C-0.050347 5.26046 0.256519 4.42326 0.870253 3.78837C1.47685 3.15349 2.33322 2.7907 3.21814 2.7907C3.4465 2.7907 3.66773 2.65814 3.77478 2.44884L4.2886 1.45116C4.70965 0.634884 5.76584 0 6.68645 0H8.32069C9.24129 0 10.2903 0.634884 10.7114 1.44419L11.2252 2.46279C11.3323 2.65814 11.5464 2.7907 11.7819 2.7907C12.6668 2.7907 13.5232 3.15349 14.1297 3.78837C14.7435 4.43023 15.0503 5.26046 14.9933 6.13256L14.6222 11.8953C14.4937 13.8698 13.2591 15 11.2395 15ZM6.68645 1.04651C6.15836 1.04651 5.48752 1.45116 5.24488 1.9186L4.73106 2.92326C4.43133 3.48837 3.85328 3.83721 3.21814 3.83721C2.61868 3.83721 2.06203 4.07442 1.64812 4.5C1.24135 4.92558 1.03439 5.48372 1.07721 6.06279L1.4483 11.8256C1.53393 13.2349 2.31181 13.9535 3.76051 13.9535H11.2395C12.6811 13.9535 13.4589 13.2349 13.5517 11.8256L13.9228 6.06279C13.9585 5.48372 13.7587 4.92558 13.3519 4.5C12.938 4.07442 12.3813 3.83721 11.7819 3.83721C11.1467 3.83721 10.5687 3.48837 10.2689 2.93721L9.74798 1.9186C9.51248 1.45814 8.84165 1.05349 8.31356 1.05349H6.68645V1.04651Z" fill="#0A66C2" />
                                                    <path d="M8.57069 5.23255H6.42976C6.13717 5.23255 5.89453 4.99534 5.89453 4.70929C5.89453 4.42324 6.13717 4.18604 6.42976 4.18604H8.57069C8.86329 4.18604 9.10593 4.42324 9.10593 4.70929C9.10593 4.99534 8.86329 5.23255 8.57069 5.23255Z" fill="#0A66C2" />
                                                    <path d="M7.50057 12.2093C5.92342 12.2093 4.646 10.9605 4.646 9.41863C4.646 7.87677 5.92342 6.62793 7.50057 6.62793C9.07772 6.62793 10.3551 7.87677 10.3551 9.41863C10.3551 10.9605 9.07772 12.2093 7.50057 12.2093ZM7.50057 7.67444C6.51574 7.67444 5.71646 8.45584 5.71646 9.41863C5.71646 10.3814 6.51574 11.1628 7.50057 11.1628C8.4854 11.1628 9.28468 10.3814 9.28468 9.41863C9.28468 8.45584 8.4854 7.67444 7.50057 7.67444Z" fill="#0A66C2" />
                                                </svg>

                                                <svg width="18" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.99936 3.53302L7.7781 1.77314C8.56007 1.40895 9.45269 1.40895 10.2347 1.77314L13.9984 3.52604C15.099 4.03863 15.8215 5.19071 15.7444 6.45024C15.4486 11.2815 14.1305 13.4654 10.5674 15.9992C9.62709 16.6678 8.3867 16.6662 7.44569 15.9986C3.89355 13.4786 2.52653 11.3251 2.25462 6.4333C2.18507 5.18204 2.90636 4.04206 3.99936 3.53302ZM11.6733 7.87042C11.8779 7.63662 11.8542 7.28125 11.6204 7.07668C11.3866 6.87211 11.0312 6.8958 10.8267 7.1296L8.67422 9.58952C8.60815 9.66503 8.49433 9.67514 8.41598 9.61246L7.10137 8.56077C6.85878 8.3667 6.5048 8.40603 6.31074 8.64862C6.11667 8.8912 6.156 9.24518 6.39858 9.43925L7.7132 10.4909C8.26166 10.9297 9.05835 10.8589 9.52087 10.3303L11.6733 7.87042Z" fill="#1AC92C" />
                                                </svg>
                                            </div>
                                            <div className="popup-div">
                                                <span>
                                                    {object.full_name ? object.full_name : '-'}
                                                    <svg className="my_down" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2 2L7 7L12 2" stroke="#0832DE" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </span>
                                                <ul style={{ fontWeight: 'bold' }}>
                                                    <li style={{ color: 'green', borderBottom: '1px solid grey' }}>Verify</li>
                                                    <li style={{ color: 'red', borderBottom: '1px solid grey' }}>Reject Verification</li>

                                                    <li style={{ borderBottom: '1px solid grey' }}>Email</li>
                                                    <li>View Pictures</li>
                                                    <li>View Profile</li>
                                                    <li>Suspend User</li>
                                                    <li>Require Verificat.</li>
                                                </ul>
                                            </div>
                                        </div></td>
                                    <td>{object.location ? object.location : '-'}</td>
                                    <td>10/10/2001</td>
                                    <td>{object.gender ? object.gender : '-'}</td>
                                    <td>{object.email ? object.email : '-'}</td>
                                    <td>{object.phone_number ? object.phone_number : '-'}</td>
                                    <td>{object.religion ? object.religion : '-'}</td>
                                    <td>{object.ethnicity ? object.ethnicity : '-'}</td>
                                    <td>{object.job_title ? object.job_title : '-'}</td>
                                    <td>{object.hometown ? object.hometown : '-'}</td>
                                    <td>{object.education ? object.education : '-'}</td>
                                    <td>{object.university ? object.university : '-'}</td>
                                    <td>{object.looking_for ? object.looking_for : '-'}</td>
                                    <td>{object.preferences_from_age ? object.preferences_from_age : '0'} - {object.preferences_to_age ? object.preferences_to_age : '0'}</td>
                                    <td>{object.height ? object.height : '-'}</td>
                                    <td>{object.preferences_distance ? object.preferences_distance : '-'}</td>
                                    <td>Red</td>
                                    <td>India</td>
                                    <td>{object.preferences_interest ? object.preferences_interest : '-'}</td>
                                    <td>{object.about_me ? object.about_me : '-'}</td>
                                    <td>{object.login_type ? object.login_type : '-'}</td>
                                    <td>{object.rating_received}</td>
                                    <td>{object.avg_overall_experience}</td>
                                    <td>{object.avg_selft_respect}</td>
                                    <td>{object.avg_conversation}</td>
                                    <td>{object.avg_profile_accurate}</td>
                                    <td>No</td>
                                    <td>Today</td>
                                    <td>No</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                    <td>{object.likes_received}</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr></>;
                        })}


                    </table>}


                </div>
            </div >
        </div >
    </>;
};

export default User;