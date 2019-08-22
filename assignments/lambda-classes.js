// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.locations;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

