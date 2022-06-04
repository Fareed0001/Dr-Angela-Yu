function openNav(){document.getElementById("mySidenav").style.width="250px";$("body").css("background-color","#d1d1d1")}
function closeNav(){document.getElementById("mySidenav").style.width="0";$("body").css("background-color","inherit")}
function myFunction(x){if(x.matches){$(".phone").removeClass("phone-div")}else{console.log("javascript media query failed")}}
var x=window.matchMedia("(max-width: 800px)")
myFunction(x)x.addListener(myFunction)
