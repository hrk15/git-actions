const Chance = require("chance");
const chance = new Chance();

const utilMethods = {
    getString: (value, opt = {}) => {
        const { length = 10 } = opt;
        if (value.toLowerCase() === "random") return chance.string({ length })
        else return value;
    }
};

module.exports = utilMethods;