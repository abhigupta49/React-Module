{/* <div>
    <div>
        <h1>Hi I am H1 tag</h1>
        <h2>Hi I am H2</h2>
    </div>
    <div>
        <h1>Hi I am H1 tag</h1>
        <h2>Hi I am H2</h2>
    </div>
</div> */}


const root = ReactDOM.createRoot(document.getElementById("root"))

const parent = React.createElement("div",{},[
    React.createElement("div",{},[
        React.createElement("h1",{},"Hi I am H1 tag"),
        React.createElement("h2",{},"Hi I am H2")
    ]),
    React.createElement("div",{},[
        React.createElement("h1",{},"Hi I am H1 tag"),
        React.createElement("h2",{},"Hi I am H2")
    ])
])

root.render(parent)