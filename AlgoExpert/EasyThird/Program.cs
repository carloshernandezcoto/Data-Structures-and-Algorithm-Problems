/*using System;

namespace EasyThird
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}*/

using System;
// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

namespace EasyThird
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            //[Test]
            var root = new MyProgram.BST(10);
            root.left = new MyProgram.BST(5);
            root.left.left = new MyProgram.BST(2);
            root.left.left.left = new MyProgram.BST(1);
            root.left.right = new MyProgram.BST(5);
            root.right = new MyProgram.BST(15);
            root.right.left = new MyProgram.BST(13);
            root.right.left.right = new MyProgram.BST(14);
            root.right.right = new MyProgram.BST(22);

            var expected = 13;
            var actual = MyProgram.FindClosestValueInBst(root, 12);
            //Utils.AssertEquals(expected, actual);
    }
}
public class MyProgram {
	public static int FindClosestValueInBst(BST tree, int target) {
		BST currentNode = tree;
		int bestCandidate = tree.value;
		int difference = target - tree.value;
		if (difference == 0)
			return tree.value;
		while((difference > 0 && currentNode.right != null) || (difference < 0 && currentNode.left != null))
		{
		if(difference > 0)
		{
			bestCandidate = (Math.Abs(target - currentNode.right.value) < difference) ? currentNode.right.value : currentNode.value;
			difference = target - currentNode.right.value;
			currentNode = currentNode.right;
		}
		else
		{
			if(difference < 0)
			{
				bestCandidate = (Math.Abs(target - currentNode.left.value) < Math.Abs(difference)) ? currentNode.left.value : currentNode.value;
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
}
