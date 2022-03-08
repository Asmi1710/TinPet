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



