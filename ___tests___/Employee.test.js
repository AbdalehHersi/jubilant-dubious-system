const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "David";
            const id = 3;
            const email = "David@gmail.com";

            const obj = new Employee(name, id, email);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getRole()).toEqual("Employee");
        })
    })
})