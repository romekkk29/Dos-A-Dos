
/* var navigatorr = navigator.userAgent.toLowerCase();
var is_chrome=  navigatorr.indexOf("chrome");
var is_firefox=  navigatorr.indexOf("firefox");
let oscurece= document.querySelector("#oscurece");
let oscurece2= document.querySelector("#oscurece2");
let oscurece3= document.querySelector("#oscurece3");
let principalText= document.querySelectorAll(".principalText")
let push=0;
let contador=0;
let widthWindow=window.innerWidth; */
/* if(is_chrome || is_firefox){
 window.addEventListener("scroll",function(e){
    let offset = window.pageYOffset;
    let flecha = document.querySelector(".flecha")
    let heightWindow= window.innerHeight+150;
    let heightWindow33= window.innerHeight;
    let diferencia1= (offset/heightWindow);
  
    contador--;
    let diff=offset-push;
    let contador2=contador/2+2;
    let contador1=contador/2
    push=offset
    let contador3=contador/4;
    let contador4=contador2/4;
    let y="translateY("+contador1+"px)"
    let y2="translateY("+contador2+"px)"
    let y3="translateY("+contador3+"px)"
    let y4="translateY("+contador4+"px)"
    for(let i=0;i<principalText.length;i++){
    
        if(diff>0 && widthWindow>750){
            principalText[i].style.transform=y
        }
        if(diff<0  && widthWindow>750){
            principalText[i].style.transform=y2
            contador=contador2
        }
        if(diff>0 && widthWindow<750){
            principalText[i].style.transform=y3
        }
        if(diff<0  && widthWindow<750){
            principalText[i].style.transform=y4
            contador=contador2
        }
    
    }
    
    
    if(offset<5){
        flecha.style.right="-100%";
    }
    if(diferencia1>0 && widthWindow>750){
        oscurece.style.opacity=diferencia1
        flecha.style.right="20px";
      
    }
    if(diferencia1>0 && widthWindow<750){
        oscurece.style.opacity=diferencia1
        flecha.style.right="12px";
    }
  
    if(offset>heightWindow33){
       let offset2= offset-heightWindow;
        let diferencia2= (offset2/(heightWindow));
       
        oscurece2.style.opacity=diferencia2

    }
   
    if(offset>heightWindow33*2){
        let offset3= offset-heightWindow*2;
        let diferencia3= (offset3/(heightWindow));
    
        oscurece3.style.opacity=diferencia3
    }
   
  
})  
} */



//menu hamburgueso
let menuHamburgueso=document.querySelector("#menuHamburgueso");
let cruzHambugueso=document.querySelector("#cruzHamburgueso");
let oscuridadMobile= document.querySelector("#oscuridadMobile");
let header= document.querySelector("header");
let clickProyects22=document.querySelector("#clickProyects22");
let sopa22=document.querySelector(".sopa22");
let proyects44=document.querySelector("#proyects44")
let sacameContact=document.querySelector("#sacameContact")
let body=document.querySelector("html")
menuHamburgueso.addEventListener("click",function(e){
    e.preventDefault();
    header.style.backgroundColor="rgba(0,0,0,0.6)"
    header.style.backdropFilter="blur(1px)"
    oscuridadMobile.style.marginLeft="0%"
    menuHamburgueso.classList.add("hidden")
    cruzHambugueso.classList.remove("hidden")
})
cruzHambugueso.addEventListener("click",function(e){
    e.preventDefault();
    header.style.backgroundColor="rgba(0,0,0,0.35)"
    header.style.backdropFilter="blur(1px)"
    oscuridadMobile.style.marginLeft="100%"
    menuHamburgueso.classList.remove("hidden")
    cruzHambugueso.classList.add("hidden")
    body.style.overflowY="scroll"
})
clickProyects22.addEventListener("click",function(e){
    e.preventDefault();
    proyects44.classList.remove("hidden");
    clickProyects22.classList.add("hidden")
    sopa22.classList.remove("hidden")
    sacameContact.classList.add("hidden")
    body.style.overflow="hidden"
    setTimeout( ()=>{ proyects44.style.transform="scaleY(1)"},50)

})
sopa22.addEventListener("click",function(e){
    e.preventDefault();
    proyects44.style.transform="scaleY(0)"
    clickProyects22.classList.remove("hidden")
    sopa22.classList.add("hidden")
    body.style.overflowY="scroll"
    setTimeout( ()=>{  proyects44.classList.add("hidden");   sacameContact.classList.remove("hidden")},1000)
})





