// CHECKBOY
/*
var checkboy = document.getElementsByClassName("checkboy");
checkboy.onclick = function () {
	var checkboy = this.checked;
	var arrayboy = document.getElementsByClassName("boy");
	// var arraygirl = document.getElementsByClassName("girl");
	for (var i = 0; i < arrayboy.length; i++) {
		arrayboy[i].checked = checkboy;
	}
}



// CHECKGIRL

var checkgirl = document.getElementById("checkgirl");
checkgirl.onclick = function () {
	var checkgirl = this.checked;
	var arraygirl = document.getElementsByClassName("girl");
	var arrayboy = document.getElementsByClassName("boy");
	for (var i = 0; i < arraygirl.length; i++) {
		arraygirl[i].checked = checkgirl;
	}
}
*/
// HIDDEN GIRL

var hiddengirl = document.getElementById("checkboy");
hiddengirl.onclick = function() {
	var check = this.checked;
	var hiddengirl = document.getElementsByClassName("girl");
	var hiddenboy = document.getElementsByClassName("boy");
	for (var i = 0; i < hiddengirl.length; i++) {
		hiddengirl[i].style.display = "none";
		hiddenboy[i].style.display = "inline";	
	}
}

// HIDDEN BOY

var hiddenboy = document.getElementById("checkgirl");
hiddenboy.onclick = function() {
	var hiddenboy = document.getElementsByClassName("boy");
	var hiddengirl = document.getElementsByClassName("girl");
	for (var i = 0; i < hiddenboy.length; i++) {
		hiddenboy[i].style.display = "none";
		hiddengirl[i].style.display = "inline";
	}
}

// CHECKBOY
