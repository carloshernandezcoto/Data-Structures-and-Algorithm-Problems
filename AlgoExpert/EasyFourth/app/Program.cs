using System;
using System.Linq;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var runProgram = new ProgramTest();
            runProgram.TestCase1();
        }
    }

    public class ProgramTest {

	public class TestBinaryTree : Program1.BinaryTree {
		public TestBinaryTree(int value) : base(value) {
		}

		public TestBinaryTree Insert(List<int> values) {
			return Insert(values, 0);
		}

		public TestBinaryTree Insert(List<int> values, int i) {
			if (i >= values.Count) return null;

			List<TestBinaryTree> queue = new List<TestBinaryTree>();
			queue.Add(this);
			while (queue.Count > 0) {
				TestBinaryTree current = queue[0];
				queue.RemoveAt(0);
				if (current.left == null) {
					current.left = new TestBinaryTree(values[i]);
					break;
				}
				queue.Add((TestBinaryTree) current.left);
				if (current.right == null) {
					current.right = new TestBinaryTree(values[i]);
					break;
				}
				queue.Add((TestBinaryTree) current.right);
			}
			Insert(values, i + 1);
			return this;
		}
	}

	//[Test]
	public void TestCase1() {
		TestBinaryTree tree = new TestBinaryTree(1).Insert(new List<int>(){
			2, 3, 4, 5, 6, 7, 8, 9, 10
		});
		List<int> expected = new List<int>(){
			15, 16, 18, 10, 11
		};
        Program1.BranchSums(tree);
		//Utils.AssertTrue(Program1.BranchSums(tree).SequenceEqual(expected));
	}
}

public class Program1 {
	// This is the class of the input root. Do not edit it.
	public class BinaryTree {
		public int value;
		public BinaryTree left;
		public BinaryTree right;

		public BinaryTree(int value) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}
	
	public static void SumBranch(BinaryTree node, int sum, List<int> results)
	{
		var branchSum = sum + node.value;
		if(node.left == null && node.right == null)
		{
			results.Add(branchSum);
		  return;
    }
		if(node.left != null) SumBranch(node.left, branchSum, results);
		if(node.right != null) SumBranch(node.right, branchSum, results);
	}

	public static List<int> BranchSums(BinaryTree root) {
		var results = new List<int>();
		SumBranch(root, 0, results);
		return results;
	}
}

}
