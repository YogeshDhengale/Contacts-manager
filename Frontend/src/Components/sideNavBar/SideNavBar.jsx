import React from 'react'
import './sidebar.css'
import {MdOutlineDashboard, MdOutlineContacts} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import logo from "../../assets/Logo.png"

const SideNavBar = () => {
  return (
    <>
    <section class="app">
  <aside class="sidebar">
         <header>
        <h1 className="img">LOGO</h1>
      </header>
    <nav class="sidebar-nav">
      <ul>
        <li>
          <a href="#" className='dashboardTotalContacts'><i class="ion-bag"></i> <span><MdOutlineDashboard className='md'></MdOutlineDashboard> DashBoard</span></a>
        </li>
        <li>
          <a href="#" className='dashboardTotalContacts'><i class="ion-ios-settings"></i> <span class=""><MdOutlineContacts className='md'></MdOutlineContacts>Total Contacts</span></a>
        </li>
      </ul>
      <div className='logout'>
             <button className='logoutbtn'>{<FiLogOut></FiLogOut>} Log out</button>
      </div>
    </nav>
  </aside>
</section>
    </>
  )
}

export default SideNavBar