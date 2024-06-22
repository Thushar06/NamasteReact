/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable key-spacing */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const parent = React.createElement("div", { id :"parent" } ,
[React.createElement("div", { id : "child1" } ,
    [React.createElement("h1",{},"Hi Everyone!"),
    React.createElement("h2",{},"My Learning!")]),
React.createElement("div", { id : "child2" } ,
    [React.createElement("h1",{},"Hi React!"),
     React.createElement("h2",{},"I will achieve my goal!")])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);