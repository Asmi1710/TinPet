
// Opening new page when download button is clicked
var n = document.querySelectorAll(".download-button").length;

for (var i=0;i<n;i++){
    document.querySelectorAll(".download-button")[i].addEventListener ("click", function (){
        document.location.href = 'planPage.html';
    });
}

// Opening new page when sign up button is clicked
var plan = document.querySelectorAll(".pricingTable-signup");
var k= plan.length;

for (var j=0; j<k;j++) {
    plan[j].addEventListener("click", function(){
        document.location.href = 'planPage.html';
    });
}

//****************************************************************************** */
// adding animation to the title of tinpet
document.querySelectorAll(".navbar-brand")[1].textContent="tinpet";
const titleHead = document.querySelectorAll(".navbar-brand")[1];
const splitHead = titleHead.textContent.split("");
titleHead.textContent="";
console.log (splitHead);
for (let i=0; i<splitHead.length; i++) {
    titleHead.innerHTML+="<span>"+splitHead[i]+"</span>";
}
let index= 0;
let timer =setInterval (onLoading,100);

function onLoading (){
    const splitting =titleHead.querySelectorAll("span")[index];
    splitting.classList.add('flipping');
    index++;
    if (index== splitHead.length){
        completeTask ();
        return;
    }
}

function completeTask (){
    clearInterval (timer);
    timer = null;
}

//****************************************************************************** */
// adding animation the titles of feature
const text= [];
const strText= [];
const splitText=[];

for (let i=0;i<3;i++)
{
    text[i] =document.querySelectorAll(".feature-title")[i];
    //console.log ("st1");
    strText[i] =text[i].textContent;
    splitText[i]= strText[i].split ("");
    console.log (splitText[i]);
}    
        
// calling animation when page loads
function changeTitle (k){   
    text[k].textContent="";
    for (var i=0;i<splitText[k].length;i++){
          text[k].innerHTML+="<span>"+ splitText[k][i]+"</span>";
      }
    //console.log ("st2");
    let char=0;
    let timer = setInterval (flicker,50);

    function flicker () {
         const span =text[k].querySelectorAll ("span")[char];
         span.classList.add ("flick");
         char++;
         if (char==splitText[k].length){
            complete ();
            return;
         }
      }
    function complete (){
            clearInterval (timer);
            timer=null;
            //console.log ("done");
    }  
}

changeTitle (0);
changeTitle (1);
changeTitle (2);


function repeatFlick (k){
    for (let i=0; i<splitText[k].length;i++)
    {
        const span =text[k].querySelectorAll("span")[i];
        span.classList.remove("flick");
    }
    let char=0;
    let timer= setInterval (flicker,80);
    //console.log ("st1-again");

    function flicker () {
        const span =text[k].querySelectorAll ("span")[char];
        span.classList.add("flick");
        char++;
        //console.log ("st3-again");
        if (char==splitText[k].length){
           complete ();
           //console.log ("st2-again");
           return;
        }
     }
   function complete (){
       clearInterval (timer);
       timer=null;
       //console.log ("done");
   }  
 }

//console.log (window.visualViewport);
//console.log (window.screenY);

// calling animation on scroll event 

window.addEventListener("scroll", function (){
    // let elem = document.querySelector (".")   
    // console.log ("Y="+ doc.scrollTop);
       repeatFlick (0);
       repeatFlick (1);
       repeatFlick (2);
   });

