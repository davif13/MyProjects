function addNewTask() {
	var list = document.getElementById("list");
	var text = document.getElementById("task_name").value;

	if(text.length === 0){ 
		alert("Digite o nome da tarefa!")
		return;
	}
	
	var listItem = document.createElement("li");
	listItem.className = "task-item";

	const textElement = document.createTextNode(text);
	listItem.appendChild(textElement);
	list.appendChild(listItem);
}