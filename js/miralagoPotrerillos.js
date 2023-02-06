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
        
            carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_11.jpg alt=bicisenda></div><div class=slide><img   loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_21.jpg alt=ju></div><div class=slide><img   loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_31.jpg alt=teni></div><div class=slide><img loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_41.jpg alt=tenis></div><div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_51.jpg alt=juegos></div><div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_61.jpg alt=bicisenda></div>"
            
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

let camera1= document.querySelector("#camera11")
let camera2= document.querySelector("#camera22")
let camera3= document.querySelector("#camera33")
let camera4= document.querySelector("#camera44")
let camera5= document.querySelector("#camera55")
let camera6= document.querySelector("#camera66")
let camera7= document.querySelector("#camera77")
let camera8= document.querySelector("#camera88")
let portal= document.querySelector("#estacionamiento11")
let lodge= document.querySelector("#lodge11")
let muelle2= document.querySelector("#muelle11")
let mirador= document.querySelector("#mirador11")
let puente= document.querySelector("#puente11")
let juego= document.querySelector("#juego11")
let voley= document.querySelector("#voley11")
let plato= document.querySelector("#plato11")
let pileta= document.querySelector("#pileta11")
let muelle= document.querySelector("#barco11")
let paragua= document.querySelector("#paragua11")






lodge.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_61.jpg alt=parqueLago></div><div class=slide> <img  loading=lazy src=img/miralagoPotrerillos/Obra_Miralago_11.jpg alt=parqueLago> </div>"
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

puente.addEventListener("click",function(){
    
    carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/MIRALAGO10.jpg alt=parqueLago> </div>"
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    oscuroCarrusel.classList.remove("hidden")
    let html=document.querySelector("html")
    carrusel.classList.remove("hidden");
    html.style.overflowY="hidden"
    currentIndex=0
    aplicar();
    
})
plato.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/MIRALAGO9.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
juego.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Miralago_Juegodeninos.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
voley.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Miralago_CanchadeVoley.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
pileta.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Miralago_CanchadeVoley.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
mirador.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/MIRALAGO7.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
portal.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/MIRALAGO6.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
muelle2.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/Miralago_PaseoCostero.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
muelle.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/home/miralago2.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})
paragua.addEventListener("click",function(){
    
  carrusel.innerHTML="<div class=slide><img  loading=lazy src=img/miralagoPotrerillos/MIRALAGO8.jpg alt=parqueLago> </div>"
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
  currentIndex=0
  aplicar();
  
})




camera1.addEventListener("click",function(){
    mapaTrue.classList.remove("hidden")
    mapaFalse.classList.add("hidden")
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/MIRALAGO5.jpg alt=barrio></div>"
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
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/MIRALAGO1.jpg alt=barrio></div>"
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
  carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/Miralago_Camar8.jpg alt=barrio></div>"
  currentIndex=0
  aplicar();
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  oscuroCarrusel.classList.remove("hidden")
  let html=document.querySelector("html")
  carrusel.classList.remove("hidden");
  html.style.overflowY="hidden"
})
camera8.addEventListener("click",function(){
  mapaTrue.classList.remove("hidden")
  mapaFalse.classList.add("hidden")
  carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/Miralago_Camara_5.jpg alt=barrio></div>"
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
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/Miralago_Camara_7.jpg alt=barrio></div>"
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
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/Miralago_Camara_6.jpg alt=barrio></div>"
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
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/home/miralago2.jpg alt=barrio></div>"
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
    carrusel.innerHTML="<div class=slide><img loading=lazy src=img/miralagoPotrerillos/iralago_1-2.jpg alt=barrio></div>"
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




