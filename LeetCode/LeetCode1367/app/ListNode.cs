// Definition for singly-linked list.
using System;
using System.Collections.Generic;
using System.Linq;
public class ListNode
{
    public int val;
    public ListNode next;
    public ListNode(int val = 0, ListNode next = null)
    {
        this.val = val;
        this.next = next;
    }

    public ListNode(List<int> input)
    {

        this.val = input[0];
        this.next = CreateListFromArray(input.Skip(1).Take(input.Count - 1).ToList());
    }

    private ListNode CreateListFromArray(List<int> input)
    {
        if (input.Count == 0) return null;
        var head = new ListNode(input[0], null);
        head.next = CreateListFromArray(input.Skip(1).Take(input.Count - 1).ToList());
        return head;
    }
}
