using System;
using System.Collections.Generic;

public class Program {
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
		if(node.left == null && node.right == null)
		{
			results.Add(sum);
		  return;
    }
		var branchSum = sum + node.value;
		SumBranch(node.left, branchSum, results);
		SumBranch(node.right, branchSum, results);
		return;
	}

	public static List<int> BranchSums(BinaryTree root) {
		var results = new List<int>();
		SumBranch(root, 0, results);
		return results;
	}
}
