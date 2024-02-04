export { }
interface IPerson {
    GetInfo: () => string
}
class Person implements IPerson {

    public constructor(
        protected readonly name: string,
        protected readonly family: string,
        protected readonly email: string) { }
    public GetInfo(): string {
        return (`${this.name} - ${this.family} - ${this.email}`);
    }
}
class Student extends Person {
    /**
     *
     */
    public constructor(name:string,family:string) {
        super(name,family,"");
    }
}
const person = new Person("Kamran", "Tajerbashi", "KamranTajerbashi@gmail.com"); // OK, because we're assigning
const student = new Student("Kaihan","Yousofzai");
console.log("Result Model Person : ", person);
console.log("Result Model Student : ", student);