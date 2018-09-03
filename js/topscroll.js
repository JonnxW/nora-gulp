window.onload = function(){
function toggleTopscroll() {
    if (document.getElementsByTagName("main")[0].scrollTop > 100 ) {
        document.getElementById("topscroll").style.display = "block";
    } else {
        document.getElementById("topscroll").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.getElementsByTagName("main")[0].scrollTop = 0; 

} 
// When the user scrolls down 20px from the top of the document, show the button
document.getElementsByTagName("main")[0].onscroll = function(){toggleTopscroll()};
document.getElementById("topscroll").addEventListener("click", function(){
	topFunction();
});

}
