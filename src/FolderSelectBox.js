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
        const folders = (this.props.storeFolders).map(folder => {
            return <FolderElement folderName={folder.name} {...this.props} /> 
        });
        return(
            <div className="folderSelectBox">
                {folders}
                <button type="button" onClick={this.handleAdd}>Add Folder</button>
            </div>

        );
    }

}

export default FolderSelectBox