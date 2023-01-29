// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

//const program = require('./program');
//const chai = require('chai');

  // This is an input class. Do not edit.
  class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
class MyAncestralTree extends AncestralTree {
    constructor(name) {
      super(name);
    }
  
    addAsAncestor(descendants) {
      for (const descendant of descendants) {
        descendant.ancestor = this;
      }
    }
  }
  
  function getTrees() {
    const trees = {};
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    for (const letter of ALPHABET) {
      trees[letter] = new MyAncestralTree(letter);
    }
    return trees;
  }
  
  function it() {
    const trees = getTrees();
    trees['A'].addAsAncestor([trees['B'], trees['C']]);
    trees['B'].addAsAncestor([trees['D'], trees['E']]);
    trees['D'].addAsAncestor([trees['H'], trees['I']]);
    trees['C'].addAsAncestor([trees['F'], trees['G']]);
  
      getYoungestCommonAncestor(trees.A, trees.E, trees.I);
    //const yca = program.getYoungestCommonAncestor(trees.A, trees.E, trees.I);
    //chai.expect(yca).to.deep.equal(trees.B);
  };
  
  

  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let ancestors = [];
      let currentNode = descendantOne;
      do
          {
              ancestors.push(currentNode.name);
              currentNode = currentNode.ancestor;
          } while(currentNode != null)
      
      currentNode = descendantTwo;
      do
          {
              if(ancestors.includes(currentNode.name))
                   return currentNode;
              currentNode = currentNode.ancestor;
          } while (currentNode.ancestor != null)
      
      return topAncestor;
  }
  
  // Do not edit the lines below.
  exports.AncestralTree = AncestralTree;
  exports.getYoungestCommonAncestor = getYoungestCommonAncestor;