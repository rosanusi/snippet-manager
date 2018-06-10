import React, { Component } from "react";
import SnippetList from "./SnippetList"
import SnippetPane from "./SnippetPane"
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
        this.updateCode = this.updateCode.bind(this);

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
                code: "",
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


    showCode = (e, snippet) => {

        console.log(snippet);
        console.log(snippet.key);
        console.log(snippet.label);

        this.setState({ 
            label: snippet.label, 
            key: snippet.key
        });

    }


    updateCode(e) {

        e.preventDefault();        
        
        console.log("update the code in the textarea");

        console.log(this.inputCode);
        console.log(snippet);
        // console.log(snippet.key);
        // console.log(snippet.label);

        // this.setState({ 
        //     label: snippet.label, 
        //     key: snippet.key,
        //     code: snippet.code
        // });

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
                entries={this.state.snippets}
                showCode={this.showCode}
                />
            </div>
            <SnippetPane 
                entries={this.state.snippets}
                label={this.state.label}
                id={this.state.key}
                code={this.state.code}
                inputCode={form => this.inputCode = form}
                updateCode={this.updateCode}                
            />
         </div>
        );   
    }
}

export default SnippetManager;
