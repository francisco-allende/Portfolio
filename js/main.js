let counter = 0;
let menu = document.getElementById("hamburger-button");
menu.style.transition = "all 2s ease";
let divContainer = document.getElementById("div-container-menu");
let divMenu; 

menu.addEventListener("click", function(){

    if(counter%2 == 0 || counter == 0){
        // create menu options
        let option1 = createMenuOption("#about-me", "About Me");
        let option2 = createMenuOption("#skills", "Skills");
        let option3 = createMenuOption("#work-title", "Portfolio");
        let option4 = createMenuOption("#menu_footer", "Contact Me");

        // add menu options to menu section
        divMenu = document.createElement("div");
        divMenu.appendChild(option1);
        divMenu.appendChild(option2);
        divMenu.appendChild(option3);
        divMenu.appendChild(option4);

        // add style and bootstrap
        divMenu.style.display = "block";
        divMenu.style.width = "100%";
        divMenu.style.paddingTop="0.5em";
        divMenu.style.paddingBottom="0.5em";
        divMenu.classList.add("bg-dark");

        //append menu to its container
        divContainer.appendChild(divMenu);
    
    }else{
        //if it exists, the element is removed
        if(divMenu){
            divMenu.remove();
        }
    }
    counter++;
})

function createMenuOption(hrefDirection, text) {
    let option = document.createElement("a");
    option.classList.add("dropdown-item");
    option.href = hrefDirection;
    option.textContent = text;
    option.style.color = "white";
    option.style.textAlign= "center";
    option.style.fontSize = "1.2em";
    option.style.hover = "background-color: blue";
    option.style.paddingBottom="1em";
    option.style.paddingTop="1em";

    option.addEventListener("mouseenter", function() {
        this.classList.add("hovered");
    });
      
    option.addEventListener("mouseleave", function() {
        this.classList.remove("hovered");
    });

    return option;
}

//delete mobile menu if developer try to use it in desktop 
let nav = document.getElementById("nav");
nav.addEventListener("mouseover", function(){
    if (window.matchMedia("(min-width: 768px)").matches) {
        //User is in desktop mode
        if(divMenu){
            divMenu.remove();
        }
    }
});

