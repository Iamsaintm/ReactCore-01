// #1 React : CreateElement
const div = React.createElement(
  "div",
  { className: "logo" },
  React.createElement("h2", null, "CodeCamp")
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(div);

// ```html
// <div class="logo">
//     <h2>CodeCamp</h2>
// </div>
// ```
