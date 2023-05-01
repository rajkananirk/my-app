import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home.js";
import NoPage from "./pages/NoPage";
import Rating from "./pages/Rating";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Blogs from "./pages/Blogs";
import Sendnotification from "./pages/Sendnotification";
import ReportUser from "./pages/ReportUser";
import ApplicantUser from "./pages/ApplicantUser";
import DatingSpot from "./pages/DatingSpot";
import SwipeActivity from "./pages/SwipeActivity";
import styles from "./styles/Home.module.scss";
import Sidebar from "./pages/components/sidebar";
import Setting from './pages/Setting';

// import Sendnotification from "../pages/sendnotification";
// import Usertable from "../pages/usertable";

function App() {
  return (
    <>
      <main className={styles.mainBody}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route index element={<Login />} />
              <Route path="rating" element={<Rating />} />
              <Route path="settings" element={<Setting />} />
              <Route path="contact" element={<Contact />} />
              <Route path="applicants" element={<ApplicantUser />} />
              <Route path="users" element={<User />} />
              <Route path="dating-spot" element={<DatingSpot />} />
              <Route path="report-users" element={<ReportUser />} />
              <Route path="swipe-activity" element={<SwipeActivity />} />
              <Route path="push" element={<Sendnotification />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
