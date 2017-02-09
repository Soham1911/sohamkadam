window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 0.1);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}
window.addEventListener("scroll",parallax,false);



function parallax(){
	var div1=document.getElementById("second");
	var div2=document.getElementById("third");
	var div3=document.getElementById("fourth");
	div1.style.top=-(window.pageYOffset/1.5)+'px';
div2.style.top=-(window.pageYOffset/4.5)+'px';
	div3.style.top=-(window.pageYOffset/1.5)+'px';


}
