using System.Collections.Generic;
public class TestLinkedList : LinkedList
{
    public TestLinkedList(int value) : base(value)
    {
    }

    public void addMany(int[] values)
    {
        LinkedList current = this;
        while (current.Next != null)
        {
            current = current.Next;
        }
        foreach (int value in values)
        {
            current.Next = new LinkedList(value);
            current = current.Next;
        }
    }

    public List<int> getNodesInArray()
    {
        List<int> nodes = new List<int>();
        LinkedList current = this;
        while (current != null)
        {
            nodes.Add(current.Value);
            current = current.Next;
        }
        return nodes;
    }
}