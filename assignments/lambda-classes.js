// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
      this.gender = attributes.gender;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor (instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student}receives a perfect score on ${subject}`;
    }

}

class Student extends Instructor{
    constructor (studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Student{
    constructor (managerAttributes){
        super(managerAttributes);
        this.gradClassName = managerAttributes.gradClassName;
        this.favInstructor = managerAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`;
    }
}