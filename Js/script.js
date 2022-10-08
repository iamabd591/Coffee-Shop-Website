let navbar = document.querySelector('.navebar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    Cartitems.classList.remove('active');
}

let Cartitems = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    Cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}


let search = document.querySelector('.search_form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    Cartitems.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
    Cartitems.classList.remove('active');
}