using System;
using System.Collections.Generic;
public class LeftViewPrinterQueueSolution : ILeftViewPrinter
{
    private Node root;
    private Queue<Node> queue;

    public Node Root { get => root; set => root = value; }
    public LeftViewPrinterQueueSolution(Node root)
    {
        Root = root;
        queue = new Queue<Node>();
        queue.Enqueue(Root);
    }

    public void Print()
    {
        while (queue.Count > 0)
        {
            var items = queue.Count;
            for (int i = 0; i < items; i++)
            {
                var node = queue.Dequeue();
                if (i == 0)
                {
                    Console.Write(node.data);
                    Console.Write("\n");
                }
                if (node.left != null)
                    queue.Enqueue(node.left);
                if (node.right != null)
                    queue.Enqueue(node.right);
            }
        }
    }
}