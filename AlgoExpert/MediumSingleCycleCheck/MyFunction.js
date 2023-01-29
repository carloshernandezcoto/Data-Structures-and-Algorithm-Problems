        // // const program = require('./program');
        // const chai = require('chai');

        // it('Test Case #1', function () {
        //     //chai.expect(program.hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
        //     chai.expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
        // });

function hasSingleCycle(array) {
    const length = array.length;
    var currentIndex = 0;
    for (let i = 0; i < length; i++) {
        if (array[currentIndex] === 0) return false;
        let previousIndexValue = array[currentIndex];
        array[currentIndex] = 0;
        currentIndex = CalculateNextIndex(currentIndex, length, previousIndexValue);
    }
    return (currentIndex === 0);
}

function CalculateNextIndex(index, length, displacement) {
    switch (true) {
        case (displacement === 0):
            return index;
            break;
        case (displacement > 0): {
            let overflow = displacement - (length - 1 - index);
            if (overflow <= 0)
                return (index + displacement);
            else
                return CalculateNextIndex(0, length, overflow - 1);
        } break;
        case (displacement < 0): {
            let overflow = index + displacement;
            if (overflow >= 0)
                return (index + displacement);
            else
                return CalculateNextIndex(length - 1, length, overflow + 1);
        } break;
        default:
            console.log('Something went really bad...');
    }
}

// Do not edit the line below.
//exports.hasSingleCycle = hasSingleCycle;