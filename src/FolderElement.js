import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'

class FolderElement extends React.Component {

    render () {

        return(
            <div>
               <li className="folderElement"
               key={this.props.storeFolders.id} 
               onClick={e => this.props.handleOnclickFolder(this.props.storeFolders.id)}>{this.props.folderName}</li>
            </div>
        )
    }

}

export default FolderElement