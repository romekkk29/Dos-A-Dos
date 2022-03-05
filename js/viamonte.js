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
})



let getGaleria=document.querySelectorAll(".galeria img")
let carrusel= document.querySelector("#carrusel")
let oscuroCarrusel= document.querySelector("#oscuroCarrusel")
let oscuroCarruselCruz= document.querySelector("#oscuroCarrusel img")
let flechaCarruselMover= document.querySelector("#flechaCarruselMover")
flechaCarruselMover.addEventListener("click",function(){
    if(currentIndex<6){
        currentIndex=currentIndex+1
        setPositionByIndex();
    }
   if(currentIndex==6){
    currentIndex=0
    setPositionByIndex();
   }
})
getGaleria.forEach((element,index)=>{
    element.addEventListener("click",function(){
        
        currentIndex=index
        let widthWindow=window.innerWidth; 
        if(widthWindow>750){
            oscuroCarrusel.classList.remove("hidden")
            let html=document.querySelector("html")
            carrusel.classList.remove("hidden");
            html.style.overflowY="hidden"
            flechaCarruselMover.classList.remove("hidden")
            setPositionByIndex();
        }

     
    })
})
oscuroCarruselCruz.addEventListener("click",function(){
    oscuroCarrusel.classList.add("hidden")
    let html=document.querySelector("html")
    html.style.overflowY="scroll"
    carrusel.classList.add("hidden");
    flechaCarruselMover.classList.add("hidden")
})






const slider = document.querySelector('.slider-container'),
slides = Array.from(document.querySelectorAll('.slide'))
// set up our state
let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0

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
