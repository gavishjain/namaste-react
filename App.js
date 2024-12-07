// creating tag of h1 
const heading = React.createElement(
    "h1",
    { class: "heading" }, // is this we pass attributes(id,class)
    "Hello React"
)

// < div id = "parent" >
//     <div id="child">
//         <h1>Hello h1</h1>
//     </div>
// </div > 

const parent1 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement("h1", {}, "Hello h1")
    )
)

// < div id = "parent" >
//     <div id="child">
//         <h1>Hello h1</h1>
//         <h2>Hello h2</h2>
//     </div>
// </div > 
// To achieve this children should be in a array 
const parent2 = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "Hello h1"),React.createElement("h2", {}, "Hello h2")]
    )
)

// < div id = "parent" >
//     <div id="child1">
//         <h1>Hello h1 children 1</h1>
//         <h2>Hello h2 children 1</h2>
//     </div>
//     <div id="child2">
//         <h1>Hello h1 children 2</h1>
//         <h2>Hello h2 children 2</h2>
//     </div>
// </div > 
const parent3 = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {}, "Hello h1 children 1"),React.createElement("h2", {}, "Hello h2 children 1")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "Hello h1 children 2"),React.createElement("h2", {}, "Hello h2 children 2")]
    )]
)


// heading is an object
console.log(heading)

// root is the place where all react code will run 
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// root.render(parent1)
// root.render(parent2)
root.render(parent3)