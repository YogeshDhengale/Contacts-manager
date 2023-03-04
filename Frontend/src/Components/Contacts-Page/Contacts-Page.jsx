
import { AiOutlineCalendar, AiOutlineDelete } from 'react-icons/ai';
import { CiExport } from 'react-icons/ci';
import { BsFilter, BsPencil } from 'react-icons/bs';
import { MdImportExport } from 'react-icons/md';
import Navbar from '../navbar/navbar';
import SideNavBar from '../SideNavBar/SideNavBar';
import './Contacts-Page.css';
import Import_Choose_File from '../Import-Choose-File/Import-Choose-File';
import DeleteScreen from "../Deleted-Screen/Deleted-Screen"
import { useState } from "react"

const Contacts_page = () => {
  const [showImport, setShowImport] = useState(false);
  const [date, setDate]=useState('Select Date');
  const [com, setCom]=useState(false)

  const handleImport = () => {
    setShowImport(true);
  };

  const handleCancelImport = () => {
    setShowImport(false);
  };

  return (
    <>
      <SideNavBar />
      <Navbar />
      <div className="contactTable">
        <div className="buttons">
          <div className="bttons-left">

            <button className="date"><label htmlFor="date">{date}</label><input type="date" onChange={(e) => {
              if (e.target.value) {
                setDate(e.target.value)
              } else {
                setDate("Select Date")
              }
            }} /></button>

            <button className="filter">
              <BsFilter /> Filter |
            </button>
          </div>
          <div className="bttons-right">
            <button className="delete" onClick={() => { setCom(true) }}>
              <AiOutlineDelete />Delete
            </button>
            <button className="import" onClick={handleImport}>
              <MdImportExport />Import
            </button>
            <button className="export">
              <CiExport />Export
            </button>
          </div>
        </div>

        <div className="table">
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" /> Name
                </th>
                <th scope="col">Designation</th>
                <th scope="col">Company</th>
                <th scope="col">Industry</th>
                <th scope="col">Email</th>
                <th scope="col">Phone No.</th>
                <th scope="col">Contry</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
          </table>
        </div>
        {showImport && (
          <Import_Choose_File className="import-ui" onCancel={handleCancelImport} />
        )}
      </div>
      <div>
        {com && <DeleteScreen setCom={setCom} ></DeleteScreen>}
      </div>

    </>
  );
};

export default Contacts_page;