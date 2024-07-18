import React from "react";
import ReactDOM from 'react-dom/client';

//react element
const jsxHeading = (
<h1 className="head">
    hello this is heading in jsx
    </h1>);

const Title = () => (
    <h1 className="heading">
        hello this is me Aniket
    </h1>);


//react component way 1
const HeadingComponent1 = () => (
    <div className="container">
        <Title />
        <h1 className="first" > this is component 1</h1>
    </div>

);

//react component way 2

const HeadingComponent2 = () => {

    return ( <div id="container">
        <HeadingComponent1 />
        {54 + 34}
        {/* react element inside a component */}
        {jsxHeading}   
        <h1 className="second">this is component 2</h1>
    </div>);

};

// const heading = React.createElement("h1", { id: "heading" }, "hello this is also me");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
// root.render(jsxHeading)
// root.render(parent);
