import React, { Component } from "react";

class SnippetList extends Component {

    render() {

        const { showCode, entries } = this.props;

        const snippetEntries = entries.map((snippet) =>
            <li  onClick={((e) => showCode(e, snippet))}
                key={snippet.key}>
                {snippet.label}    
            </li>
        ); 

        return (
            <div>
            <ul className="snippet-list">
                { snippetEntries }
            </ul>
            </div>
        );

        


    }
}


export default SnippetList