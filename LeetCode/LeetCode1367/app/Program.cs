using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting P1...");

            var tester = new Tester();
            var solution = new Solution();
            //var head = solution.CreateListFromArray(listComponents);
            var head = tester.Head;
            var root = tester.Root;
            //var result = solution.IsSubPath(head, root);

            Console.ReadLine();
        }

    }



    public class Solution
    {
        public bool IsSubPath(ListNode head, TreeNode root)
        {
            if (head != null && root != null && head.next == null && head.val == root.val) return true;
            if (root == null) return false;
            if (head.val == root.val)
            {
                return IsSubPath(head.next, root.left) || IsSubPath(head.next, root.right);
            }
            return IsSubPath(head, root.left) || IsSubPath(head, root.right);
        }
    }
}
