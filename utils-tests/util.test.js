const utils = require("../utils/utils");

describe("util function tests", () => {
    describe("get string", () => {
        test("should only contain alphanumeric or !@#$%^&*()[] and default length is 10 e.g abh!$ when random is passed as an argument", () => {
            const string = utils.getString("random");
            const regex = /^[a-z\d\-.!@#$^&*()%[\]]{10}$/i;
            expect(string).toEqual(expect.stringMatching(regex));
        });
        test("should return the same string which is passed as an argument to this function", () => {
            const expectedString = utils.getString("random");
            const actualString = utils.getString(expectedString);
            expect(actualString).toEqual(expectedString);
        });
    })
});