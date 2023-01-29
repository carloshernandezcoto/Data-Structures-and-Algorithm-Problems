// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

// const program = require('./program');
// const chai = require('chai');

// it('Test Case #1', function () {
  // chai.expect(program.minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])).to.deep.equal(4);
// });


function minNumberOfJumps(array) {
  const size = array.length;
	array[size - 1] = 0;
	
	for(let i = size - 2; i >= 0; i--)
		{
			array[i] = 1 + minJumps(array, array[i], i);
		}
	return array[0];
}

function minJumps(array, distance, index)
{
	const size = array.length;
	let min = array[index + 1];
	for(let i = index + 2; i <= minIndex(index + distance, size - 1) ; i++)
		{
			if(min == 0) return min;
			if(array[i] < min) min = array[i];
		}
	return min;
}

function minIndex(index1, index2)
{
	if(index1 < index2) return index1;
	return index2;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;