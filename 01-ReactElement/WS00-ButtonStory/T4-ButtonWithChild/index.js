// #1 React : CreateElement
const btn = React.createElement(
  "button",
  { className: "button" },
  React.createElement("span", null, ""),
  React.createElement("span", null, ""),
  React.createElement("span", null, ""),
  React.createElement("span", null, ""),
  React.createElement("span", null, "Button")
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(btn);
