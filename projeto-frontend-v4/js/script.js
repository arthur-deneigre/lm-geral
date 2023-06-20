let darkmode = document.querySelector('#darkMode');

darkmode.onclick = ()=>{
    //alert("CLICOU!");

    if(darkmode.classList.contains('bx-moon')){
        // alert("modo escuro ativo");
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('color');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('color');

    }

    
    

    
}

