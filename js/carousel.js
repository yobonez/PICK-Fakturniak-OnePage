var opinionsElem, carouselElem;

document.addEventListener("DOMContentLoaded", (e) =>
{
    
    opinionsElem = document.querySelector(".opinions");
    carouselElem = document.querySelector(".carousel");

    carouselElem.addEventListener("wheel", (e) =>{
        e.preventDefault();
        carouselElem.scrollLeft+=e.deltaY;
    })
})
