// #1 Vanilla (JS-DOM)
// const heder = document.createElement("h1")
// header.innerText = "Hello"

// #2A : Vanilla (React)
// const header = React.createElement("h1",{className:"header"},"Hello")

// #2B :JSX : Javascriot Syntax Extension + Babel
// ## Declarative : อยากได้อะไรให้บอก เดี๋ยวจัดการที่เหลือให้

// const header = <h1>Hello</h1>; // ReactElement

const userAge = 30;
const fullName = "John Doe";
const isMarried = true;
const exp = ["Driver", "Dev"];
const userPets = {
  dog: "Jum-meng",
  cat: "Kai-kow",
};

// ORG : ["Driver", "Dev"]
// New : [<li>Driver</li>,<li>Dev</li>]

const expList = exp.map((career) => <li>{career}</li>);

// JSX => not render Boolean

function myLuckyNumber() {
  return 1 + Math.floor(Math.random() * 10);
}
// myLuckyNumber === Expression

const userProfile = (
  <div>
    <input></input>
    <input />
    <h1 className="header">FullName : {fullName}</h1>
    <h4>age : {userAge}</h4>
    <h4>hobby : movie</h4>
    <h4>isMarried : {isMarried ? "true" : "false"} </h4>
    <h4>Experience</h4>
    <ul>{expList}</ul>
    <h4>Pets</h4>
    <p>DOG : {userPets.dog}</p>
    <p>CAT : {userPets.cat}</p>
    <h4>myLuckyNumber : {myLuckyNumber()}</h4>
  </div>
);

// ReactDOM
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);
