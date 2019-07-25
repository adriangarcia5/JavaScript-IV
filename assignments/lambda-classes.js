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
        return `${student} receives a perfect score on ${subject}`;
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
        return `${this.name} has begun the sprint challenge on ${subject}.`;
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

const solis = new Instructor ({
    name: "Solis",
    location: "Houston",
    age: 27,
    gender: "male",
    favLanguage: "Pig Latin",
    specialty: "Web Development",
    catchPhrase:"iyay ikelay otay odecay"
})

const frank = new Instructor ({
    name: "Frank",
    location: "College Station",
    age: 28,
    gender: "male",
    favLanguage: "C++",
    specialty: "Mobile Apps",
    catchPhrase:"I'm Frank the coding Tank"
})

const adrian = new Student ({
    name: "Adrian",
    location: "Austin",
    age: 26,
    gender: "male",
    previousBackground: "University Student",
    className: "Web22",
    favSubjects: ["Git", "JavaScript"]
})

const joey = new Student ({
    name: "Joey",
    location: "San Antonio",
    age: 24,
    gender: "male",
    previousBackground: "Dare Devil",
    className: "Web23",
    favSubjects: ["LESS", "Preprocessing"]
})

const samira = new ProjectManager ({
    name: "Samira",
    location: "Brownsville",
    age: 25,
    gender: "female",
    favLanguage: "Unity",
    specialty: "Game Development",
    catchPhrase:"I make the games, but I don't play them.",
    gradClassName: "web14",
    favInstructor: "Carlos"
})

const mariana = new ProjectManager ({
    name: "Mariana",
    location: "San Antonio",
    age: 29,
    gender: "female",
    favLanguage: "Dynamo",
    specialty: "Visual Programming/Design",
    catchPhrase:"I make the games, but I don't play them.",
    gradClassName: "web10",
    favInstructor: "Andres"
})

console.log(solis.name);
console.log(solis.speak());

console.log(frank.specialty);
console.log(frank.favLanguage);
console.log(frank.catchPhrase);
console.log(solis.demo("Git Hub and Git Bash"));
console.log(solis.grade("Joey", "Git Hub and Git Bash"));

console.log(adrian.previousBackground);
console.log(adrian.className);
console.log(adrian.favSubjects);
console.log(joey.listsSubjects());
console.log(joey.PRAssignment("JavaScript-IV"));
console.log(joey.sprintChallenge("Less and Preprocessors"));

console.log(samira.gradClassName);
console.log(samira.favInstructor);
console.log(mariana.standUp("Web 22 channel"));
console.log(mariana.debugsCode("Joey", "Responsive Design"));
