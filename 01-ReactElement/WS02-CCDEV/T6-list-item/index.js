// #1 React : CreateElement
const li = React.createElement(
  "li",
  { className: "nav_menu_item" },
  React.createElement("a", { href: "#", className: "nav_menu_link" }, "account")
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(li);

// ```html
// <li class="nav_menu_item">
//     <a href="#" class="nav_menu_link">account</a>
// </li>
// ```
