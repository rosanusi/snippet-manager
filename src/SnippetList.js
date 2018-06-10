import React, { Component } from "react";

class SnippetList extends Component {

    render() {

        const { showCode, entries } = this.props;


        const snippetEntries = entries.map((snippet) =>
            <li  onClick={showCode} key={snippet.key}>
                {snippet.label}    
            </li>
        ); 

        const snippet = entries[0];
        const snippetDetails = (
            <div>
                key={snippet.key}
                id={snippet.label}
                title={snippet.code}
            </div>            
        );

        return (
            <div>
            <ul className="snippet-list">
                { snippetEntries }
            </ul>
            { snippetDetails }
            </div>
        );

        


    }
}


export default SnippetList