var opinionsElem, carouselElem;

document.addEventListener("DOMContentLoaded", (e) =>
{
    
    opinionsElem = document.querySelector(".opinions");
    carouselElem = document.querySelector(".carousel");

    
    carouselElem.addEventListener("wheel", (e) =>{
        e.preventDefault();
        carouselElem.scrollLeft+=e.deltaY;
    })
    hamburgerButton = document.querySelector(".hamburger-button");
    mobileNavMenu = document.querySelector(".mobile-nav .menu")
    hamburgerChecked = false;
    mobileNavMenu.style.display = "none";
    hamburgerButton.querySelector("img").src = "icons/Hamburger.svg";

    hamburgerButton.addEventListener("click", () =>
    {
        if (hamburgerChecked) { 
            hamburgerChecked = false; 
            mobileNavMenu.style.display = "none";
            hamburgerButton.querySelector("img").src = "icons/Hamburger.svg";
        }
        else { 
            hamburgerChecked = true;
            mobileNavMenu.style.display = "flex";
            hamburgerButton.querySelector("img").src = "icons/Hamburger-Szczala.svg";
        }
    })
})
