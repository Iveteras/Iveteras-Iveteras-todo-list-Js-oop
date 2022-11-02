class RemoveTask{

    removeTask(trashButtonList, taskListContainer){

        for(let i = 0; i < trashButtonList.length; i++){
            let trashButton = trashButtonList[i];
            
            trashButton.addEventListener('click', () =>{
                var task = taskListContainer[i];

                task.remove();
            })
        }
    }
}
