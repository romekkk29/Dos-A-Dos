
let oscurece= document.querySelector("#oscurece");
let oscurece2= document.querySelector("#oscurece2");
let oscurece3= document.querySelector("#oscurece3");
let principalText= document.querySelectorAll(".principalText")
let push=0;
let contador=0;
let widthWindow=window.innerWidth;
 window.addEventListener("scroll",function(e){
    let offset = window.pageYOffset;
    let flecha = document.querySelector(".flecha")
    let heightWindow= window.innerHeight+150;
    let heightWindow33= window.innerHeight;
    let diferencia1= (offset/heightWindow);
  
    contador--;
    let diff=offset-push;
    let contador2=contador+2
    push=offset
    let contador3=contador/2.5;
    let contador4=contador2/2;
    let y="translateY("+contador+"px)"
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

let verMas=document.querySelectorAll(".verMas");
let principalTextP=document.querySelectorAll(".principalText p");
let verMenos=document.querySelectorAll(".verMenos")
let verProyecto=document.querySelectorAll(".verProyecto")

for(let i=0;i<verMas.length;i++){
    verMas[i].addEventListener("click",function(){
        if(widthWindow<750){
            principalTextP[i].style.display="block";
            principalText[i].style.width="80%";
            verMenos[i].style.display="block";
            verProyecto[i].style.display="block";
            verMas[i].style.display="none"
        }
        
    })
}
for(let i=0;i<verMas.length;i++){
    verMenos[i].addEventListener("click",function(){
        if(widthWindow<750){
          
            principalText[i].style.width="60%";
            setTimeout(()=>{
                principalTextP[i].style.display="none";
            },700)
            setTimeout(()=>{
                verMas[i].style.display="block";
                verMenos[i].style.display="none";
                verProyecto[i].style.display="none";
            },800)
          
        }
        
    })
}

