// #1 React : JSX
const height = 173;
const weight = 70;
function calcBMI(weight, height) {
  return weight / height ** 2;
}
const user = (
  <div>
    <h3>BMI : {calcBMI(weight, height)}</h3>
  </div>
);
// #2 ReactDOM : createRoot
const domRoot = document.getElementById("root");
const root = ReactDOM.createRoot(domRoot);
// #3 ReactDOM : TakeOver for Render Task
root.render(user);

// ```
// - ให้สร้างตัวแปรชื่อ height(m) และ weight(kg) เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI (BMI = M / H^2)
// - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h3>
// -

// ```
