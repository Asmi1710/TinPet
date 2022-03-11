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


visualViewport.addEventListener("scroll", changeTitle);

 function changeTitle (){
     const text =document.querySelectorAll(".feature-title")[0];
     const strText =text.textContent;
     const splitText= strText.split ("");
    
     text.textContent="";
     for (var i=0;i<splitText.length;i++){
          text.innerHTML+="<span>"+ splitText[i]+"</span>";
      }

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

