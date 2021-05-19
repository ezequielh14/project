let ubi = document.getElementsByClassName("imagen").pageYOffset;
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px";
    }
    ubicacionPrincipal = desplazamientoActual;
});

/* Scroll Animation About*/
window.addEventListener('scroll', function(){
    let about_1 = document.getElementById('art-1');
    let about_2 = document.getElementById('art-2');
    let about_3 = document.getElementById('art-3');
    let about_4 = document.getElementById('art-4');
    let about_5 = document.getElementById('art-5');
    let about_6 = document.getElementById('art-6');
    let posAbout_1 = about_1.getBoundingClientRect().top;
    let posAbout_2 = about_2.getBoundingClientRect().top;
    let posAbout_3 = about_3.getBoundingClientRect().top;
    let posAbout_4 = about_4.getBoundingClientRect().top;
    let posAbout_5 = about_5.getBoundingClientRect().top;
    let posAbout_6 = about_6.getBoundingClientRect().top;
    let t_screen = window.innerHeight/1.5;
    let screen_width = window.innerWidth;
    if(posAbout_1 < t_screen){
        if(screen_width > 800){
            about_1.style.visibility = 'visible';
            about_1.style.animation = 'moverI 1s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_1.style.visibility = 'visible';
            about_1.style.animation = 'moverI 1.1s ease-in';
        }
        if(screen_width <= 600){
            about_1.style.visibility = 'visible';
            about_1.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_1.style.visibility = 'hidden';
        about_1.style.animation = 'none';
    }

    if(posAbout_2 < t_screen){
        if(screen_width > 800){
            about_2.style.visibility = 'visible';
            about_2.style.animation = 'moverI 0.8s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_2.style.visibility = 'visible';
            about_2.style.animation = 'moverI 0.7s ease-in';
        }
        if(screen_width <= 600){
            about_2.style.visibility = 'visible';
            about_2.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_2.style.visibility = 'hidden';
        about_2.style.animation = 'none';
    }

    if(posAbout_3 < t_screen){
        if(screen_width > 800){
            about_3.style.visibility = 'visible';
            about_3.style.animation = 'moverI 0.5s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_3.style.visibility = 'visible';
            about_3.style.animation = 'moverI 1s ease-in';
        }
        if(screen_width <= 600){
            about_3.style.visibility = 'visible';
            about_3.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_3.style.visibility = 'hidden';
        about_3.style.animation = 'none';
    }

    if(posAbout_4 < t_screen){
        if(screen_width > 800){
            about_4.style.visibility = 'visible';
            about_4.style.animation = 'moverI 1.1s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_4.style.visibility = 'visible';
            about_4.style.animation = 'moverI 0.7s ease-in';
        }
        if(screen_width <= 600){
            about_4.style.visibility = 'visible';
            about_4.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_4.style.visibility = 'hidden';
        about_4.style.animation = 'none';
    }

    if(posAbout_5 < t_screen){
        if(screen_width > 800){
            about_5.style.visibility = 'visible';
            about_5.style.animation = 'moverI 0.8s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_5.style.visibility = 'visible';
            about_5.style.animation = 'moverI 1s ease-in';
        }
        if(screen_width <= 600){
            about_5.style.visibility = 'visible';
            about_5.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_5.style.visibility = 'hidden';
        about_5.style.animation = 'none';
    }

    if(posAbout_6 < t_screen){
        if(screen_width > 800){
            about_6.style.visibility = 'visible';
            about_6.style.animation = 'moverI 0.5s ease-in';
        }
        if(screen_width <= 800 && screen_width > 600){
            about_6.style.visibility = 'visible';
            about_6.style.animation = 'moverI 0.7s ease-in';
        }
        if(screen_width <= 600){
            about_6.style.visibility = 'visible';
            about_6.style.animation = 'moverI 0.8s ease-in';
        }
    }else{
        about_6.style.visibility = 'hidden';
        about_6.style.animation = 'none';
    }
});

/* Scroll Animation Img*/
window.addEventListener('scroll', function(){
    let img = document.getElementById('img1');
    let posObj1 = img.getBoundingClientRect().top;
    console.log(posObj1);
    let t_screen = window.innerHeight/2.5;

    if(posObj1 < t_screen){
        img.style.animation = 'zoom_out 1s ease-in-out';
    }else{
        img.style.animation = 'none';
    }
});

/* Scroll Animation Results */

window.addEventListener('scroll', function(){
    let r_1 = document.getElementById('r_1');
    let r_2 = document.getElementById('r_2');
    let r_3 = document.getElementById('r_3');
    let r_4 = document.getElementById('r_4');
    let posR_1 = r_1.getBoundingClientRect().top;
    let posR_2 = r_2.getBoundingClientRect().top;
    let posR_3 = r_3.getBoundingClientRect().top;
    let posR_4 = r_4.getBoundingClientRect().top;
    let t_screen = window.innerHeight/1.5;
    let screen_width = window.innerWidth;
    if(posR_1 < t_screen){
        if(screen_width > 600){
            r_1.style.visibility = 'visible';
            r_1.style.animation = 'zoom_in 0.6s ease-in';
        }
        if(screen_width <= 600){
            r_1.style.visibility = 'visible';
            r_1.style.animation = 'zoom_in 0.8s ease-in';
        }
    }else{
        r_1.style.visibility = 'hidden';
        r_1.style.animation = 'none';
    }

    if(posR_2 < t_screen){
        if(screen_width > 600){
            r_2.style.visibility = 'visible';
            r_2.style.animation = 'zoom_in 0.8s ease-in';
        }
        if(screen_width <= 600){
            r_2.style.visibility = 'visible';
            r_2.style.animation = 'zoom_in 0.8s ease-in';
        }
    }else{
        r_2.style.visibility = 'hidden';
        r_2.style.animation = 'none';
    }

    if(posR_3 < t_screen){
        if(screen_width > 600){
            r_3.style.visibility = 'visible';
            r_3.style.animation = 'zoom_in 0.6s ease-in';
        }
        if(screen_width <= 600){
            r_3.style.visibility = 'visible';
            r_3.style.animation = 'zoom_in 0.8s ease-in';
        }
    }else{
        r_3.style.visibility = 'hidden';
        r_3.style.animation = 'none';
    }

    if(posR_4 < t_screen){
        if(screen_width > 600){
            r_4.style.visibility = 'visible';
            r_4.style.animation = 'zoom_in 0.8s ease-in';
        }
        if(screen_width <= 600){
            r_4.style.visibility = 'visible';
            r_4.style.animation = 'zoom_in 0.8s ease-in';
        }
    }else{
        r_4.style.visibility = 'hidden';
        r_4.style.animation = 'none';
    }

});

/* Menu */

 let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
 let semaforo = true;

 document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    } 
    
    enlacesHeader.classList.toggle("menudos");
 });