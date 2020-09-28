let slideIndex = 1;
let x = document.getElementsByClassName("slidesshowimage");

automaticSlideshow();
displayImages(slideIndex);

function changeSlideIndex(n) {
    displayImages(slideIndex += n);
}

function displayImages(n) {
    let i;
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

function automaticSlideshow() {
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";

    animate = setTimeout(automaticSlideshow, 3000);
}

function startStopSlideShow() {
    let buttonElement = document.getElementById("buttonicon");

    if (animate > 0) {
        clearTimeout(animate);
        animate = 0;
        console.log("Stopped automatic slideshow");
        buttonElement.innerHTML = '<i class="fas fa-play"></i>'
    } else {
        automaticSlideshow();
        console.log("Started automatic slideshow");
        buttonElement.innerHTML = '<i class="fas fa-pause"></i>'
    }
}

$(".display-middle").mouseenter(function () {
    $(".display-middle").animate({ opacity: '1' });
});

$(".display-middle").mouseleave(function () {
    $(".display-middle").animate({ opacity: '0.9' });
});