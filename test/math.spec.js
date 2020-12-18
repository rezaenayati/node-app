const { sum } = require("../src/math");
const { expect } = require('chai');


describe('#sum', () => {
    it('should sum 2 and 4', async () => {
        expect(sum(2, 4)).to.be.equal(6);
    });
});
