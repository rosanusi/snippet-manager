import React, { Component } from "react";

class SnippetPane extends Component {

    render() {

        const {label, key, inputCode, updateCode  } = this.props;

        return (
        <div className="snippet-pane">
            <div key={key}>
                <span>Name: {label}</span>
                <span>id: {key}</span>
                <form key={key} className="update-code-form" onSubmit={((e) => updateCode(e))}>
                <textarea name="code" placeholder={label} ref={inputCode}></textarea>
                <button className="save-snippet">Save Snippet</button>
                </form>
            </div>
        </div>     
        );
        


    }
}


export default SnippetPane