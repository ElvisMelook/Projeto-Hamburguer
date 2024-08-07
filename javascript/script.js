
    const button = document.querySelector('.mobile_btn');
    const mobileMenu = document.querySelector('#mobile_menu');
    const btn_icon = document.querySelector('#mobile_btn-icon'); //menu haburger



    //? -> função menu DropDawn
    function menuOn() {
        mobileMenu.classList.toggle('active', 'vizivel');
        mobileMenu.classList.toggle('vizivel');
    }

    button.addEventListener('click', menuOn);

    
    

    //? -> Mudar icone ao clicar no menu hamburguer 
    btn_icon.addEventListener('click', function(){

    if(btn_icon.classList.contains('fa-bars')){
        btn_icon.classList.remove('fa-bars');
        btn_icon.classList.add('fa-x');
    }else{
        btn_icon.classList.remove('fa-x');
        btn_icon.classList.add('fa-bars');
    }
   });