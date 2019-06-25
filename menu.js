// JavaScript Document
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

function closeNav(webPage)
{	
	setTimeout(function(){window.location = webPage;} , 350);
	document.getElementById("mySidenav").style.width = "0";
}