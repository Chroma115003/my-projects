const loadProducts = () =>{
  fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => loading(json))
  .catch(error => showErrMdl())
}
const loading = (json) =>{
for(const product of json){
 const li = document.createElement("li");
 const div = document.createElement("div");
  li.dataset.id = product.id;
  li.dataset.title = product.title;
  li.dataset.category = product.category;
  li.dataset.description = product.description;
  li.dataset.price = product.price;
  li.dataset.image = product.image;

 const img = document.createElement("img");
  img.src = product.image;
  div.append(img);
 const span = document.createElement("span");
  span.textContent = product.title;
  div.append(span);
 const showBtn = document.createElement("button");
  showBtn.textContent = "Details";
  showBtn.className = "show-btn";
  showBtn.addEventListener("click",()=>detailsMdl(li));
  div.append(showBtn);
 const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "del-btn";
  delBtn.addEventListener("click",()=>delDetails(product,li));
  div.append(delBtn)
  
  li.append(div);
  document.querySelector("ul").append(li);
}}
const delDetails = (product,li) =>{
  fetch(`https://fakestoreapi.com/products/${product.id}`, {
    method: "DELETE"
})
  .then(res=>res.json())
  .then(json=>{
   li.remove(); 
  })
  .catch(error=>{
    alert("刪除失敗")
  })
}  
const detailsMdl = (li) =>{
  const data = li.dataset;
  document.querySelector(".modal-title").textContent = data.title;
  document.querySelector(".modal-category").textContent = data.category;
  document.querySelector(".modal-description").textContent = data.description;
  document.querySelector(".modal-price").textContent = data.price;
  document.querySelector(".modal-image").src = data.image;

  document.querySelector(".details-modal").classList.remove("hidden");
}
const closeMdl = () =>{
  document.querySelector(".details-modal").classList.add("hidden");
};
const backClose = (e) =>{
 if(e.target === document.querySelector(".modal-overlay")){
   closeMdl()
 } 
};
document.querySelector(".close-btn").addEventListener("click",closeMdl);
document.querySelector(".modal-overlay").addEventListener("click",backClose);  
document.querySelector(".load-btn").addEventListener("click",loadProducts);