const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Tests", () => {
        it("should return correct constructors", () => {
            const name = "David";
            const id = 4;
            const email = "David@gmail.com";
            const school = "Oxford"

            const obj = new Intern(name, id, email, school);

            expect(obj.getName()).toEqual(name);
            expect(obj.getId()).toEqual(id);
            expect(obj.getEmail()).toEqual(email);
            expect(obj.getSchool()).toEqual(school);
            expect(obj.getRole()).toEqual("Intern");
        })
    })
})