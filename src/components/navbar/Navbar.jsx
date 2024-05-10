import { IoNotificationsOutline } from "react-icons/io5";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import './Navbar.css';
import { useState } from "react";

const Navbar = () => {
    const [showMobileMenu, setshowMobileMenu] = useState(false)
    return (
        <div className="navbar">
            <div className="navbarInner">
                <div className="navBarLeftSide">
                    <span>Dashboard</span>
                    <ul className={showMobileMenu && 'showMobileMenu'}>
                        <span className="timesIcon" onClick={() => setshowMobileMenu(false)}><FaTimes /></span>
                        <li><a href="#">Master Price</a></li>
                        <li><a href="#">Custom Price</a></li>
                        <li><a href="#">Calender</a></li>
                        <li><a href="#">Reports</a></li>
                    </ul>
                </div>
                <div className="navBarRightSide">
                    <span>
                        <IoNotificationsOutline />
                    </span>
                    <span>
                        <FaUserCircle />
                    </span>
                    <span className="barIcon" onClick={() => setshowMobileMenu(true)}>
                        <FaBars />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar