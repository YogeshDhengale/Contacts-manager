import React, { useState } from 'react'
import {RiDeleteBinLine} from 'react-icons/ri'
import DeleteConfirmScreen from '../Delete-Confirm-Screen/Delete-Confirm-Screen'
import './Deleted-Screen.css'

const DeleteScreen = ({setCom}) => {
    const [ok, setOk]=useState(false)

  return (
    <>
    <div className="delete-panel">
        <div className="delete-blur-display">
            <div className="content">
                <div className="icon"><RiDeleteBinLine></RiDeleteBinLine> </div>
                <h4 className="Delete-title">Delete Contacts</h4>
                <h6 className='question'>Sure you want delete this Contacts ?</h6>
                <div className="buttons">
                    <button className="cancel" onClick={() => setCom(false)}>Cancel</button>
                    <button onClick={()=>{setOk(true)}}>Ok</button>
                </div>
            </div>
        </div>
    </div>
            {ok && <DeleteConfirmScreen setCom={setCom}></DeleteConfirmScreen>}
    {}
  </>
  )
}

export default DeleteScreen