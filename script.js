menu = document.querySelector(".menu");
menu_img = document.querySelector(".menu img");
nav_middle = document.querySelector(".nav-middle")

function sidebar(){
    let count = 0
    menu.addEventListener("click", function(){
        if(count==0){
            console.log(menu_img)
            nav_middle.style.left = "0%";
            menu_img.src = "images/icon-close.svg"
            document.body.style.overflow = "hidden";
            count = 1;
        }
        else{
            nav_middle.style.left = "-100%";
            menu_img.src = "images/icon-hamburger.svg"
            document.body.style.overflow = "auto";
            count = 0;
        }
    })
}
sidebar()