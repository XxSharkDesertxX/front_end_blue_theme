
// mnue click
const mnue = document.querySelector(".mnue_ul");
const icon = document.querySelector(".brand");
const iconChange = document.querySelector(".brand i");

icon.addEventListener("click",function (e) {
    
    if(iconChange.className == "fa fa-bars"){
        mnue.style.left="0";
        iconChange.className="fa fa-times";
    }else{
        mnue.style.left="-100%";
        iconChange.className="fa fa-bars";
    }


    e.preventDefault();
});