var heading = document.getElementById('text');
var button = document.getElementById('btn');
var toggle = document.getElementById('menu-bar');
var menu = document.getElementById('sidebar');





toggle.addEventListener('click' , function() {

if (menu.classList.contains('show')) {
    menu.classList.remove('show')
    menu.classList.add('hide')
} else {
    menu.classList.add('show')
    menu.classList.remove('hide')
}

    

})




















