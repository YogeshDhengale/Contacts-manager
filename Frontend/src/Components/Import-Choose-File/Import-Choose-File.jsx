import React from 'react'
import '../Import-Choose-File/Import-Choose-File.css'
import ImportComplete from '../Import-Complete/Import-Complete'
import {AiOutlineFileAdd}  from 'react-icons/ai'

const Import_Choose_File = ({ onCancel }) => {

    return (
        <div className="import-panel">
            <div className="import-blur-display">
                <div className="content">
                    <div className="icon"><AiOutlineFileAdd></AiOutlineFileAdd></div>
                    <h4 className="import-title">Import File</h4>
                    <div className="input">
                    <label htmlFor='choose-file' className="line">Drag & Drop a CSV File to Upload</label>
                        <button className="cancel" onClick={onCancel}>Cancel</button>
                        <input type="file" id='choose-file' onChange={()=>{<ImportComplete></ImportComplete>}}/>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Import_Choose_File