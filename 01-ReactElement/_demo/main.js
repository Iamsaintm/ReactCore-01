console.log("learn react");

// ## Vanilla (JS DOM API)
// Create Element
// const btn = document.createElement("button");
// btn.innerText = "cart";
// btn.classList = "red";

// Render
// const root = document.getElementById("root");
// root.appendChild(btn);

// ## React
// React === Global Object (via CDN Link)
// console.log(React);

// Create React Element
// <button class="red"> cart </button>
const reactElement = React.createElement(
  "button",
  { className: "blue" },
  "cart"
);
// console.log(reactElement);

// ReactDOM : Render to Browser
// Pick DOM
const domRoot = document.getElementById("root");

// TakeOver
const root = ReactDOM.createRoot(domRoot); // take over

// Render
root.render(reactElement);

// KEY-1
// ReactElement = JS Object ที่เอาไป render ใน Browser ได้
// สร้างโดย React.createElement(tag, propsObj, ...child)

// <button type="submit" class="btn">Hi</button>

const props = {
  type: "submit",
  className: "btn",
};
const btnEl = React.createElement("button", props, "Hi");
console.log(btnEl);

/*
<button>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span>Button</span>
</button>
*/

// const child1 = React.cerateElement("span", null);
// const child2 = React.cerateElement("span", null);
// const child3 = React.cerateElement("span", null);
// const child4 = React.cerateElement("span", null, "Button");

// const parent = React.createElement(
//   "button",
//   null,
//   child1,
//   child2,
//   child3,
//   child4
// );

// ####################
// const anchorTag_1 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'account');
// const navItemElement_1 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_1);

// const anchorTag_2 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'about');
// const navItemElement_2 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_2);

// const anchorTag_3 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'service');
// const navItemElement_3 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_3);

// const anchorTag_4 = React.createElement('a', { href: '#', className: 'nav_menu_link' }, 'service');
// const navItemElement_4 = React.createElement('li', { className: 'nav_menu_item' }, anchorTag_4);

// DRY : Don't Repeat Yourself

// FN : (text) => ReactElement
// function createNavElement(text) {
//   const anchorTag = React.createElement('a', { href: '#', className: 'nav_menu_link' }, text);
//   // const navItemElement = React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
//   // return navItemElement
//   return React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
// }

// const navItemElement_1 = createNavElement('account');
// const navItemElement_2 = createNavElement('about');
// const navItemElement_3 = createNavElement('service');
// const navItemElement_4 = createNavElement('contact');
// const lists = [navItemElement_1, navItemElement_2, navItemElement_3, navItemElement_4];

// const navListElement = React.createElement('ul', { className: 'nav_menu_list' }, ...lists);
// // #2 ReactDOM : createRoot
// const domNode = document.getElementById('root');
// const root = ReactDOM.createRoot(domNode);

// // #3 ReactDOM : TakeOver for Render Task
// root.render(navListElement);
