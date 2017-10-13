
// CHECK GIRL & HIDDEN BOY

var checkgirl = document.getElementById("checkgirl");
checkgirl.onclick = function () {
	var checkgirl = this.checked;
	var arraygirl = document.getElementsByClassName("checkgirl");
	var hiddenboy = document.getElementsByClassName("boy");
	for (var i = 0; i < arraygirl.length; i++) {
		arraygirl[i].checked = checkgirl;
		/*arraygirl[i].style.display = "inline";*/
	}
	if(arraygirl.checked = true){
		for (var i = 0; i < hiddenboy.length; i++) {
			hiddenboy[i].style.display = "none";
		}
	}
}

// CHECKBOY & HIDDENGIRL

var checkboy = document.getElementById("checkboy");
checkboy.onclick = function () {
	var checkboy = this.checked;
	var arrayboy = document.getElementsByClassName("checkboy");
	var hiddengirl = document.getElementsByClassName("girl");
	for (var i = 0; i < arrayboy.length; i++) {
		arrayboy[i].checked = checkgirl;
		/*arrayboy[i].style.display = "inline";*/
	}
	if(arrayboy.checked = true){
		for (var i = 0; i < hiddengirl.length; i++) {
			hiddengirl[i].style.display = "none";
		}
	}
}

/*********************************************************************/
