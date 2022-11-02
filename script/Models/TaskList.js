class TaskList{

    constructor(){
        this._taskList = JSON.parse(localStorage.getItem('Tasks')) || [];
    }

    addToTaskList(task){

        this._taskList.push(task);
    }

    get taskList(){

        return [].concat(this._taskList);
    }

}