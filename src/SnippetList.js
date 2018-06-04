import React, { Component } from "react";







class SnippetList extends Component {

    render() {

        const snippetEntries = this.props.entries.map(function(snippet, i){
        return <li key={snippet.key}>{snippet.label}</li>;
        }) 

        return (
            <ul className="snippet-list">
                { snippetEntries }
            </ul>
        );
    }
}


export default SnippetList