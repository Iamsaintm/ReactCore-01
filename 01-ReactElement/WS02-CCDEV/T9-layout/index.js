// #1 React : CreateElement
const section = React.createElement(
  "section",
  { className: "wrapper" },
  React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "grid-cols-2" },
      React.createElement(
        "div",
        { className: "grid-item-1" },
        React.createElement(
          "h1",
          { className: "main-heading" },
          "Welcome to ",
          React.createElement("span", null, "Codecamp."),
          React.createElement("br", null),
          "Develop anything."
        ),
        React.createElement(
          "p",
          { className: "info-text" },
          "Build a beautiful, modern website with flexible components built from scratch."
        ),
        React.createElement(
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
        )
      ),
      React.createElement(
        "div",
        { className: "grid-item-2" },
        React.createElement(
          "div",
          { className: "team_img_wrapper" },
          React.createElement("img", {
            src: "https://i.ibb.co/mhcL2P6/image.png",
            alt: "team-photo",
          })
        )
      )
    )
  )
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(section);
