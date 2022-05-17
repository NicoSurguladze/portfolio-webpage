
document.addEventListener("scroll", () => {
    fade(615, "start-page");
    fade(770, "projects-title");
    fade(1313, "projects-cards");
    fade(1445, "button-block");
});


function fade(scrollPos, elId) {
    if ( window.pageYOffset > scrollPos) {
        document.getElementById(elId).style.visibility = "hidden";
        document.getElementById(elId).style.opacity = 0;
        document.getElementById(elId).style.transition = "visibility 0s 1s, opacity 1s linear";


    } else {
        document.getElementById(elId).style.visibility = "visible";
        document.getElementById(elId).style.opacity = 1;
        document.getElementById(elId).style.transition = "opacity 1s linear";

    }
    console.log(window.pageYOffset);
}


