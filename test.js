const assert = require('assert');
const isCircuitClosed = require('./src/index.js');

let area = [[0,0,0,1,1,0,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,1,0,1,0,0],
            [0,0,0,0,0,0,0,0]];


it('should return false if circuit is\'nt closed', () => {
    assert.equal(isCircuitClosed(area), false);
});

it('should return true if circuit closed', () => {
    area[2][4] = 1;

    assert.equal(isCircuitClosed(area), true);
});

it('should return false if only one link in circuit', () => {
    area = [[0,0,0],
            [0,1,0],
            [0,0,0]];

    assert.equal(isCircuitClosed(area), false);
});
