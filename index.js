var n = document.querySelectorAll (".download-button").length;

for (var i=0;i<n;i++){
    document.querySelectorAll(".download-button")[i].addEventListener ("click", function (){
        document.location.href = 'planPage.html';
    });
}



var plan = document.querySelectorAll(".pricingTable-signup");
var k= plan.length;

for (var j=0; j<k;j++) {
    plan[j].addEventListener("click", function(){
        document.location.href = 'planPage.html';
    });
}


const text =document.querySelectorAll(".feature-title")[0];
console.log ("st1");
const strText =text.textContent;
const splitText= strText.split ("");
    
 function changeTitle (){

    //  const text =document.querySelectorAll(".feature-title")[0];
    //  console.log ("st1");
    //  const strText =text.textContent;
    //  const splitText= strText.split ("");
    
     text.textContent="";
     for (var i=0;i<splitText.length;i++){
          text.innerHTML+="<span>"+ splitText[i]+"</span>";
      }
      console.log ("st2");
     let char=0;
     let timer = setInterval (flicker,50);

     function flicker () {
         const span =text.querySelectorAll ("span")[char];
         span.classList.add ("flick");
         char++;
         if (char==splitText.length){
            complete ();
            return;
         }
      }
    function complete (){
        clearInterval (timer);
        timer=null;
        console.log ("done");
    }  
 }

 
 changeTitle ();

 function repeatFlick (){
    for (let i=0; i<splitText.length;i++)
    {
        const span =text.querySelectorAll ("span")[i];
        span.classList.remove("flick");
    }
    let char=0;
    let timer= setInterval (flicker,80);
    console.log ("st1-again");

    function flicker () {
        const span =text.querySelectorAll ("span")[char];
        span.classList.add("flick");
        char++;
        console.log ("st3-again");
        if (char==splitText.length){
           complete ();
           console.log ("st2-again");
           return;
        }
     }
   function complete (){
       clearInterval (timer);
       timer=null;
       console.log ("done");
   }  
 }

console.log (window.visualViewport);
console.log (window.screenY);

window.addEventListener("scroll", function (){
    // let elem = document.querySelector (".")   
    // console.log ("Y="+ doc.scrollTop);
       repeatFlick ();
   });

