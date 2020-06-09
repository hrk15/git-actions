const Chance = require("chance");
const chance = new Chance();

const utilMethods = {
    getString: (value, opt = {}) => {
        const { length = 10 } = opt;
        return value.toLowerCase() === "random " ? chance.string({ length }) : value;
    }
};

module.exports = utilMethods;