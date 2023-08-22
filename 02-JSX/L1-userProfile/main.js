// #1 React : JSX
const fullName = "John Doe";
const birthYear = 2000;
const user = (
  <div>
    <h1>fullName : {fullName}</h1>
    <p>Age: {2023 - birthYear}</p>
  </div>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(user);
