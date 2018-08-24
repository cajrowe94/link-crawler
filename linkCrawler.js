//make array to hold link, and array to collect all links
var arr = [], l = document.links;

window.onload(getLinks);
setInterval(followLink, 2000);

function getLinks(){
	for(var i=0; i<l.length; i++) {
	  arr.push(l[i].href);
	}
}

function followLink(){
	//get random number between length of link array
	var ranNum = Math.floor(Math.random()*arr.length);
	arr[ranNum].click();

}