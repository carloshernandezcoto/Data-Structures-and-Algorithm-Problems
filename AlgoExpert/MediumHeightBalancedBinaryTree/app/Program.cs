using System;
using System.Linq;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Running program...");
            var x = new ProgramTest();
            x.TestCase1();
        }
    }

    public class BinaryTree
    {
        public int value;
        public BinaryTree left = null;
        public BinaryTree right = null;

        public BinaryTree(int value)
        {
            this.value = value;
        }
    }

    public class ProgramTest
    {
        public void TestCase1()
        {
            BinaryTree root = new BinaryTree(1);
            root = new BinaryTree(1);
            root.left = new BinaryTree(2);
            root.right = new BinaryTree(3);
            root.left.left = new BinaryTree(4);
            root.left.right = new BinaryTree(5);
            root.right.right = new BinaryTree(6);
            root.left.right.left = new BinaryTree(7);
            root.left.right.right = new BinaryTree(8);
            var actual = HeightBalancedBinaryTree(root);
        }


        public bool HeightBalancedBinaryTree(BinaryTree tree)
        {
            // Write your code here.
            var result = HeightOfTree(tree);
            if (result == -1) return false;
            return true;

        }

        public int HeightOfTree(BinaryTree tree)
        {
            if (tree == null)
                return 0;
            int leftHeight = HeightOfTree(tree.left);
            int rightHeight = HeightOfTree(tree.right);
            if (Math.Abs(leftHeight - rightHeight) > 1)
                return -1;
            return 1 + Max(leftHeight, rightHeight);
        }

        public int Max(int a, int b)
        {
            return a >= b ? a : b;
        }
    }
}
