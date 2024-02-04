"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, family, email) {
        this.name = name;
        this.family = family;
        this.email = email;
    }
    Person.prototype.GetInfo = function () {
        return ("".concat(this.name, " - ").concat(this.family, " - ").concat(this.email));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    /**
     *
     */
    function Student(name, family) {
        return _super.call(this, name, family, "") || this;
    }
    return Student;
}(Person));
var person = new Person("Kamran", "Tajerbashi", "KamranTajerbashi@gmail.com"); // OK, because we're assigning
console.log("Result Model : ", person);
