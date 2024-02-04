export {}
interface IPerson {
}
class Person {

    public constructor(private name : string) 
    {
    }
    public GetName() : string { return this.name; }
}

const person = new Person("Tajer"); // OK, because we're assigning

person.GetName();
