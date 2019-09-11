import React from 'react';
import './App.css';
import Header from './Header';
import FolderSelectBox from './FolderSelectBox'
import NotesOuterBox from './NotesOuterBox';

class App extends React.Component {
  
 state={
   folders:this.props.store.folders,
   notes:this.props.store.notes};
  
 handleOnclickFolder = (key) => {
 const folderContents = this.state.notes.filter(note =>
  (key===this.state.folders.folderid) );
   this.setState({
    notes:folderContents
  });

 };

  render(){
  return (
    <div className="App">
        <Header />
        <div className="outerContainer">
        <FolderSelectBox  storeFolders={this.state.folders} handleOnClickFolder={this.handleOnclickFolder}/>
        <NotesOuterBox storeNotes={this.state.notes}/>
        </div>
    </div>
  )
  }

}

export default App;
