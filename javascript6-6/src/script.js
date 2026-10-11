const todos =[
  {title : "倒垃圾" ,isDone:false},//isDone=false表示未完成
  {title : "繳電話費",isDone:false},
  {title : "採買本周食材",category:"urgent",isDone:false}  
];
const render = () =>{
let root = document.querySelector(".root");//找到顯示區
 root.textContent="";//清空顯示區
let ul = document.createElement("ul");//造列表
  
for(let i=0 ;i<todos.length;i++){//for迴圈設條件初始值i=0;i<todos這陣列的總數;i=i+1 
  const todo = todos[i];////從todos陣列取出第i個物件（每次迴圈會變）
  let li = document.createElement("li");//造li
  let span = document.createElement("span");//造輸入文字的span
  let doneSpan = document.createElement("span");//造(已完成)
  span.textContent=todo.title;//span的文字是todo物件title的值所以第1個物件是倒垃圾第2個物件是繳電話費
  if(todo.category==="normal"){//如果todo物件category設定是一般"normal"
   span.style.color="black"; //文字就黑色
   doneSpan.style.color= "black"; //(已完成)也是黑色
  }else if(todo.category==="important"){//重要就橘色
   span.style.color="orange";
   doneSpan.style.color="orange";    
  }else if(todo.category==="urgent"){//緊急紅色
   span.style.color="red";
   doneSpan.style.color="red"; 
  }
  if(todo.isDone){//todo.isDone因為push布林值取得布林值true就運行這段
    doneSpan.textContent = "(已完成)"
  }else{//false就運行這段
    doneSpan.textContent = ""
  }
  let delBtn = document.createElement("button");//造刪除按鈕
  delBtn.textContent = "刪除";//名稱是刪除
  let doneBtn = document.createElement("button");//造完成按鈕
  if(todo.isDone){//一樣取得布林值
   doneBtn.textContent = "標示為未完成"//true跑這行 
  }else{
   doneBtn.textContent = "標示為已完成"//false跑這行
  }
  doneBtn.addEventListener("click",() => {//完成按鈕裝toggle的功能
  todos[i].isDone = !todos[i].isDone;//false=!false像toggle
  render()  
  })
  const del = () =>{//定義del函數
    todos.splice(i,1);//把todos陣列進行splice方法(i是第幾個,1是刪除幾個)(i是從for那邊定義的
    //還在整個for迴圈裡i=0時todos[0]是倒垃圾i=1時todos[1]是繳電話費分別建立delBtn並賦予del
    //功能才能確定刪除哪個)
    render()//陣列有變動 重新渲染
  };
  delBtn.addEventListener("click",del)
  li.append(span);//span接到li
  li.append(doneSpan);//doneSpan接到li
  li.append(doneBtn);//doneBtn接到li
  li.append(delBtn);//delBtn接到li
  ul.append(li)//li接到ul
}
  root.append(ul) //最後整個ul接到root這個div
}  
const add = () =>{//定義add函數
  const addValue = document.querySelector(".add-todo").value;//取input的值
  const stateType = document.querySelector(".state-type").value; //取select的值
  if (addValue === "") return;//如果沒值就不執行
  todos.push({//todos這個陣列的新增物件的方法push
    title : addValue,
    category : stateType,
    isDone : false
  //具體是{title:"我input輸入的值",category:"我select選擇的重要程度",isDone:false預設的(未完成)}  
  })
  document.querySelector(".add-todo").value = "";//清空input
  render()//重新渲染
}
const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click",add);
render()

const exportRun = () =>{//定義匯出功能
  let text = "今日待辦:\n"//設定起始文字\n換行
for(let i=0;i<todos.length;i++){//for迴圈把todos的陣列資料抽出來
const todo = todos[i];//i=0把{title : "倒垃圾" ,isDone:false}塞進todo
const status = todo.isDone?"(已完成)":""; //三元運算子如果isDone是true就顯示"(已完成)"false就是"""
let categoryName="";//設定空的文字變數然後寫if把normal,importent,urgent轉成中文
if(todo.category==="normal")categoryName="(一般)";
else if(todo.category==="important")categoryName="(重要)";
else if(todo.category==="urgent")categoryName="(緊急)";  
text = text+(i+1)+"."+todo.title+categoryName+status+"\n"  
//text=今日待辦:(換行)1.倒垃圾 (重要性第一個陣列沒有不顯示) (未完成不顯示) 換行
}
 alert(text);
}
const exportBtn = document.querySelector(".export-btn").addEventListener("click",exportRun)