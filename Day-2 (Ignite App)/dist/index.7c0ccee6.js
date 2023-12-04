const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", {}, [
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hi I am H1 tag"),
        React.createElement("h2", {}, "Hi I am H2")
    ]),
    React.createElement("div", {}, [
        React.createElement("h1", {}, "Hi I am H1 tag"),
        React.createElement("h2", {}, "Hi I am H2")
    ])
]);
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
