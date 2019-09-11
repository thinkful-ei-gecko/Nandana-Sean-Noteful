import React from 'react';
import ReactDOM from 'react-dom'
import FolderElement from './FolderElement';
import './App.css'

class FolderSelectBox extends React.Component{

    handleAdd(e){
        e.preventDefault();
        console.log("Ive been Clicked")
    }
    
    render () {

        return(
            <div className="folderSelectBox">
                <FolderElement />
                <button type="button" onClick={this.handleAdd}>Add Folder</button>
            </div>

        )
    }

}

export default FolderSelectBox