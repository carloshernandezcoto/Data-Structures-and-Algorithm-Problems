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
            var x = new ProgramTest();
            x.TestCase1();
        }
    }

    public class ProgramTest
    {
        //[Test]
        public void TestCase1()
        {
            var array = new List<int> {
            1, 2, 5, 7, 10, 13, 14, 15, 22
        };
            var tree = Program1.MinHeightBst(array);

            //Utils.AssertTrue(validateBst(tree));
            //Utils.AssertEquals(4, getTreeHeight(tree));

            var inOrder = inOrderTraverse(tree, new List<int>
            {
            });
            var expected = new List<int> {
            1, 2, 5, 7, 10, 13, 14, 15, 22
        };
            //Utils.AssertTrue(Enumerable.SequenceEqual(inOrder, expected));
        }

        static bool validateBst(Program1.BST tree)
        {
            return validateBst(tree, Int32.MinValue, Int32.MaxValue);
        }

        static bool validateBst(Program1.BST tree, int minValue, int maxValue)
        {
            if (tree.value < minValue || tree.value >= maxValue)
            {
                return false;
            }
            if (tree.left != null && !validateBst(tree.left, minValue, tree.value))
            {
                return false;
            }
            if (tree.right != null && !validateBst(tree.right, tree.value, maxValue))
            {
                return false;
            }
            return true;
        }

        static List<int> inOrderTraverse(Program1.BST tree, List<int> array)
        {
            if (tree.left != null)
            {
                inOrderTraverse(tree.left, array);
            }
            array.Add(tree.value);
            if (tree.right != null)
            {
                inOrderTraverse(tree.right, array);
            }
            return array;
        }

        static int getTreeHeight(Program1.BST tree)
        {
            return getTreeHeight(tree, 0);
        }

        static int getTreeHeight(Program1.BST tree, int height)
        {
            if (tree == null) return height;
            int leftTreeHeight = getTreeHeight(tree.left, height + 1);
            int rightTreeHeight = getTreeHeight(tree.right, height + 1);
            return Math.Max(leftTreeHeight, rightTreeHeight);
        }
    }

    public class Program1
    {
        public static BST root;
        public static BST MinHeightBst(List<int> array)
        {
            if (array.Count == 0)
                return null;
            else
            {
                return RecursiveInsertion(null, ref array, 0, array.Count - 1);
            }
        }

        public static BST RecursiveInsertion(BST node, ref List<int> array, int min, int max)
        {
            int mid = (max + min) / 2;
            if (node == null)
            {
                root = new BST(array[mid]);
                if (max == 0)
                    return root;
                if (max == 1)
                {
                    root.insert(array[max]);
                    return root;
                }
                else
                {
                    RecursiveInsertion(root, ref array, 0, mid - 1);
                    RecursiveInsertion(root, ref array, mid + 1, max);
                    return root;
                }
            }
            switch (max - min)
            {
                case 0:
                    node.insert(array[mid]);
                    return root;
                case 1:
                    node.insert(array[min]);
                    node.insert(array[max]);
                    return root;
                default:
                    node.insert(array[mid]);
                    var insertedNode = array[mid] < node.value ? node.left : node.right;
                    RecursiveInsertion(insertedNode, ref array, min, mid - 1);
                    RecursiveInsertion(insertedNode, ref array, mid + 1, max);
                    return root;
            }
        }

        public class BST
        {
            public int value;
            public BST left;
            public BST right;

            public BST(int value)
            {
                this.value = value;
                left = null;
                right = null;
            }

            public void insert(int value)
            {
                if (value < this.value)
                {
                    if (left == null)
                    {
                        left = new BST(value);
                    }
                    else
                    {
                        left.insert(value);
                    }
                }
                else
                {
                    if (right == null)
                    {
                        right = new BST(value);
                    }
                    else
                    {
                        right.insert(value);
                    }
                }
            }
        }
    }
}
