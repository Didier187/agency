// javascript
const menuBtn = document.getElementById('menu-icon')
const sideNav = document.getElementById('side-nav-overlay')

menuBtn.addEventListener('click', ()=> {
    sideNav.classList.toggle('show-side-nav')
})
sideNav.addEventListener('click',()=>{
    sideNav.classList.toggle('show-side-nav')
})