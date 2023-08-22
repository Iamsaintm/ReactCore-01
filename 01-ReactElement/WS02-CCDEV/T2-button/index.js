// #1 React : CreateElement
const div = React.createElement(
  "div",
  { className: "btn_wrapper" },
  React.createElement(
    "button",
    { className: "btn view_more_btn" },
    "view all pages"
  ),
  React.createElement(
    "button",
    { className: "btn documentation_btn" },
    "documentation"
  )
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(div);

// ```html
// <div class="btn_wrapper">
//     <button class="btn view_more_btn">view all pages</button>
//     <button class="btn documentation_btn">documentation</button>
// </div>
// ```;
