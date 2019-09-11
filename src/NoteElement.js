import React from 'react';
import ReactDOM from 'react-dom'

class NoteElement extends React.Component {

    render () {

        return(
            <div>
                <li className="noteElement"> Note 1 <button type="button">Delete Note</button> </li>
            </div>
        )
    }
}

export default NoteElement