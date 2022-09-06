const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "David";
            const id = 4;
            const email = "David@gmail.com";
            const officeNumber = 3

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getOfficeNumber()).toEqual(officeNumber);
            expect(obj.getRole()).toEqual("Manager");
        })
    })
})