import React, { Component } from "react";

var xhr;

class JsonApi extends Component {

    constructor(props, context) {
        super(props, context);
        
        this.state = {
            key: "...",
            label: "..."
        };
        
        this.processRequest = this.processRequest.bind(this);
        }
        
        componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "http://demo9915758.mockable.io/snippet-manager", true);
        xhr.send();
        
        xhr.addEventListener("readystatechange", this.processRequest, false);
        }
        
        processRequest() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
        
            this.setState({
                key: response.key,
                label: response.label
            });
        }
    }


    render() {
      return (
        <p>this is the key {this.state.label}</p>
      );
    }
  }
   
  export default JsonApi;