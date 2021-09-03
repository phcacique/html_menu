var isOpen = false;

window.onload = function(){
    let menu = document.getElementById('menu');
    menu.addEventListener('click', function(){
        document.getElementById('sideMenu').className = (isOpen) ? "" : "navOpen";
        isOpen = !isOpen;
    });
}