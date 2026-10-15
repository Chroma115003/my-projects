const {createApp}=Vue//框架條件套用Vue框架到createApp函式 V要大寫不然不會運作
createApp({
  //資料區域 再data()裡面定義所有響應式變數
  //Vue會監控這些變數,值改變就自動重新渲染(像系列6的render()自動跑)
  data(){//Vue要監控資料所以要呼叫data()函式所以要回傳資料給vue
    return{
       //前面html input有寫v-model等於把js抓元件的程式碼簡略成v-model=變數這樣後面可以直接引用
      titleInput:"",// input 框用 v-model 綁定 Vue宣告這個變數=""
      contentInput:"",
      selectedColor:"",
      notes:[//這是在陣列裡設物件 html的v-for迴圈會把每個物件拉出來
        {
         title:"連假行程安排",
         content:"吃飽睡,睡飽吃",
         color:"#fc6565"
        },
        {
          title:"工作待辦事項",
          content:"詢問各家廠商報價",
          color:"#638aff"
        },
        {
        title:"運動健身計畫",
        content:"約下午3點慢跑",
        color:"lightgrey"
        }
      ]
    }
  },
  methods:{//方法區域:負責存放函式
    addNote(){//新增添加函式
     // 如果!(titleInput=""=false+!反轉等於true)or文字輸入框為""or顏色未選擇則跳出提示
     if(!this.titleInput|| !this.contentInput || !this.selectedColor){
     alert("請填寫所有欄位!")
      return
     } 
     // 把新的卡片物件資料加入notes陣列
      this.notes.push({
        title:this.titleInput,
        content:this.contentInput,
        color:this.selectedColor
      })
      //清空輸入框
      this.titleInput="";
      this.contentInput="";
      this.selectedColor=""  
    },
    //新增刪除方法
    delNote(index){
      this.notes.splice(index,1)
    }
  }
}).mount('#app')