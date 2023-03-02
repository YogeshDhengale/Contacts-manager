import { AiOutlineCalendar } from "react-icons/ai"
import Navbar from "../navbar/navbar"
import SideNavBar from "../sideNavBar/SideNavBar"
import './Contacts-Page.css'

const Contacts_page = () => {
    return (
        <>
            <SideNavBar></SideNavBar>
            <Navbar></Navbar>
            <div className="contactTable">
                <div className="date">
                    <span className="calendericon">{<AiOutlineCalendar></AiOutlineCalendar>}</span>
                    <input type="date" className="selectDate" name="" id="" placeholder="Select Date" />
                </div>
            </div>

        </>
    )

}
export default Contacts_page