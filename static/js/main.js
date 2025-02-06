
function toggleSidebar(){
    var sideBar = document.getElementById("sideBar") ;
    sideBar.classList.toggle("show");
}

document.addEventListener("click", function(event) {
    var sideBar = document.getElementById("sideBar");
    var hamburgerIcon = document.querySelector(".hamburger-icon");

    // If the click is outside the sidebar and hamburger, hide the sidebar
    if (!sideBar.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        sideBar.classList.remove("show");
    }
});