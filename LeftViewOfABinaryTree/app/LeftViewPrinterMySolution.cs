using System;
using System.Collections.Generic;
public class LeftViewPrinterMySolution : ILeftViewPrinter
{
    //private List<LeveledNode> leveledNodeList;
    private List<List<NumberedNode>> allLevelsList;
    private Node root;

    public Node Root { get => root; set => root = value; }
    public LeftViewPrinterMySolution(Node root)
    {
        Root = root;
    }

    public void Print()
    {
        var firstNumberedNode = new NumberedNode { node = Root, n = 1 };
        var numberedNodeList = new List<NumberedNode>();
        numberedNodeList.Add(firstNumberedNode);
        allLevelsList = new List<List<NumberedNode>>();
        allLevelsList.Add(numberedNodeList);
        AddChildrenToList(numberedNodeList);
        foreach (List<NumberedNode> list in allLevelsList)
        {
            if (list != null)
            {
                Console.Write(list[0].node.data);
                Console.Write("\n");
            }
        }
    }

    private void AddChildrenToList(List<NumberedNode> numberedNodeList)
    {
        int value = 0;
        var nextList = new List<NumberedNode>();
        foreach (NumberedNode numberedNode in numberedNodeList)
        {
            if (numberedNode.node.left != null)
            {
                value = value + 1;
                var newNumberedNode = new NumberedNode { node = numberedNode.node.left, n = value };
                nextList.Add(newNumberedNode);
            }
            if (numberedNode.node.right != null)
            {
                value = value + 1;
                var newNumberedNode = new NumberedNode { node = numberedNode.node.right, n = value };
                nextList.Add(newNumberedNode);
            }
        }
        if (nextList.Count > 0)
        {
            allLevelsList.Add(nextList);
            AddChildrenToList(nextList);
        }
    }
}