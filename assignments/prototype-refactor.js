class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }
    greet() {
        return `Name - ${this.name} Age - ${this.age}`;
    }
    eatEdibles(edible) {
        this.stomach.push(edible);
    }
    poop() {
        this.stomach.length = 0;
    }
}

class Car {
    constructor(name, make) {
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.isCrashed = false;
    }
    drive(distance) {
        if (!this.isCrashed) {
            this.odometer += distance;
        }
        else {
            return this.odometer;
        }
    }
    crash() {
        this.isCrashed = true;
    }
    repair() {
        this.isCrashed = false;
    }
}


class Baby extends Person {
    play() {
        return `This is how a baby plays`;;
    }
}


class Employee{
    constructor(data){
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.position = data.position;
        this.office = data.office;
        this.isManager = false;
    }

    view(){
        return `Employee with ID - ${this.id} is named ${this.firstName} ${this.lastName}`
    }

    promote(){
        this.isManager = true;
    }

    switchOffices(office){
        this.office = office;
    }
    
}


//Stretch

class GameObject {
    constructor(props) {
        this.createdAt = props.createdAt;
        this.name = props.name;
        this.dimensions = props.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}


class CharacterStats extends GameObject {
    constructor(props) {
        this.healthPoints = props.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}


class Humanoid extends CharacterStats{
    constructor(props){
        this.team = props.team;
        this.weapons = props.weapons;
        this.language = props.language;
    }

    greet(){
        return `${this.name} offers a greeting in ${this.language}`
    } 
}
  