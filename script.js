var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByClassName("li");

//length of the input value in the text box
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//toggle .done class on and off if click on the list item.
function changeClass(event) {
	event.target.classList.toggle("done");
}

ul.addEventListener("click", changeClass);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


