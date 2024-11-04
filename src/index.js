const menuItems= document.getElementById('menuItem');
const burgerMenu= document.getElementById('burgerMenu');

burgerMenu.addEventListener('click', ()=>{
    if(menuItems.classList.contains('max-md:left-full')){
        menuItems.classList.remove('max-md:left-full')
        menuItems.classList.add('max-md:left-0')
    }
    else{
        menuItems.classList.remove('max-md:left-0')
        menuItems.classList.add('max-md:left-full')
        
    }
})