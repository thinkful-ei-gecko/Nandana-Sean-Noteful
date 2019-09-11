import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'

class FolderElement extends React.Component {

    render () {

        return(
            <div>
               <li className="folderElement">Folder</li>
               <li className="folderElement">Folder</li>
               <li className="folderElement">Folder</li> 
            </div>
        )
    }

}

export default FolderElement