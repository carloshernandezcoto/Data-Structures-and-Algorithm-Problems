using System;

namespace app
{
    internal class NodeBuilder
    {
        public NodeBuilder()
        {


        }

        public Node BuildTestNode()
        {
            //Test 1
            // Node root = new Node(5);
            // root.left = new Node(10);
            // root.right = new Node(15);
            // root.left.left = new Node(20);
            // root.left.right = new Node(25);
            // root.right.left = new Node(30);
            // root.right.right = new Node(35);
            // root.left.right.right = new Node(45);

            //Test 2
            Node root = new Node(2);
            root.left = new Node(7);
            root.right = new Node(5);
            root.left.left = new Node(2);
            root.left.right = new Node(6);
            root.right.right = new Node(9);
            root.left.right.left = new Node(5);
            root.left.right.right = new Node(11);
            root.right.right.left = new Node(4);
            root.left.right.right.right = new Node(22);

            return root;
        }
    }
}