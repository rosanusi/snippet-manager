import React, { Component } from "react";

class SnippetPane extends Component {

    render() {

        const { entries } = this.props;
        
        const snippet = entries[0];

        return (
        <div className="snippet-pane">
            <div key={snippet.key}>
                Name: {snippet.label}
            </div>
        </div>     
        );
        


    }
}


export default SnippetPane