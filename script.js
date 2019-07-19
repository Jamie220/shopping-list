var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByClassName("li");


//length of the input value in the text box
function inputLength() {
	return input.value.length;
}

//create a new list item 
function createListElement() {
	var li = document.createElement("li");//create a <li> element
	li.appendChild(document.createTextNode(input.value));//attached on the botton of the list
	ul.appendChild(li);//attched this "li" under the unorder list "ul"
	input.value = "";
	//create a delete button
	var deleteButton = document.createElement("button"); 
	//style for the delete button
	deleteButton.classList.add("deleteButton");
	//style X in the delete button by create a text node
	deleteButton.appendChild(document.createTextNode("X"));
	//attached on the <li>
	li.appendChild(deleteButton);
	//when click will delete the list
	deleteButton.addEventListener("click",deleteListItem);
}

//delete the list
function deleteListItem(event) {
	event.target.parentElement.remove();
}

//using click add list
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//using keypress add list
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



