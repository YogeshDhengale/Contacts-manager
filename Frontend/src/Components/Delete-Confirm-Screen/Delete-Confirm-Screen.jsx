import React from 'react'
import {FaCheck} from 'react-icons/fa'
import './Delete-Confirm-Screen.css'

const DeleteConfirmScreen = ({setCom}) => {
    return (
        <div className="delete-panel">
            <div className="delete-blur-display">
                <div className="content">
                    <div className="icon"><FaCheck></FaCheck> </div>
                    <h4 className="Delete-title">Delete Contacts</h4>
                    <button className="ok" onClick={() => { setCom(false) }}>Ok</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteConfirmScreen