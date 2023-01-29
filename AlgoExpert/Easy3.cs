using System;

public class Program {
	public static int FindClosestValueInBst(BST tree, int target) {
		BST currentNode = tree;
		int bestCandidate = tree.value;
		int difference = target - tree.value;
		if (difference == 0)
			return tree.value;
		while((difference > 0 && currentNode.right != null) || (difference < 0 && currentNode.left != null))
		{
		if(difference == 0)	return bestCandidate;
		if(difference > 0)
		{
			bestCandidate = (Math.Abs(target - currentNode.right.value) < Math.Abs(target - bestCandidate)) ? currentNode.right.value : bestCandidate;
			difference = target - currentNode.right.value;
			currentNode = currentNode.right;
		}
		else
		{
			if(difference < 0)
			{
				bestCandidate = (Math.Abs(target - currentNode.left.value) < Math.Abs(target - bestCandidate)) ? currentNode.left.value : bestCandidate;
				difference = target - currentNode.left.value;
				currentNode = currentNode.left;
			}
		}
		}
		return bestCandidate;
	}

	public class BST {
		public int value;
		public BST left;
		public BST right;

		public BST(int value) {
			this.value = value;
		}
	}
}
