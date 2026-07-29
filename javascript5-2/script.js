const add = document.querySelector(".add");
const urgSet = document.querySelector(".urg-set");
const addBtn = document.querySelector(".add-btn");
const remitBtn =document.querySelector(".remit-btn");
const listData = document.querySelector(".list-data");
const saveBtn = document.querySelector(".save-btn")

function run_add(){
  if(add.value===""){
    add.focus();
    return;
  }
  let addList=document.createElement("li");
  let addSpan=document.createElement("span");
  addSpan.textContent=add.value;
  addSpan.className=urgSet.value;
  
  let doneBtn=document.createElement("button");
  doneBtn.textContent=" [ 標示為已完成 ] ";
  doneBtn.className="done-btn";
  doneBtn.addEventListener("click",run_done);
  
  let delBtn=document.createElement("button");
  delBtn.textContent="X";
  delBtn.className="del-btn";
  delBtn.addEventListener("click",run_del);
     
  addList.append(addSpan);
  addList.append(doneBtn);
  addList.append(delBtn);
  listData.append(addList);
  add.value="";
  add.focus();
 }
 
function run_del(e){
 e.target.closest("li").remove();  
}
function run_done(e){
 let li =e.target.closest("li");
  li.classList.toggle("done");
  //「這座處理槽（li）身上的『標籤清單』裡，有沒有『包含』某個特定的標籤？」
  if(li.classList.contains("done")){
    e.target.textContent=" [ 標示為未完成 ] ";
  }else{
    e.target.textContent=" [ 標示為已完成 ] ";
  }
}

//todo抓3個值然後用push丟到陣列 再用JSON轉成字串存進localStorage
 function run_save(){
   //抓出目前畫面上所有的待辦事項li(這些都是之前透過新增功能一筆一筆加出來的)
   let allLi = document.querySelectorAll(".list-data li");
   //把 todos設為一個空陣列 準備傳入資料
   let todos = []
   //用for迴圈 從0開始計算 只要小於所有資料的筆數(長度)就運作 1++是完成一次+一次
   for(let i = 0; i<allLi.length; i++){
  //allLi是上面抓到的add出來的list-data裡的所有li 包含<span> <done-btn> <del-btn>  
     let item = allLi[i];
    console.log(item)
  //listData (整個 <ul>，裝著好幾個 <li>)
  //└── addList (一個 <li>，裝著 span+按鈕)
  //      ├── addSpan 抓到這個span(前面用create造了span後往裡面塞了
  //   add.value和urgSet.value)
  //      ├── doneBtn
  //      └── delBtn  
     let span = item.querySelector("span")
  // todo是物件 把文字跟重要性還有是否完成抓出來 等等要送進todos陣列裡 
     let todo = {
       text: span.textContent,
       urgency: span.className,
       done: item.classList.contains("done")
     };
   //push還在迴圈裡 所以會把這個物件的資料丟進陣列裡 後續是i++的流程  
     todos.push(todo)
     console.log(span)
     console.log(item.classList.contains("done"))
     console.log(todo)
     console.log(todos)
   }
  //localstorage像設定一個櫃子(key)然後把資料傳進去(value)
  //localstorage只能存文字所以需要JSON把陣列轉成文字(字串) 
   localStorage.setItem("todos",JSON.stringify(todos));
   alert("儲存成功")
 }
 function run_load(){
   //如果localStorage能找到"todos"這個key 
  if(localStorage.getItem("todos")){
   //把 localStorage 裡 todos 的值，用 JSON 的 parse 轉成陣列，丟進 todos 這個變數 
    let todos = JSON.parse(localStorage.getItem("todos"));
   //要把save的值顯示在畫面上利用迴圈把值存到run_add相關的function裡
    for(let i = 0; i < todos.length; i++){
    //把存下來的第1個text存到add相關的變數裡
      add.value = todos[i].text;
    //把save下來的urgency存到urgSet裡  
      urgSet.value = todos[i].urgency;
    //然後跑add的程式把取值造li span append的步驟簡化直接用run_add跑 
      run_add();
    //完成標示在add出來後都是未完成所以要用if來調整 這段是if(true)  
      if(todos[i].done){
     //把所有ul陣列存進allLI  
        let allLi = document.querySelectorAll(".list-data li");
     //然後設定最後一個值 像存3個length是2因為從0開始計算
     //allLi[2]是第3個陣列 就是最後一個   
        let lastLi = allLi[allLi.length - 1];
      //save這個陣列如果有.done 就把最後一個+.done  
        lastLi.classList.add("done");
      //修改完成案鈕
        lastLi.querySelector(".done-btn").textContent = " [ 標示為未完成 ] ";
      }
    }
  }
}

 function run_remit(){
  let allLi=document.querySelectorAll(".list-data li") 
  let report="今日待辦 : \n";
  for(let i = 0;i<allLi.length;i++){
   let item=allLi[i];
    console.log(item);
   let remitSpan=item.querySelector("span"); 
   let remitText=remitSpan.textContent;
   if(remitSpan.classList.contains("important")){
     remitText="*"+remitText+"*";
   }else if(remitSpan.classList.contains("urgent")){
     remitText="**"+remitText+"**";
   }
    report=report+(i+1)+". "+remitText+"\n"; 
  } 
   alert(report);
  console.log(allLi); 
 } 
urgSet.addEventListener("change",function(){
  let level=urgSet.value;
  add.className="add " + level;                        
  });


addBtn.addEventListener("click",run_add);
saveBtn.addEventListener("click",run_save)
remitBtn.addEventListener("click",run_remit);
 run_load()