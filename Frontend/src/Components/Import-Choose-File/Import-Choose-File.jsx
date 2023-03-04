import circle from '../../assets/Ellipse 33.png'
import '../Import-Choose-File/Import-Choose-File.css'
import importSign from '../../assets/Vector.png'

const Import_Choose_File = ({ onCancel }) => {

    return (
        <div>
            <div className="container">
                <img src={circle} className='circle' />
                <img src={importSign} className='importSign'/>
                <h1 className='heading'>Import File</h1>
                <label htmlFor="choose-file" id='label'>Drag & Drop a CSV File to Upload</label>
                <button id='cancel' onClick={onCancel}>Cancel</button>
                <input type="file" id='choose-file'/>
            </div>
        </div>
    )
}

export default Import_Choose_File