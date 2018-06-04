import React, { Component } from "react";
import SnippetList from "./SnippetList"
import AddNewSnippet from "./AddNewSnippet"
import "./snippetManager.css"

const savedSnippets = localStorage.getItem("savedSnippets");
let snippets;

class SnippetManager extends Component {

    constructor(props) {
        super(props);

        this.state = { snippets: undefined };

        this.addSnippet = this.addSnippet.bind(this);

    }

    componentWillMount() {
        if (savedSnippets == null) {
            snippets = [];
        } else {
            snippets = JSON.parse(savedSnippets);
        }
        this.setState({ snippets });
    }


    addSnippet(e) {
        
        if (this._inputLabel.value !== "" && this._inputCode.value !== "")  {
            const newSnippet = {
                label: this._inputLabel.value,
                code: this._inputCode.value,
                key: Date.now()
            };

            snippets.push(newSnippet);
            localStorage.setItem("savedSnippets", JSON.stringify(snippets));                

            this.setState({ snippets });

        } else {
            console.log("To-Do: Display error message, it's not working");
        }

        this._inputLabel.value = "";
        this._inputCode.value = "";

        console.log(this.state.snippets);

        e.preventDefault();

    }

    render() {
     return (
         <div className="snippet-manager">   
            <div className="list-pane">
                <SnippetList entries={this.state.snippets}/>            
                <AddNewSnippet/>                         
            </div>
         </div>
        );   
    }
}

export default SnippetManager;
