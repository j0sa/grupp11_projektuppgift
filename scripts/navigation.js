function toggleHamburgerMenu() {
    let x = document.getElementById("nav-menu");
    if (x.className === "nav-menu") {
        x.className += " responsive-nav-menu";
    } else {
        x.className = "nav-menu";
    }
}