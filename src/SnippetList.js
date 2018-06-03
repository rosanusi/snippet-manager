import React, { Component } from "react";



class SnippetList extends Component {


    createSnippets(snippet){
        return <li key={snippet.key}>{snippet.label}</li>
    }

    render() {
        const snippetEntries = this.props.entries;
        const snippetsBag = snippetEntries.map(this.createSnippets);

        return (
            <ul className="snippet-list">
                {snippetsBag}

            </ul>
        );
    }
}


export default SnippetList