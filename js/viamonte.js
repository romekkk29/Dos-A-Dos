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
    let viamonte4=this.document.querySelector("#viamonte4")
    let viamonte5=this.document.querySelector("#viamonte5")
    let viamonte6=this.document.querySelector("#viamonte6")
    let viamonte7=this.document.querySelector("#viamonte7")
    let viamonte8=this.document.querySelector("#viamonte8")
    let viamonte9=this.document.querySelector("#viamonte9")
    let viamonte10=this.document.querySelector("#viamonte10")
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
    }
    if(diferencia1>1 && widthWindow<750){
        flecha.style.right="12px";
    }
    if(offset>(heightWindow/2)){
        viamonte4.classList.add("viamonte4")
    }
    if(offset>(heightWindow)){
        viamonte5.classList.add("viamonte5")
    }
    if(offset>(heightWindow*2)){
        viamonte6.classList.add("viamonte6")
    }
    if(offset>(heightWindow*3)){
        viamonte7.classList.add("viamonte7")
      
    }
    if(offset>(heightWindow*4)){
        viamonte8.classList.add("viamonte8")
    }
    if(offset>(heightWindow*5)){
        viamonte9.classList.add("viamonte9")
       
    }
    if(offset>(heightWindow*6)){
        viamonte10.classList.add("viamonte10")
       
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



//texto imagen 

let mapaTrue=document.querySelector("#mapaTrue")
let mapaFalse=document.querySelector("#mapaFalse")
let mapaBicisenda=document.querySelector("#mapaBicisenda")
let mapaBicisenda2=document.querySelector("#mapaBicisenda2")
let mapaBicisenda3=document.querySelector("#mapaBicisenda3")
let diamante=document.querySelector("#diamante")


let getGaleria=document.querySelectorAll(".galeria img")
let carrusel= document.querySelector("#carrusel")
let oscuroCarrusel= document.querySelector("#oscuroCarrusel")
let oscuroCarruselCruz= document.querySelector("#oscuroCarrusel img")
let flechaCarruselMover= document.querySelector("#flechaCarruselMover")
let flechaCarruselMover2= document.querySelector("#flechaCarruselMover2")
flechaCarruselMover.addEventListener("click",function(){
    let cantidadSlide=document.querySelectorAll(".slide")
    if(currentIndex<cantidadSlide.length){
        currentIndex=currentIndex+1
        aplicar()
    }
   if(currentIndex==cantidadSlide.length){
    currentIndex=0
    aplicar()
   }
})
flechaCarruselMover2.addEventListener("click",function(){
    let cantidadSlide=document.querySelectorAll(".slide")
   if(currentIndex==0){
    currentIndex=cantidadSlide.length-1
    aplicar()
   }
   else{
    currentIndex=currentIndex-1
    aplicar()
   }
})
getGaleria.forEach((element,index)=>{
    element.addEventListener("click",function(){
        
            carrusel.innerHTML="<div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_1.jpg alt=bicisenda></div><div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_2.jpg alt=juegosdeniños></div> <div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_3.jpg alt=tenisemesa></div><div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_4.jpg alt=tenisdemesa></div><div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_5.jpg alt=juegosdeniños></div><div class=slide><img id=cambioImagen loading=lazy src=img/viamonte/Obra_Viamonte_6.jpg alt=bicisenda></div>"
            
            currentIndex=index
            aplicar();
            oscuroCarrusel.classList.remove("hidden")
            let html=document.querySelector("html")
            carrusel.classList.remove("hidden");
            html.style.overflowY="hidden"
            flechaCarruselMover.classList.remove("hidden")
            flechaCarruselMover2.classList.remove("hidden")
            
        }

     
    )
})
oscuroCarruselCruz.addEventListener("click",function(){
    oscuroCarrusel.classList.add("hidden")
    let html=document.querySelector("html")
    html.style.overflowY="scroll"
    carrusel.classList.add("hidden");
    flechaCarruselMover.classList.add("hidden")
    flechaCarruselMover2.classList.add("hidden")

})

//mapa viamonte
let mapaBeach= document.querySelector("#mapaBeach")
let camera1= document.querySelector("#camera1")
let camera2= document.querySelector("#camera2")
let camera3= document.querySelector("#camera3")
let camera4= document.querySelector("#camera4")
let camera5= document.querySelector("#camera5")
let camera6= document.querySelector("#camera6")
let camera7= document.querySelector("#camera7")

let mapaBeach2= document.querySelector("#mapaBeach2")
let mapaIsla= document.querySelector("#mapaIsla")
let mapaJuegoInfantilNorte= document.querySelector("#mapaJuegoInfantil")
let mapaParqueLago= document.querySelector("#mapaTree")
let mapaJuegoInfantilOest= document.querySelector("#mapaJuegoInfantil3")
let mapaParqueSur= document.querySelector("#mapaBosqueSur")
let mapaFitnes= document.querySelector("#mapaFitnes")
let mapaAjedrez= document.querySelector("#mapaAjedrez")
let mapaTenis= document.querySelector("#mapaTenis")
let mapaJuegoSur= document.querySelector("#mapaJuegoInfantil2")
let mapaParqueMayor= document.querySelector("#mapaParqueMayor")
let mapaSkatePark= document.querySelector("#mapaSkatePark")
let mapaPolifuncional= document.querySelector("#mapaPolifuncional")
let mapaMinigolf= document.querySelector("#mapaMiniGolf")
let mapaJuegoInfantilNorEste= document.querySelector("#mapaJuegoInfantil4")
let mapaParqueNorte= document.querySelector("#mapaParqueNorte")
mapaParqueNorte.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/5.webp alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
    
})
mapaJuegoInfantilNorEste.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_JuegodeNinos_A-B-C.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();

})
mapaMinigolf.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/Mapa_Minigolf.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
})
mapaPolifuncional.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_CanchaPolifuncion.jpg alt=parqueLago></div><div class=slide>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
  
})
mapaSkatePark.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/skatepark_1.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
    
})
mapaParqueMayor.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/8.webp alt=laguna></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
mapaJuegoSur.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_JuegodeNinos_D.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
    
})
mapaTenis.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/tennis_1.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();

    
})
mapaAjedrez.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_Ajedrez.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
    
})
mapaFitnes.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/fitness_1.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
 
    
})
mapaParqueSur.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/parquesur_1.jpg alt=parqueLago></div><div class=slide><img loading=lazy src=img/viamonte/parquesur_2.jpg alt=parqueLago></div><div class=slide><img  loading=lazy src=img/viamonte/parquesur_3.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
    flechaCarruselMover.classList.remove("hidden")
    flechaCarruselMover2.classList.remove("hidden")
    
})
mapaJuegoInfantilOest.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_JuegodeNinos_A-B-C.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
})
mapaParqueLago.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/10.svg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
    
})
mapaJuegoInfantilNorte.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/Mapa_JuegodeNinos_A-B-C.jpg alt=parqueLago></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
})
mapaIsla.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/viamonte/parqueIsla2.jpg alt=parqueisla></div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
   
    
})
mapaBeach.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/laguna2.jpg alt=laguna></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
mapaBeach2.addEventListener("click",function(){
   
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/laguna2.jpg alt=laguna2></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
mapaBicisenda.addEventListener("click",function(){
    mapaTrue.classList.add("hidden")
    mapaFalse.classList.remove("hidden")
})
mapaBicisenda2.addEventListener("click",function(){
    mapaTrue.classList.add("hidden")
    mapaFalse.classList.remove("hidden")
})
mapaBicisenda3.addEventListener("click",function(){
    mapaTrue.classList.add("hidden")
    mapaFalse.classList.remove("hidden")
})
diamante.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/barrioPremium.jpg alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera1.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/4.webp alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera6.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/5.webp alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera7.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/Mapa_Camara7.jpg alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera2.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/3.webp alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera3.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/9.webp alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera4.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/1.jpg alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
camera5.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/viamonte/2.webp alt=barrio></div>"
    currentIndex=0
    aplicar();
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
})
  // set up our state
  let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0



