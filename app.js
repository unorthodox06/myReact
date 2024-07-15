import React from "react";
import ReactDOM from 'react-dom';

//react element
const JsxHeading = () => (
    <h1 className="heading">
        hello this is me Aniket
    </h1>);


//react component way 1
const HeadingComponent1 = () => (
    <div className="container">
        <JsxHeading />
        <h1 className="first" > this is the component 1</h1>
    </div>

);

//react component way 2

const HeadingComponent2 = () => {

    return <div id="container">
        <JsxHeading />
        <h1 className="second">this is component 2</h1>
    </div>

};

// const heading = React.createElement("h1", { id: "heading" }, "hello this is also me");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
// root.render(parent);
