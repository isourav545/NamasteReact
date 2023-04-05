// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome to React"
// );
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, 
  [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I m a h2 tag"),
  ])
);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
