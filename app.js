/**
 * <div id = "parent">
 *  <div id = "child"
 *      <h1>From h1 tag </h1>
 *      
 *  </div>
 * </div>
 */

const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement("div", {id: "child"}, [
            React.createElement("h1", {}, "Inside h1 tag"),
            React.createElement("h2", {}, "Inside h2 tag")
        ]),
        React.createElement("div", {id: "child2"}, [
            React.createElement("h1", {}, "Inside h1 tag"),
            React.createElement("h2", {}, "Inside h2 tag")
        ])
    ]
     
);


const heading = React.createElement("h1", {id: "heading", xyz:"blah blah"}, "Hello React");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);