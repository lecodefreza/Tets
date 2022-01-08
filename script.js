let sidebar = document.querySelector(".sidebar");//
let closeBtn = document.querySelector("#btn");//La marwan on selectionne les clas html
let searchBtn = document.querySelector(".bx-search");//

closeBtn.addEventListener("click", ()=>{//Quand on click animation de changement icon
  sidebar.classList.toggle("open");//
  menuBtnChange();//
});

searchBtn.addEventListener("click", ()=>{ 
  sidebar.classList.toggle("open");
  menuBtnChange(); 
});


function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//La aussi
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//Les bouton change
 }
}


let input = document.querySelector(".form input");
let button = document.querySelector(".form button");
let qrImg = document.querySelector(".qr-img img");

button.addEventListener("click",function(){
  let data = input.value;
  if(data.length > 0){
    let imgSrc = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+data;
    qrImg.src = imgSrc;
  }
})





