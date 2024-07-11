import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement("div", { id: "heading" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm Aniket Kalaskar , 😍"),React.createElement("h2", {}, "I'm h2 tag")]));


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// root.render(parent);