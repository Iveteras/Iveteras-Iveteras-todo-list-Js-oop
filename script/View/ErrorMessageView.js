class ErrorMessageView{

    templateTitle(fatherElement){

        let titleError = document.createElement('p');
        titleError.classList.add('errorMessage');
        titleError.innerHTML = '*Fill in the Title!';

        let father = fatherElement;
        father.appendChild(titleError);
    }

    templateDescription(fatherElement){

        let descriptionError = document.createElement('p');
        descriptionError.classList.add('errorMessage');
        descriptionError.innerHTML = '*Fill in the Description!';

        let father = fatherElement;
        father.appendChild(descriptionError);
    }

    templateDeadline(fatherElement){

        let deadlineError = document.createElement('p');
        deadlineError.classList.add('errorMessage');
        deadlineError.innerHTML = '*Fill in the Deadline!';

        let father = fatherElement;
        father.appendChild(deadlineError);
    }

    templateType(fatherElement){
    
        let typeError = document.createElement('p');
        typeError.classList.add('errorMessage');
        typeError.innerHTML = '*Select an option!';

        let father = fatherElement;
        father.appendChild(typeError);
    }

    removeErrorMessage(errorsToRemove){

        for(let i = 0; i < errorsToRemove.length; i++){
            let errorToRemove = errorsToRemove[i];

            errorToRemove.remove();
        }
    }
}