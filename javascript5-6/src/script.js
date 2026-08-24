const loadProducts = () => {
//發送請求  
fetch('https://fakestoreapi.com/products')
 //等 fetch 送出的請求資料回傳後,.then 自動把資料丟進 function 的參數(名字自己取,這裡叫 res);函式內容是回傳 res.json(),把它拆包裝、轉成能用的資料。」這段是
 //.then( function(res) {return res.json() }) 的=>省略版寫法
  .then(res => res.json())
  
  .then(json => loading(json))
  //發生錯誤走.catch
  .catch(error => {
  alert("抱歉,請稍後重新嘗試")
  });
  const loading = (json) =>{  
    //for迴圈把json[0]丟到第1個product依序完成 這段是把陣列裡面的物件分到各個li
    for (const product of json){
      //創造li元素並放入li變數
      const li = document.createElement("li");
      const div = document.createElement("div");
      const img = document.createElement("img");
      img.src = product.image;
      div.append(img);
      const span = document.createElement("span");
      span.textContent = product.title;
      div.append(span);
      const showBtn = document.createElement("button");
      showBtn.textContent = "Details";
      showBtn.className = "details-btn";
      div.append(showBtn);
      //呼叫showDetails把product這個引數送到下面的data
      showBtn.addEventListener("click",() => showDetails(product));
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.className = "delete-btn";
      div.append(delBtn);
      delBtn.addEventListener("click",()=>delDetails(product,li));
      
      li.append(div)
      //把記憶體裡的li黏到網頁裡的ul
      document.querySelector("ul").append(li)
    };
    //設定function參數為data後面要拿屬性要用data.屬性 
    const showDetails = (data) =>{
      console.log("這是 id:", data.id);
      alert(data.id);
      console.log("這是 category:", data.category);
      alert(data.category);
      console.log("這是 description:", data.description);
      alert(data.description)
    }
    const delDetails = (product,li) =>{
      fetch('https://fakestoreapi.com/products/${product.id}',{
        method:"DELETE"
      })
      .then(res => res.json())
      .then(json => {
        li.remove();
      })
      .catch(error =>{
        alert("刪除失敗,請稍後再嘗試")
      });
    }
  };
};

document.querySelector(".load-btn").addEventListener("click",loadProducts)