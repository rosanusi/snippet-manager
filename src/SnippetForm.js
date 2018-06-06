import React, { Component } from "react";


class SnippetForm extends Component {


    render() {
        
        const { addSnippet } = this.props; 


        return (
            <form className="add-snippet-form" ref={this.props.inputForm} onSubmit={addSnippet}>
                <input type="text" ref={this.props.inputLabel} placeholder="What snippet is this?"/>
                <button className="submit-snippet-btn" >Add New Snippet</button>
            </form>
        );
    }
}


export default SnippetForm