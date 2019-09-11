import React from 'react';
import ReactDOM from 'react-dom'

class NoteElement extends React.Component {

    handleDelete(e){
        e.preventDefault();
        console.log("Lets Delete Something!")
    }
    render () {

        return(
            <div>
                <li className="noteElement"> Note 1 <br/><button type="button" onClick={this.handleDelete}>Delete Note</button> </li>
            </div>
        )
    }
}

export default NoteElement