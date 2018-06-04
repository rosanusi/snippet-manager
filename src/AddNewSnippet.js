import React, { Component } from "react";


class AddNewSnippet extends Component {

    render() {
        return(
            <div className="add-snippet">
                <form className="add-snippet-form" onSubmit={this.addSnippet}>
                    <input type="text" ref={(a) => this._inputLabel = a} placeholder="What snippet is this?"/>
                    <textarea name="snippet-code" ref={(a) => this._inputCode = a} placeholder="Add your code here"></textarea>
                    <button className="submit-snippet-btn">Add New Snippet</button>
                </form>
                <span className="icon addnew-icon">Add new snippet</span>
            </div>
        );
    }

}


export default AddNewSnippet