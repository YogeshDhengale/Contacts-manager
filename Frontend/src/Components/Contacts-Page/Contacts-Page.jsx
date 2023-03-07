import { AiOutlineDelete } from 'react-icons/ai';
import { CiExport } from 'react-icons/ci';
import { BsFilter } from 'react-icons/bs';
import { MdImportExport } from 'react-icons/md';
import Navbar from '../navbar/navbar';
import SideNavBar from '../SideNavBar/SideNavBar';
import './Contacts-Page.css';
import ImportChooseFile from '../Import-Choose-File/Import-Choose-File';
import DeleteScreen from "../Deleted-Screen/Deleted-Screen"
import { useEffect, useState } from "react"
import axios from 'axios'
import { TiPencil } from 'react-icons/ti'
import { RiDeleteBin6Line } from 'react-icons/ri'


const Contacts_page = () => {
  const [showImport, setShowImport] = useState(false);
  const [date, setDate] = useState('Select Date');
  const [com, setCom] = useState(false)
  const [contacts, setContacts] = useState({})


  useEffect(() => {
    const fetchContacts = async () => {
      await axios.get('http://localhost:3001/contacts', {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11emlAZ21haWwuY29tIiwiaWF0IjoxNjc4MTY4NTQzLCJleHAiOjE2NzgyNTQ5NDN9.VwYh49CTML6UrRt8CBodO_N9BZVKfVBwsaAdbXC1mL4"
        }
      })
        .then((res) => {
          setContacts(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    console.log(contacts)

    fetchContacts()
  }, [contacts]
  )


  const handleImport = () => {
    setShowImport(true);
  };

  const handleCancelImport = () => {
    setShowImport(false);
  };

  const handleDelete = () => {
    
  }

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
                <th scope="col">Country</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {Object.keys(contacts).map((key) => (
                  <tr key={key}>
                    <td>
                    <input type="checkbox"/>{contacts[key].Name}
                    </td>
                    <td>{contacts[key].Designation}</td>
                    <td>{contacts[key].Company}</td>
                    <td>{contacts[key].Industry}</td>
                    <td>{contacts[key].Email}</td>
                    <td>{contacts[key].Phone}</td>
                    <td>{contacts[key].Country}</td>
                    <td>
                    <div className="actionbtn">
                      <div className="pen"><TiPencil></TiPencil></div>
                      <div className="del" onClick={handleDelete}><RiDeleteBin6Line></RiDeleteBin6Line></div>
                    </div>
                  </td>
                  </tr>
                ))}
            </tbody>

          </table>
        </div>
        {showImport && (
          <ImportChooseFile className="import-ui" onCancel={handleCancelImport} />
        )}
      </div>
      <div>
        {com && <DeleteScreen setCom={setCom} ></DeleteScreen>}
      </div>

    </>
  );
};

export default Contacts_page;