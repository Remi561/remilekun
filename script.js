var centerRow = document.getElementById('center-row')
var rightNavbar = document.getElementById('right');

function openMenu(){
    centerRow.classList.add("active")
    rightNavbar.classList.add("active")
}
function closeMenu(){
    centerRow.classList.remove("active")
    rightNavbar.classList.remove("active")
}