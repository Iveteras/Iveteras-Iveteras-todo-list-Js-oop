class Task{

    constructor(emoje, title, description, deadline, type, color){
        this._emoje = emoje;
        this._title = title;
        this._description = description;   
        this._deadline = deadline;
        this._type = type;
        this._color = color;
    }

    get emoje(){
        return this._emoje;
    }

    get title(){
        return this._title;
    }

    get description(){
        return this._description;
    }

    get deadline(){
        return this._deadline;
    }

    get type(){
        return this._type;
    }

    get color(){
        return this._color;
    }
}