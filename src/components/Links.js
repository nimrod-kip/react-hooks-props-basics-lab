import React from "react";
// import User from "../data/user";

function Links(props) {
    return (
        <>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>


        </>
    )
}

export default Links;