//flechaUp 
let flecha = document.querySelector(".flecha")

  window.addEventListener("scroll",function(){
 
    let widthWindow=window.innerWidth; 
    let offset = window.pageYOffset;
    let heightWindow= window.innerHeight/2;
    let diferencia1= (offset/heightWindow);
    if(offset<5 && widthWindow>750){
        flecha.style.right="-10%";
    }
    if(offset<5 && widthWindow<750){
        flecha.style.right="-15%";
    }
    if(diferencia1>1 && widthWindow>750){
        flecha.style.right="20px";
      console.log("si entro")
    }
    if(diferencia1>1 && widthWindow<750){
        flecha.style.right="12px";
    }

})


// click protects 

let clickProyects= document.querySelector("#clickProyects");
let clickProyects2= document.querySelector(".sopa");
let proyects =document.querySelector("#proyects");
let proyectsDown= document.querySelector("#proyectsDown2");
clickProyects.addEventListener("click",function(e){
    e.preventDefault();
    console.log("baja")
    //proyects.style.marginTop="0%";
    proyects.style.transform="translateY(0%)";
    clickProyects.classList.add("hidden")
    clickProyects2.classList.remove("hidden")
    

})
clickProyects2.addEventListener("click",function(e){7
    e.preventDefault();
    console.log("sube")
    //proyects.style.marginTop="-30%";
    proyects.style.transform="translateY(-100%)";
    clickProyects2.classList.add("hidden")
    clickProyects.classList.remove("hidden")
})


//texto imagen 

let textoH4= document.querySelectorAll(".textoH4");
let textoP= document.querySelectorAll(".pText");
let signoMas=document.querySelectorAll(".signoMas")
let signoMenos=document.querySelectorAll(".signoMenos")
let tituloMas=document.querySelectorAll(".tituloMas")




signoMas[0].addEventListener("click", function(){
    let windowInnerWidth= window.innerWidth;
    if(windowInnerWidth>750){
        tituloMas[0].style.transform="scaleX(1) translate(-300px)";
        textoH4[0].style.transform="translateY(70px)";
        textoP[0].style.transform="translateY(70px)";
        signoMas[0].classList.add("hidden");
        signoMenos[0].classList.remove("hidden")
        tituloMas[0].style.backdropFilter="none"
    }
    else{
        tituloMas[0].style.transform="scaleX(1) translate(-300px)";
        textoH4[0].style.transform="translateY(25px)";
        textoP[0].style.transform="translateY(25px)";
        signoMas[0].classList.add("hidden");
        signoMenos[0].classList.remove("hidden")
        tituloMas[0].style.backdropFilter="none"
    }
})


