import React, { Component } from "react";


class SnippetForm extends Component {


    render() {
        
        const { addSnippet, inputForm } = this.props; 


        return (
            <form className="add-snippet-form" ref={inputForm} onSubmit={addSnippet}>
                <input type="text" ref={this.props.inputLabel} placeholder="What snippet is this?"/>
                <span className="enter-icon">⨼</span>
            </form>
        );
    }
}


export default SnippetForm