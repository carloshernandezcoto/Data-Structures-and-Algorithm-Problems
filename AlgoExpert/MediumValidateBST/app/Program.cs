using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var x = new ProgramTest();
            x.TestCase1();
        }
    }

    public class ProgramTest {
	//[Test]
	public void TestCase1() {
		var root = new Program1.BST(10);
		root.left = new Program1.BST(5);
		root.left.left = new Program1.BST(2);
		root.left.left.left = new Program1.BST(1);
		root.left.right = new Program1.BST(5-2);
		root.right = new Program1.BST(15);
		root.right.right = new Program1.BST(22);

		//Utils.AssertFalse(Program1.ValidateBst(root));
        Program1.ValidateBst(root);
	}
}

public class Program1 {
	public static bool ValidateBst(BST tree) {
        var returnedValue = RecursiveTraversal(tree);
		return returnedValue;
	}
	
	public static bool RecursiveTraversal(BST node)
	{
		if(node == null)
			return true;
		else
		{
			if(IsValidBSTNode(node))
				return RecursiveTraversal(node.left) && RecursiveTraversal(node.right);
			else
				return false;
		}
	}
	
	public static bool IsValidBSTNode(BST node)
	{
		bool isLeftOk = node.left != null ? node.left.value < node.value : true;
		bool isRightOk = node.right != null ? node.right.value >= node.value : true;
		
		return isLeftOk && isRightOk;
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
