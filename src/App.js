import React from 'react';
import './App.css';
import Header from './Header';
import FolderSelectBox from './FolderSelectBox'
import NotesOuterBox from './NotesOuterBox';

class App extends React.Component {
  
  state={}

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
