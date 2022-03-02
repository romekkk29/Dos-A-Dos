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
    let i3=this.document.querySelector("#i3")
    let i4=this.document.querySelector("#i4")
    let i5=this.document.querySelector("#i5")
    let i6=this.document.querySelector("#i6")
    let weCard= document.querySelectorAll(".weCard");
    let weCard2= document.querySelectorAll(".weCard2");
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
    weCard.forEach((card)=>{
        weCard2.forEach((card2)=>{
            let offsetTop= card.offsetTop-655
            let offsetTop2= card2.offsetTop-655
            if(offset>=offsetTop){
                card.style.left="0%"
            }
            if(offset<offsetTop){
             card.style.left="-100%"
            }
            if(offset>offsetTop2){
                card2.style.left="0%"
               }
            if(offset<offsetTop2){
                card2.style.left="100%"
               }
            if(offset>(heightWindow/2)){
                i3.classList.add("i3")
            }
            if(offset>(heightWindow)){
                i4.classList.add("i4")
            }
            if(offset>(heightWindow*2)){
                i5.classList.add("i5")
            }
            if(offset>(heightWindow*3)){
                i6.classList.add("i6")
              
            }
         }
        )
        })
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

for(let i=0; i<signoMas.length;i++){
    signoMas[i].addEventListener("click", function(){
        tituloMas[i].style.transform="scaleX(1) translate(-300px)";
        textoH4[i].style.transform="translateY(0px)";
        textoP[i].style.transform="translateY(0px)";
        signoMas[i].classList.add("hidden");
        signoMenos[i].classList.remove("hidden")
        tituloMas[i].style.backdropFilter="none"
    })
}
for(let i=0;i<signoMenos.length;i++){
    signoMenos[i].addEventListener("click", function(){
        textoH4[i].style.transform="translateY(250px)";
        textoP[i].style.transform="translateY(200px)";
        tituloMas[i].style.zIndex="-1";
        tituloMas[i].style.transform="scaleX(1) translate(0px)";
        signoMas[i].classList.remove("hidden");
        signoMenos[i].classList.add("hidden");
        setTimeout(()=>{
            tituloMas[i].style.backdropFilter="blur(10px)"
        },300)
      
      
    })
}