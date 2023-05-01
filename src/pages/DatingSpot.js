import React, { useEffect, useState } from "react";
import axios from 'axios';
import Layout from "./Layout";
import { RotatingLines } from 'react-loader-spinner'
import CountUp from 'react-countup';


const User = () => {
    const [data, setData] = useState([]);
    const [ischeck, setIsCheck] = useState(false);
    const [showmodal, setShowModal] = useState(0);
    const [setactiveall, setActiveAll] = useState("");
    const [setactiveall1, setActiveAll1] = useState("");
    const [setactiveall2, setActiveAll2] = useState("");
    const [setactiveall3, setActiveAll3] = useState("");
    const [setactiveall4, setActiveAll4] = useState("");
    const [setactiveall5, setActiveAll5] = useState("");


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

        <div className="report-modsal addS" id="mydiv" style={showmodal == 0 ? { display: 'none' } : { display: 'flex', overflow: 'scroll', height: ' -webkit-fill-available' }} >
            <div>
                <div className="close-icon" onClick={() => setShowModal(0)}>

                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.12976 7.00019L12.6606 2.71019C12.859 2.52188 12.9704 2.26649 12.9704 2.00019C12.9704 1.73388 12.859 1.47849 12.6606 1.29019C12.4621 1.10188 12.193 0.996094 11.9124 0.996094C11.6319 0.996094 11.3627 1.10188 11.1643 1.29019L6.64407 5.59019L2.12381 1.29019C1.9254 1.10188 1.6563 0.996094 1.3757 0.996094C1.09511 0.996094 0.826004 1.10188 0.627593 1.29019C0.429182 1.47849 0.317716 1.73388 0.317716 2.00019C0.317716 2.26649 0.429182 2.52188 0.627593 2.71019L5.15839 7.00019L0.627593 11.2902C0.528834 11.3832 0.450447 11.4938 0.396953 11.6156C0.343459 11.7375 0.315918 11.8682 0.315918 12.0002C0.315918 12.1322 0.343459 12.2629 0.396953 12.3848C0.450447 12.5066 0.528834 12.6172 0.627593 12.7102C0.725546 12.8039 0.842083 12.8783 0.970483 12.9291C1.09888 12.9798 1.2366 13.006 1.3757 13.006C1.5148 13.006 1.65252 12.9798 1.78092 12.9291C1.90932 12.8783 2.02586 12.8039 2.12381 12.7102L6.64407 8.41019L11.1643 12.7102C11.2623 12.8039 11.3788 12.8783 11.5072 12.9291C11.6356 12.9798 11.7733 13.006 11.9124 13.006C12.0515 13.006 12.1893 12.9798 12.3177 12.9291C12.4461 12.8783 12.5626 12.8039 12.6606 12.7102C12.7593 12.6172 12.8377 12.5066 12.8912 12.3848C12.9447 12.2629 12.9722 12.1322 12.9722 12.0002C12.9722 11.8682 12.9447 11.7375 12.8912 11.6156C12.8377 11.4938 12.7593 11.3832 12.6606 11.2902L8.12976 7.00019Z" fill="#ABB4BD" />
                    </svg>
                </div>

                <h1 style={{ textAlign: 'start' }}>
                    Add Dating Spot
                </h1>
                <div className="main-div add-sports">
                    <div>
                        <div>
                            <h3>Name of Spot:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>City:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>App Location:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Top tag:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Bottom tag:</h3>
                            <input />
                        </div>

                    </div>
                    <div>
                        <div>
                            <h3>Category:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Day/Time:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Name of Link:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Link:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Description:</h3>
                            <input />
                        </div>
                        <div>
                            <h3>Cost:</h3>
                            <input />
                        </div>

                    </div>

                </div>
                <div className='send_btn'>
                    <button >Publish</button>
                </div>
            </div>
        </div>

        <div className="usertable-body" style={{ overflow: 'auto' }}>
            <div className="usertable-body-container">
                <div style={{ borderBottom: '13px solid #ccc' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <span style={{ fontSize: '25px', margin: '0px' }}>
                            <h4>Dating Spots</h4>

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
                    <div className="all-btns res-all-btns">
                        <div className="f-div" style={{ marginLeft: '15px', display: 'flex', alignItems: 'center' }}>
                            <div>

                                <div style={{ display: 'flex' }} className="res-header-icon">

                                    <a onClick={() => setactiveall ? setActiveAll('') : setActiveAll('cat-active')} className={setactiveall}>All</a>
                                    <a onClick={() => setactiveall1 ? setActiveAll1('') : setActiveAll1('cat-active')} className={setactiveall1}>Food/Drinks</a>
                                    <a onClick={() => setactiveall2 ? setActiveAll2('') : setActiveAll2('cat-active')} className={setactiveall2}>Music/Arts</a>
                                    <a onClick={() => setactiveall3 ? setActiveAll3('') : setActiveAll3('cat-active')} className={setactiveall3}>Sports</a>
                                    <a onClick={() => setactiveall4 ? setActiveAll4('') : setActiveAll4('cat-active')} className={setactiveall4}>Outdoors</a>
                                    <a onClick={() => setactiveall5 ? setActiveAll5('') : setActiveAll5('cat-active')} className={setactiveall5}>Hot Spot</a>
                                </div>

                            </div>

                        </div>
                        <div style={{ display: 'flex' }} className="res-header-icon">

                            <button className="inapp-btn" onClick={() => setShowModal(1)}>Add New</button>
                            <button className="veryfy-btn">Publish</button>
                            <button className="suspend-btn">Unpublish</button>
                        </div>
                        <div style={{ display: 'flex' }} className="res-header-icon">

                            <button className="save-btn">SAVE CHANGES</button>
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
                                Name
                            </th>
                            <th>Location</th>
                            <th>Category</th>
                            <th>Time/Date <br />
                                (*HOTSpot ONLY)</th>
                            <th>Link Description</th>
                            <th>Link</th>
                            <th>Picture</th>
                            <th>Mark Trending</th>
                            <th>Status</th>
                            <th># Selections <br />All time</th>
                            <th># Selections <br />Last Week</th>
                            <th># Selections<br /> Men  </th>
                            <th># Selections<br />Women  </th>
                            <th># Selections<br />Nonbinary  </th>
                            <th># Match Dates </th>
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
                                                Yankees Game
                                            </div>
                                        </div>
                                    </td>
                                    <td>Manhattan, NY</td>
                                    <td>Sports</td>
                                    <td>-</td>
                                    <td>Event Link</td>
                                    <td>www.ewedt</td>
                                    <td>Uploaded</td>
                                    <td>Yes</td>
                                    <td>Published</td>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>20</td>
                                    <td>40</td>

                                </tr></>;
                        })}


                    </table>}


                </div>
            </div>
        </div>
    </>;
};

export default User;