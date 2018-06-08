import React, { Component } from "react";


class SnippetControls extends Component {

    render() {

        const { showSnippetForm } = this.props;

        return (
            <div className="snippet-controls">
                <button type="button" className="icon addnew-icon" onClick={showSnippetForm}>+</button>            
            </div>
        );
    }
}


export default SnippetControls