class SaveTask {

    constructor(){
        this._taskView = new TaskView();
        this._taskList = JSON.parse(localStorage.getItem('Tasks'));
    }

    saveToLocalStorage(taskList){

        localStorage.setItem('Tasks', JSON.stringify(taskList));
    }

    addToDom(){
        this._taskList.forEach(task => 
            this._taskView.addToDom(task)
        );
         
        let trashButtonList = document.querySelectorAll('.trash');
        let taskListContainer = document.querySelectorAll('.task');
        this.removeTask(trashButtonList, taskListContainer);
    }

    removeTask(trashButtonList, taskListContainer){

            for(let i = 0; i < trashButtonList.length; i++){
                let trashButton = trashButtonList[i];
                
                trashButton.addEventListener('click', () =>{
                    
                    //removing html element
                    taskListContainer[i].remove();

                    //removing element from array
                    this._taskList.splice(i, 1);
                    this.saveToLocalStorage(this._taskList);
                })
            }
        
    }

}

const taskListController = new SaveTask();

















