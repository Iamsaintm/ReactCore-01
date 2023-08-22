// #1 React : CreateElement
const h = React.createElement(
  "h1",
  { className: "main-heading" },
  "Welcome to ",
  React.createElement("span", null, "Codecamp."),
  React.createElement("br", null),
  "Develop anything."
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(h);

// ```html
// <h1 class="main-heading">
//     Welcome to <span>Codecamp.</span>
//     <br />
//     Develop anything.
// </h1>
// ```
