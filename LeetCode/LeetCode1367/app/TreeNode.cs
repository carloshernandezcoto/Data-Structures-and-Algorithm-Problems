using System;
using System.Collections.Generic;

//Definition for a binary tree node.
public class TreeNode
{
    public int val;
    public TreeNode left;
    public TreeNode right;
    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    public TreeNode(List<int?> values) : this(values, 0) { }

    TreeNode(List<int?> values, int index)
    {
        Load(this, values, index);
    }

    void Load(TreeNode tree, List<int?> values, int index)
    {
        this.val = values[index] ?? 0;
        if (index * 2 + 1 < values.Count && values[index * 2 + 1] != null)
        {
            this.left = new TreeNode(values, index * 2 + 1);
        }
        if (index * 2 + 2 < values.Count && values[index * 2 + 2] != null)
        {
            if (values[index + 1] != null)
                this.right = new TreeNode(values, index * 2 + 2);
            else
                this.right = new TreeNode(values, index * 2 + 1);
        }
    }
}
