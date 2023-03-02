import { AiOutlineCalendar, AiOutlineDelete } from "react-icons/ai"
import {CiExport} from 'react-icons/ci'
import { BsFilter, BsPencil } from 'react-icons/bs'
import { MdImportExport} from "react-icons/md"
import { RiDeleteBin6Line } from 'react-icons/ri'
import Navbar from "../navbar/navbar"
import SideNavBar from "../sideNavBar/SideNavBar"
import './Contacts-Page.css'

const Contacts_page = () => {
    return (
        <>
            <SideNavBar></SideNavBar>
            <Navbar></Navbar>
            <div className="contactTable">
                <div className="buttons">
                <div className="bttons-left">
                    <button className="date">{<AiOutlineCalendar></AiOutlineCalendar>}Select Date <input type="date" /></button>
                    <button className="filter">{ <BsFilter></BsFilter>} Filter | </button>
                </div>
                <div className="bttons-right">
                    <button className="delete">{<AiOutlineDelete></AiOutlineDelete>}Delete</button>
                    <button className="import">{<MdImportExport></MdImportExport>}Import</button>
                    <button className="export">{<CiExport></CiExport>}Export</button>
                </div>

                </div>
                
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th scope="col"> <input type="checkbox" /> Name</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Company</th>
                                <th scope="col">Industry</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone No.</th>
                                <th scope="col">Contry</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>  <input type="checkbox" /> Tejas Vardhan</td>
                                <td>Director</td>
                                <td>Ashok Lyland</td>
                                <td>Oil & Energy</td>
                                <td>Abc123@gmail.com</td>
                                <td>1234567890</td>
                                <td>India</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" />Ramesh</td>
                                <td>Director</td>
                                <td>Ashok Lyland</td>
                                <td>Oil & Energy</td>
                                <td>Abc123@gmail.com</td>
                                <td>1234567890</td>
                                <td>India</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Tejas Vardhan</td>
                                <td>Director</td>
                                <td>Ashok Lyland</td>
                                <td>Oil & Energy</td>
                                <td>Abc1234@gmail.com</td>
                                <td>1234567890</td>
                                <td>India</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Tejas Vardhan</td>
                                <td>Director</td>
                                <td>Ashok Lyland</td>
                                <td>Oil & Energy</td>
                                <td>Abc123@gmail.com</td>
                                <td>1234567890</td>
                                <td>India</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Raju</td>
                                <td>owner</td>
                                <td>Asian paints</td>
                                <td>Consumers Service</td>
                                <td>raju12@gmail.com</td>
                                <td>764822811</td>
                                <td>Aus</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Karthik</td>
                                <td>Owner</td>
                                <td>Aurobindo Pharma</td>
                                <td>Consumer Services</td>
                                <td>Karthik34@gmail.com</td>
                                <td>767422911</td>
                                <td>Ind</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Sanju</td>
                                <td>CEO</td>
                                <td>Bajaj Finance</td>
                                <td>Appreal Fashion</td>
                                <td>Sanju@gmail.com</td>
                                <td>7648356789</td>
                                <td>India</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                            <tr>
                                <td> <input type="checkbox" /> Rakesh</td>
                                <td>Founder</td>
                                <td>Tata Motors</td>
                                <td> Appreal Fashion</td>
                                <td>rakeshram@gmail.com</td>
                                <td>7434567890</td>
                                <td>Ind</td>
                                <td className="actionbtn"><a className="pen"><BsPencil></BsPencil></a> <a className="del"><RiDeleteBin6Line></RiDeleteBin6Line></a> </td>
                            </tr>
                         
                           
                        </tbody>
                    </table>

                </div>
            </div>

        </>
    )

}
export default Contacts_page