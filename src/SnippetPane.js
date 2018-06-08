import React, { Component } from "react";


class SnippetPane extends Component {

    render() {

        const { showCode } = this.props;         

        const snippetEntries = this.props.entries.map(function(snippet, i){
        return <li  onClick={showCode} 
                    key={snippet.key}>
                    
                    {snippet.label}
                    
                    </li>;
        }) 

        return (
            <ul className="snippet-list">
                { snippetEntries }
            </ul>
        );
    }
}


export default SnippetPane