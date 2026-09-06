const todos=[
  {title : "倒垃圾"},
  {title : "繳電話費"},
  {title : "採買本周食材"}
];
//render是構築dom的程式碼 把todos作為引數送進dom裡
const render =() =>{
let root = document.querySelector(".root");
 root.textContent="";
let ul = document.createElement("ul");
//迴圈把todos[0]作為引數送進參數todo裡  
todos.forEach(todo =>{
 //造li 
  let li = document.createElement("li");
 //造span 
  let span = document.createElement("span");
 //把todos(送進參數變為todo)的key title的值賦值到 span的文字屬性 
  span.textContent = todo.title;
 //把span串到li 
  li.append(span);
 //把li串到ul 然後回去做todos[1]
  ul.append(li);
  });
  //ul(裡面3個li)在串到root這個div裡
  root.append(ul);
}  

render()