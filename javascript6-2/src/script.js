const todos = [
 {title:"倒垃圾"},
 {title:"繳電話費"},
 {title:"採買本周食材"} 
];
const render = () =>{
  let root = document.querySelector(".root");
  root.textContent="";
  let ul = document.createElement("ul");
  todos.forEach(todo =>{
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent =  todo.title;
  li.append(span);
  ul.append(li);  
  })
  root.append(ul)
}
//設定按按鈕把input裡的值新增到todos陣列裡
const add = () =>{
//取值設成變數  
 const addValue = document.querySelector(".add-todo").value;
//如果為空就停止return  
 if(addValue==="") return;
//  陣列用push新增陣列
 todos.push({title:addValue});
//清空input  
 document.querySelector(".add-todo").value=""
//運行整個版面重建dom樹  
 render() 
}

const addBtn = document.querySelector(".add-btn") 
addBtn.addEventListener("click",add) 
render()