const todos =[
  {title : "倒垃圾"},
  {title : "繳電話費"},
  {title : "採買本周食材"}  
];
const render = () =>{
let root = document.querySelector(".root");
 root.textContent="";
let ul = document.createElement("ul");
for(let i=0 ;i<todos.length;i++){
  const todo = todos[i];
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent=todo.title;
  li.append(span);
  let delBtn = document.createElement("button");
  delBtn.textContent = "刪除";
  const del = () =>{
    todos.splice(i,1);
    render()
  };
  delBtn.addEventListener("click",del)
  li.append(delBtn);
  ul.append(li)
}
  root.append(ul) 
}  
const add = () =>{
  const addValue = document.querySelector(".add-todo").value;
  if (addValue === "") return;
  todos.push({title : addValue})
  document.querySelector(".add-todo").value = "";
  render()
}
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click",add);
render()