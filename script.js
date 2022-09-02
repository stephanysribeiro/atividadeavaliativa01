function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "icons8-hammer-48.png";
    }else{
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "icons8-close-67.png";
    }

}