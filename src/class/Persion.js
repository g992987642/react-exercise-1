class Person {
  constructor(name, age, headPortrait, aboutMe, educations) {
    this.name = name;
    this.age = age;
    this.headPortrait = headPortrait;
    this.aboutMe = aboutMe;
    this.educations = educations;
  }

  introduce() {
    return `my name is ${this.name} ${this.age}yo and this is my resume/cv`;
  }
}

export default Person;
