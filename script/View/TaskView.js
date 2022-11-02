class TaskView{

    addToDom(task){

        createHtml(task);
        
        function createHtml(task) {
            //creating all the elements
            const newTaskDiv = document.createElement('div');
            const iconElement = document.createElement('i');
            const divTaskInfoElement = document.createElement('div');
            const h3Element = document.createElement('h3');
            const spanElement = document.createElement('span');
            const deadlineElement = document.createElement('span');
            const buttonElement = document.createElement('button');
            const trashIconElement = document.createElement('i');

            //classes and ids
            newTaskDiv.classList.add('task');
            iconElement.setAttribute("id", "emoje-one");
            iconElement.classList.add('material-icons');
            divTaskInfoElement.classList.add('task-info');
            deadlineElement.classList.add('task-data');
            buttonElement.classList.add('trash');
            trashIconElement.setAttribute("id", "trash");
            trashIconElement.classList.add('material-icons');

            //content of elements
            iconElement.innerHTML = `${task._emoje}`;
            h3Element.innerHTML = `${task._title}`;
            spanElement.innerHTML = `${task._description}`;
            deadlineElement.innerHTML = `${task._deadline}`;
            trashIconElement.innerHTML = `delete`;

            //setting the appendChild();
            document.querySelector('.tasks-container').appendChild(newTaskDiv);
            newTaskDiv.appendChild(iconElement);
            newTaskDiv.appendChild(divTaskInfoElement);
            newTaskDiv.appendChild(deadlineElement);
            newTaskDiv.appendChild(buttonElement);
            divTaskInfoElement.appendChild(h3Element);
            divTaskInfoElement.appendChild(spanElement);
            buttonElement.appendChild(trashIconElement);

            //setting the borderColor
            newTaskDiv.style.borderLeftColor = `${task._color}`;
        }
    }
}