signoMenos[0].addEventListener("click", function(){
    textoH4[0].style.transform="translateY(250px)";
    textoP[0].style.transform="translateY(200px)";
    tituloMas[0].style.zIndex="-1";
    tituloMas[0].style.transform="scaleX(1) translate(0px)";
    signoMas[0].classList.remove("hidden");
    signoMenos[0].classList.add("hidden");
    setTimeout(()=>{
        tituloMas[0].style.backdropFilter="blur(10px)"
    },300)
  
  
})


    signoMas[1].addEventListener("click", function(){
        tituloMas[1].style.transform="scaleX(1) translate(-300px)";
        textoH4[1].style.transform="translateY(0px)";
        textoP[1].style.transform="translateY(0px)";
        signoMas[1].classList.add("hidden");
        signoMenos[1].classList.remove("hidden")
        tituloMas[1].style.backdropFilter="none"
    })


    signoMenos[1].addEventListener("click", function(){
        textoH4[1].style.transform="translateY(250px)";
        textoP[1].style.transform="translateY(200px)";
        tituloMas[1].style.zIndex="-1";
        tituloMas[1].style.transform="scaleX(1) translate(0px)";
        signoMas[1].classList.remove("hidden");
        signoMenos[1].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[1].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
    signoMas[2].addEventListener("click", function(){
        let windowInnerWidth= window.innerWidth;
        if(windowInnerWidth>750){
        tituloMas[2].style.transform="scaleX(1) translate(-300px)";
        textoH4[2].style.transform="translateY(90px)";
        textoP[2].style.transform="translateY(90px)";
        signoMas[2].classList.add("hidden");
        signoMenos[2].classList.remove("hidden")
        tituloMas[2].style.backdropFilter="none"}
        else{
            tituloMas[2].style.transform="scaleX(1) translate(-300px)";
        textoH4[2].style.transform="translateY(40px)";
        textoP[2].style.transform="translateY(40px)";
        signoMas[2].classList.add("hidden");
        signoMenos[2].classList.remove("hidden")
        tituloMas[2].style.backdropFilter="none"
        }
    })
    
    
    signoMenos[2].addEventListener("click", function(){
        textoH4[2].style.transform="translateY(250px)";
        textoP[2].style.transform="translateY(200px)";
        tituloMas[2].style.zIndex="-1";
        tituloMas[2].style.transform="scaleX(1) translate(0px)";
        signoMas[2].classList.remove("hidden");
        signoMenos[2].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[2].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
    

    signoMas[3].addEventListener("click", function(){
        tituloMas[3].style.transform="scaleX(1) translate(-300px)";
        textoH4[3].style.transform="translateY(90px)";
        textoP[3].style.transform="translateY(90px)";
        signoMas[3].classList.add("hidden");
        signoMenos[3].classList.remove("hidden")
        tituloMas[3].style.backdropFilter="none"
    })
    
    
    signoMenos[3].addEventListener("click", function(){
        textoH4[3].style.transform="translateY(250px)";
        textoP[3].style.transform="translateY(200px)";
        tituloMas[3].style.zIndex="-1";
        tituloMas[3].style.transform="scaleX(1) translate(0px)";
        signoMas[3].classList.remove("hidden");
        signoMenos[3].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[3].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
    

    signoMas[4].addEventListener("click", function(){
        let windowInnerWidth= window.innerWidth;
        if(windowInnerWidth>750){
        tituloMas[4].style.transform="scaleX(1) translate(-300px)";
        textoH4[4].style.transform="translateY(120px)";
        textoP[4].style.transform="translateY(120px)";
        signoMas[4].classList.add("hidden");
        signoMenos[4].classList.remove("hidden")
        tituloMas[4].style.backdropFilter="none"
        }
        else{
            tituloMas[4].style.transform="scaleX(1) translate(-300px)";
        textoH4[4].style.transform="translateY(85px)";
        textoP[4].style.transform="translateY(85px)";
        signoMas[4].classList.add("hidden");
        signoMenos[4].classList.remove("hidden")
        tituloMas[4].style.backdropFilter="none"
        }
    })
    
    
    signoMenos[4].addEventListener("click", function(){
        textoH4[4].style.transform="translateY(250px)";
        textoP[4].style.transform="translateY(200px)";
        tituloMas[4].style.zIndex="-1";
        tituloMas[4].style.transform="scaleX(1) translate(0px)";
        signoMas[4].classList.remove("hidden");
        signoMenos[4].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[4].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
    
    signoMas[5].addEventListener("click", function(){
        let windowInnerWidth= window.innerWidth;
        if(windowInnerWidth>750){
        tituloMas[5].style.transform="scaleX(1) translate(-300px)";
        textoH4[5].style.transform="translateY(75px)";
        textoP[5].style.transform="translateY(75px)";
        signoMas[5].classList.add("hidden");
        signoMenos[5].classList.remove("hidden")
        tituloMas[5].style.backdropFilter="none"

        }
        else{
            tituloMas[5].style.transform="scaleX(1) translate(-300px)";
            textoH4[5].style.transform="translateY(50px)";
            textoP[5].style.transform="translateY(50px)";
            signoMas[5].classList.add("hidden");
            signoMenos[5].classList.remove("hidden")
            tituloMas[5].style.backdropFilter="none"

        }
    })
    
    
    signoMenos[5].addEventListener("click", function(){
        textoH4[5].style.transform="translateY(250px)";
        textoP[5].style.transform="translateY(200px)";
        tituloMas[5].style.zIndex="-1";
        tituloMas[5].style.transform="scaleX(1) translate(0px)";
        signoMas[5].classList.remove("hidden");
        signoMenos[5].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[5].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
