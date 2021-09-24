let burgerMenu = document.querySelector(".burger")
let mainMenu = document.querySelector(".navigation");

burgerMenu.addEventListener("click" , function(){
    console.log("h")
    burgerMenu.classList.toggle("active-menu");
    if(burgerMenu.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    }
    else{
        mainMenu.classList.remove("active-menu")
    }   
}
)