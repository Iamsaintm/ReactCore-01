// #1 React : CreateElement
const head = React.createElement(
  "header",
  { className: "container header" },
  React.createElement(
    "nav",
    { className: "nav" },
    React.createElement(
      "div",
      { className: "logo" },
      React.createElement("h2", null, "Devkit.")
    ),
    React.createElement(
      "div",
      { className: "nav_menu", id: "nav_menu" },
      React.createElement(
        "ul",
        { className: "nav_menu_list" },
        React.createElement(
          "li",
          { className: "nav_menu_item" },
          React.createElement(
            "a",
            { href: "#", className: "nav_menu_list" },
            "Account"
          )
        ),
        React.createElement(
          "li",
          { className: "nav_menu_item" },
          React.createElement(
            "a",
            { href: "#", className: "nav_menu_list" },
            "About"
          )
        ),
        React.createElement(
          "li",
          { className: "nav_menu_item" },
          React.createElement(
            "a",
            { href: "#", className: "nav_menu_list" },
            "Service"
          )
        ),
        React.createElement(
          "li",
          { className: "nav_menu_item" },
          React.createElement(
            "a",
            { href: "#", className: "nav_menu_list" },
            "Contact"
          )
        )
      )
    )
  )
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(head);
