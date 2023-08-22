// #1 React : JSX
const user = (
  <div>
    <label htmlFor="username">Username</label>
    <br />
    <input className="username" id="username" name="username"></input>
  </div>
);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(user);
