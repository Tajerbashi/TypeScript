"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.GetName = function () { return this.name; };
    return Person;
}());
var person = new Person("Tajer"); // OK, because we're assigning
person.GetName();
