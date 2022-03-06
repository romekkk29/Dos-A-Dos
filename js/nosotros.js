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


let getGaleria=document.querySelectorAll(".galeria img")
let carrusel= document.querySelector("#carrusel")
let oscuroCarrusel= document.querySelector("#oscuroCarrusel")
let oscuroCarruselCruz= document.querySelector("#oscuroCarrusel img")
let flechaCarruselMover= document.querySelector("#flechaCarruselMover")
let flechaCarruselMover2= document.querySelector("#flechaCarruselMover2")
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
flechaCarruselMover2.addEventListener("click",function(){
  
   if(currentIndex==0){
    currentIndex=5
    setPositionByIndex();
   }
   else{
    currentIndex=currentIndex-1
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
            flechaCarruselMover2.classList.remove("hidden")
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
    flechaCarruselMover2.classList.add("hidden")

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
