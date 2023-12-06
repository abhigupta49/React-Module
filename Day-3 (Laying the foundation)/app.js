

import React from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))


//React Element
const heading = (
    <h1 className="head">Namaste React</h1>
)

const Title = () => (
    <h1>
        Namaste react functional title🚀🚀
    </h1>
)

//React functional component
//Component composition multiple component
const HeadingComponent = () => (
    
    <div>
        <Title />
        <h1>Functional Component</h1>
    </div>
)
console.log(HeadingComponent)
console.log(heading)
root.render(<HeadingComponent />)