function aplicar(){
    const slider = document.querySelector('.slider-container'),
    slides = Array.from(document.querySelectorAll('.slide'))
    
    setPositionByIndex();
    
    
    // add our event listeners
    slides.forEach((slide, index) => {
      const slideImage = slide.querySelector('img')
      // disable default image drag
      slideImage.addEventListener('dragstart', (e) => e.preventDefault())
      // touch events
      slide.addEventListener('touchstart', touchStart(index))
      slide.addEventListener('touchend', touchEnd)
      slide.addEventListener('touchmove', touchMove)
      // mouse events
      slide.addEventListener('mousedown', touchStart(index))
      slide.addEventListener('mouseup', touchEnd)
      slide.addEventListener('mousemove', touchMove)
      slide.addEventListener('mouseleave', touchEnd)
    })
    
    // make responsive to viewport changes
    window.addEventListener('resize', setPositionByIndex)
    
    // prevent menu popup on long press
    window.oncontextmenu = function (event) {
      event.preventDefault()
      event.stopPropagation()
      return false
    }
    
    function getPositionX(event) {
      return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
    }
    
    // use a HOF so we have index in a closure
    function touchStart(index) {
      return function (event) {
        currentIndex = index
        startPos = getPositionX(event)
        isDragging = true
        animationID = requestAnimationFrame(animation)
        slider.classList.add('grabbing')
      }
    }
    
    function touchMove(event) {
      if (isDragging) {
        const currentPosition = getPositionX(event)
        currentTranslate = prevTranslate + currentPosition - startPos
      }
    }
    
    function touchEnd() {
      cancelAnimationFrame(animationID)
      isDragging = false
      const movedBy = currentTranslate - prevTranslate
    
      // if moved enough negative then snap to next slide if there is one
      if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1
    
      // if moved enough positive then snap to previous slide if there is one
      if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
    
      setPositionByIndex()
    
      slider.classList.remove('grabbing')
     
    
    }
    
    function animation() {
      setSliderPosition()
      if (isDragging) requestAnimationFrame(animation)
    }
    
    function setPositionByIndex() {
      currentTranslate = currentIndex * -window.innerWidth
      prevTranslate = currentTranslate
      setSliderPosition()
    }
    
    function setSliderPosition() {
      slider.style.transform = `translateX(${currentTranslate}px)`
    }
}




