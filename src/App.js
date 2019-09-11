import React from 'react';
import './App.css';
import Header from './Header';
import FolderSelectBox from './FolderSelectBox'
import NotesOuterBox from './NotesOuterBox';

class App extends React.Component {
  
  state={
    folderCount:0,
    totalNoteCount:0,
    noteCountInFolder:0,
    contents:[{
      folderNum:'',
      noteContents:'',
      dateModifed:'',
    }],
  }

  updateState(){
      
  }

  render(){
  return (
    <div className="App">
        <Header />
        <div className="outerContainer">
        <FolderSelectBox />
        <NotesOuterBox />
        </div>
    </div>
  )
  }

}

export default App;
