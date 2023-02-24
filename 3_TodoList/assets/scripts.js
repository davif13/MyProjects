function addNewTask() {
	var list = document.getElementById("list");
	var text = document.getElementById("task_name").value;

	if(text.length === 0){ 
		alert("Digite o nome da tarefa!")
		return;
	}
	
	var listItem = document.createElement("li");
	listItem.className = "task-item";

	var checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "task-checkbox";
	listItem.appendChild(checkbox);

	const textElement = document.createTextNode(text);
	listItem.appendChild(textElement);
	list.appendChild(listItem);

	var removeButton = document.createElement("button");
	removeButton.className = "remove-button";
	removeButton.textContent = "Remover";
	removeButton.addEventListener("click", function() {
		list.removeChild(listItem);
	});

	listItem.appendChild(removeButton);

	list.appendChild(listItem);

	document.getElementById("task_name").value = "";
}

var input = document.getElementById("task_name");

input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
	event.preventDefault();
	addNewTask();
}
})