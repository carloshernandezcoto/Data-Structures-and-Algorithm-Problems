// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

// const program = require('./program');
// const chai = require('chai');

// it('Test Case #1', function () {
  // chai.expect(program.minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])).to.deep.equal(4);
// });

//Time: O(N). This solutions checks whether the array size is reached everytime 'reach' is calculated,
//			  in case a large number is way ahead of the last index and it contains a number that can
//            jump to the end, avoiding having to go through the remaining indexes if that's the case.

//Space: O(1)
function minNumberOfJumps(array) {
  	const size = array.length;
	if(size <= 1) return 0;
  	let steps = 1;
  	let jumps = 0;
  	let reach = 0;

	for(let i = 0; i < size; i++)
		{
			reach = max(reach, i + array[i])
			if(reach >= size - 1)
			{
				jumps++;
				return jumps;
			}
			steps--;
			if(steps == 0)
			{
				jumps++;
				steps = reach - i;
			}
		}
	return -1; //unreachable!
}

function max(integer1, integer2)
{
	if(integer1 > integer2) return integer1;
	return integer2;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;