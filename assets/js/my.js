var fn = document.querySelector(".float_nav");
var n = document.querySelector("nav");
var a = document.querySelector("header a");

window.addEventListener('scroll', function() {
	if(window.pageYOffset > 300) {
		fn.style.display = "block";
	} 
	
	if (window.pageYOffset < 300) {
		fn.style.display = "none";
	}
});