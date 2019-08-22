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


class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.cathPhrase = props.cathPhrase;
    }

    demo(subject){
        return `Today we are learning about ${subject}`
    }

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }

    modifyStudentPoints(student){
        student.age += (Math.random() * (Math.random() > 0.5 ? 1 : -1) * 10);
    }
}


class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackgound;
        this.className = props.className;
        this.favsubjects = props.favSubjects;
        this.grade = props.grade;
        this.isGraduated= false;
    }

    listSubjects(){
        this.favsubjects.map(subject => console.log(subject));
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun  sprint challenge for ${subject}`);
    }

    graduate(){
        if(this.grade >= 70){
            this.isGraduated = true;
            console.log(`${this.name} has graduated!`);
        }
    }
}


class ProjectMananger extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }

    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

