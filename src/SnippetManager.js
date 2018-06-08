import React, { Component } from "react";
import SnippetList from "./SnippetList"
import SnippetControls from "./SnippetControls"
import SnippetForm from "./SnippetForm"
import "./snippetManager.css"

const savedSnippets = localStorage.getItem("savedSnippets");
let snippets;

class SnippetManager extends Component {

    constructor(props) {
        super(props);

        this.addSnippet = this.addSnippet.bind(this);
        this.showSnippetForm = this.showSnippetForm.bind(this);
        this.showCode = this.showCode.bind(this);

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

        e.preventDefault();        
        
        if (this.inputLabel.value !== "")  {
            const newSnippet = {
                label: this.inputLabel.value,
                key: Date.now()
            };

            snippets.unshift(newSnippet);
            localStorage.setItem("savedSnippets", JSON.stringify(snippets));                

            this.setState({ snippets });

        } else {
            console.log("To-Do: Display error message, it's not working");
        }

        this.inputLabel.value = "";

        this.inputForm.classList.remove("show");
    }


    showSnippetForm(e) {
        console.log("Whatsup! you good?");
        console.log(this.inputForm);

        this.inputForm.classList.toggle("show");
        this.inputLabel.focus();
    }

    showCode(e) {
        console.log("Ok! Ok! Time to show something");
        console.log(this.state.snippets.snippet);
    }



    render() {
        
     return (
         <div className="snippet-manager">   
            <div className="list-pane">
                <SnippetControls
                showSnippetForm={this.showSnippetForm}
                />
                <SnippetForm 
                    addSnippet={this.addSnippet}
                    inputForm={form => this.inputForm = form}
                    inputLabel={input => this.inputLabel = input}
                />
                <SnippetList 
                showCode={this.showCode}
                entries={this.state.snippets}
                />       
            </div>
         </div>
        );   
    }
}

export default SnippetManager;
