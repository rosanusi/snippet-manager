import React from "react";
import ReactDOM from "react-dom";
import SnippetManager from "./SnippetManager";
// import JsonApi from "./JsonApi";
import "./reset.css";
import "./index.css";



const wrap = document.querySelector(".wrap");



ReactDOM.render (
    <SnippetManager/>,
    wrap
);