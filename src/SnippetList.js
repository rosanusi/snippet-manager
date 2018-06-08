import React, { Component } from "react";
import SnippetPane from "./SnippetPane";

class SnippetList extends Component {

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


        const snippetPane = this.props.entries.map(function(snippet, i){
            return  <div key={snippet.key}>  
                        {snippet.label}      
                    </div>;
            }) 
    }
}


export default SnippetList