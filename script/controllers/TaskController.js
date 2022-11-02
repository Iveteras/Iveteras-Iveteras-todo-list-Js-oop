class TaskController{

    constructor(){
        //All the variables that i'll use 
        this._formToReset = document.querySelector('.form');

        this._inputTitle = document.querySelector('#form-title');
        this._inputDescription = document.querySelector('#form-description');
        this._inputDeadline = document.querySelector('#form-deadline');
        this._inputSelect = document.querySelector('#form-select');
        this._inputColor = document.querySelector('#form-color');
        
        this._taskView = new TaskView();

        this._messageErrorFather = document.querySelectorAll('.container-for-error-message');
        this._errorMessageView = new ErrorMessageView();

        this._removeTask = new RemoveTask();

        this._taskList = new TaskList();

        this._localSotrage = new SaveTask();
    }

    buttonClick(event){
        event.preventDefault();
        
        //taking all the datas 
        let title = this._inputTitle.value;
        let description = this._inputDescription.value; 
        let deadline = this._inputDeadline.value; 
        let select = this._inputSelect.value; 
        let color = this._inputColor.value; 

        //removing error message if exist before add a new one
        let errorToRemove = document.querySelectorAll('.errorMessage');
        this._errorMessageView.removeErrorMessage(errorToRemove);

        //validating form
        this.validateForm(title, description, deadline, select);

        //defining the emoje
        if(select == "work") var definingEmoje = 'work';
        if(select == "Studies") var definingEmoje = 'description';
        if(select == "Personal") var definingEmoje = 'person';

        //making a new task
        let task = new Task(definingEmoje, title, description, deadline, select, color);

        //adding the task created in the taskLis
        this._taskList.addToTaskList(task);

        //adding the taskList in localStorage
        this._localSotrage.saveToLocalStorage(this._taskList.taskList);

        //makes the task show up
        this._taskView.addToDom(task);

        //remove task
        let trashButtonList = document.querySelectorAll('.trash');
        let taskListContainer = document.querySelectorAll('.task');
        this._removeTask.removeTask(trashButtonList, taskListContainer);

        //reset forms
        this.resetForm();
    }

    
    validateForm(title, description, deadline, select){

        if(title == "") this._errorMessageView.templateTitle(this._messageErrorFather[0]);
        if(description == "") this._errorMessageView.templateDescription(this._messageErrorFather[1]);
        if(deadline == "") this._errorMessageView.templateDeadline(this._messageErrorFather[2]);
        if(select == "") this._errorMessageView.templateType(this._messageErrorFather[3]);

        if(title == "" || description == "" || deadline == "" || select == ""){
            
           throw new Error('Fill in the data');
        }
    }

    resetForm(){
        this._inputTitle.value = '';
        this._inputDescription.value = '';
        this._inputDeadline.value = ''; 
        this._inputSelect.value =  '';
        this._inputColor.value = '#000000';
    }
}

//making a controller to add onsubmit in the html file "form"
const buttonController = new TaskController();
