//Time: O(n log(n))
//Space: O(n)

function taskAssignment(k, tasks) {
  // Write your code here.
  let indexes = new Map();
  let taskPairs = [];
  let length = tasks.length;
  for (let i = 0; i < length; i++) {
    if (!indexes.has(tasks[i])) indexes.set(tasks[i], [i]);
    else indexes.get(tasks[i]).push(i);
  }

  tasks.sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    let task1 = indexes.get(tasks[i]).shift();
    let task2 = indexes.get(tasks[length - 1 - i]).shift();
    taskPairs.push([task1, task2]);
  }
  return taskPairs;
}

// Do not edit the line below.
exports.taskAssignment = taskAssignment;
