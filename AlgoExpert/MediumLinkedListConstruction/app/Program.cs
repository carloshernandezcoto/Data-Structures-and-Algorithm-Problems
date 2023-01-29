using System;
using System.Collections.Generic;
using Xunit;

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
	private List<int> getNodeValuesHeadToTail(Program1.DoublyLinkedList linkedList) {
		List<int> values = new List<int>();
		Program1.Node node = linkedList.Head;
		while (node != null) {
			values.Add(node.Value);
			node = node.Next;
		}
		return values;
	}

	private List<int> getNodeValuesTailToHead(Program1.DoublyLinkedList linkedList) {
		List<int> values = new List<int>();
		Program1.Node node = linkedList.Tail;
		while (node != null) {
			values.Add(node.Value);
			node = node.Prev;
		}
		return values;
	}

	private void bindNodes(Program1.Node nodeOne, Program1.Node nodeTwo) {
		nodeOne.Next = nodeTwo;
		nodeTwo.Prev = nodeOne;
	}

	private bool compare(List<int> array1, int[] array2) {
		if (array1.Count != array2.Length) {
			return false;
		}
		for (int i = 0; i < array1.Count; i++) {
			if (array1[i] != array2[i]) {
				return false;
			}
		}
		return true;
	}

	[Fact]
	public void TestCase1() {
		Program1.DoublyLinkedList linkedList = new Program1.DoublyLinkedList();
		Program1.Node one = new Program1.Node(1);
		Program1.Node two = new Program1.Node(2);
		Program1.Node three = new Program1.Node(3);
		Program1.Node three2 = new Program1.Node(3);
		Program1.Node three3 = new Program1.Node(3);
		Program1.Node four = new Program1.Node(4);
		Program1.Node five = new Program1.Node(5);
		Program1.Node six = new Program1.Node(6);
		bindNodes(one, two);
		bindNodes(two, three);
		bindNodes(three, four);
		bindNodes(four, five);
		linkedList.Head = one;
		linkedList.Tail = five;

		linkedList.SetHead(four);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 2, 3, 5}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {5, 3, 2, 1, 4}));

		linkedList.SetTail(six);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 2, 3, 5, 6}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {6, 5, 3, 2, 1, 4}));

		linkedList.InsertBefore(six, three);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 2, 5, 3, 6}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {6, 3, 5, 2, 1, 4}));

		linkedList.InsertAfter(six, three2);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 2, 5, 3, 6, 3}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {3, 6, 3, 5, 2, 1, 4}));

		linkedList.InsertAtPosition(1, three3);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {3, 4, 1, 2, 5, 3, 6, 3}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {3, 6, 3, 5, 2, 1, 4, 3}));

		linkedList.RemoveNodesWithValue(3);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 2, 5, 6}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {6, 5, 2, 1, 4}));

		linkedList.Remove(two);
		Assert.True(compare(getNodeValuesHeadToTail(linkedList), new int[] {4, 1, 5, 6}));
		Assert.True(compare(getNodeValuesTailToHead(linkedList), new int[] {6, 5, 1, 4}));

		Assert.True(linkedList.ContainsNodeWithValue(5));
	}
}

public class Program1 {
	public class DoublyLinkedList {
		public Node Head;
		public Node Tail;

		public void SetHead(Node node) {
			if(node == Head)
				return;
			if(Head == null) 
			{
				Head = node;
				Tail = node;
				return;
			}
			Node current = Head.Next;
			while(current != null)
			{
				//if(current.Value == node.Value)
				if(current == node)
				{
					if(current == Tail)
					{
						Tail = current.Prev;
						Tail.Next = null;
					}
					current.Prev.Next = current.Next;
					if(current.Next != null )current.Next.Prev = current.Prev;
					Head.Prev = current;
					current.Next = Head;
					current.Prev = null;
					Head = current;
					return;
				}
				current = current.Next;
			}
			Head.Prev = node;
			node.Next = Head;
			node.Prev = null;
			Head = node;
			return;
		}

		public void SetTail(Node node) {
			if(node == Tail)
				return;
			if(Tail == null) 
			{
				Tail = node;
				return;
			}
			Node current = Head;
			while(current.Next != null)
			{
				//if(current.Value == node.Value)
				if(current == node)
				{
					if(current == Head)
					{
						Head = current.Next;
						Head.Prev = null;
					}
					if(current.Prev != null) current.Prev.Next = current.Next;
					current.Next.Prev = current.Prev;
					Tail.Next = current;
					current.Prev = Tail;
					current.Next = null;
					Tail = current;
					return;
				}
				current = current.Next;
			}
			Tail.Next = node;
			node.Prev = Tail;
			node.Next = null;
			Tail = node;
			return;
		}

		public void InsertBefore(Node node, Node nodeToInsert) {
			Node nodeToBeMoved = new Node(-1);
			Node current = Head;
			nodeToBeMoved = null;
			while(current != null) //Find the existing node if it's there
			{
				//if(current.Value == nodeToInsert.Value)	nodeToBeMoved = current;
				if(current == nodeToInsert)	nodeToBeMoved = current;
				current = current.Next;
			}
			current = Head;
			while(current != null)
			{
				//if(current.Value == node.Value)
				if(current.Value == node.Value)
				{
					if(nodeToBeMoved != null && nodeToBeMoved.Next != current)
					{
						if(nodeToBeMoved == Head) 
						{
							Head = nodeToBeMoved.Next;
							Head.Prev = null;
						}
						if(nodeToBeMoved == Tail)
						{
							Tail = nodeToBeMoved.Prev;
							Tail.Next = null;
						}
						if(nodeToBeMoved.Prev != null) nodeToBeMoved.Prev.Next = nodeToBeMoved.Next;
						if(nodeToBeMoved.Next != null) nodeToBeMoved.Next.Prev = nodeToBeMoved.Prev;
						if(current.Prev != null) current.Prev.Next = nodeToBeMoved;
						nodeToBeMoved.Prev = current.Prev;
						nodeToBeMoved.Next = current;
						current.Prev = nodeToBeMoved;
						return; 
					}
					if(current.Prev != null) current.Prev.Next = nodeToInsert;
					nodeToInsert.Prev = current.Prev;
					nodeToInsert.Next = current;
					current.Prev = nodeToInsert;
					if(current == Head) Head = nodeToInsert;
					return;
				}
				current = current.Next;
			}
			return;
		}

		public void InsertAfter(Node node, Node nodeToInsert) {
			Node nodeToBeMoved = new Node(-1);
			Node current = Head;
			nodeToBeMoved = null; //Fool the compiler...
			while(current != null) //Find the existing node if it's there
			{
				//if(current.Value == nodeToInsert.Value)	nodeToBeMoved = current;
				if(current == nodeToInsert)	nodeToBeMoved = current;
				current = current.Next;
			}
			current = Head;
			while(current != null)
			{
				//if(current.Value == node.Value)
				if(current == node)
				{
					if(nodeToBeMoved != null && nodeToBeMoved.Prev != current)
					{
						if(nodeToBeMoved == Head) 
						{
							Head = nodeToBeMoved.Next;
							Head.Prev = null;
						}
						if(nodeToBeMoved == Tail)
						{
							Tail = nodeToBeMoved.Prev;
							Tail.Next = null;
						}
						if(nodeToBeMoved.Prev != null) nodeToBeMoved.Prev.Next = nodeToBeMoved.Next;
						if(nodeToBeMoved.Next != null) nodeToBeMoved.Next.Prev = nodeToBeMoved.Prev;
						if(current.Next != null) current.Next.Prev = nodeToBeMoved;
						nodeToBeMoved.Prev = current;
						nodeToBeMoved.Next = current.Next;
						current.Next = nodeToBeMoved;
						return; 
					}
					if(current.Next != null) current.Next.Prev = nodeToInsert;
					nodeToInsert.Prev = current;
					nodeToInsert.Next = current.Next;
					current.Next = nodeToInsert;
					if(current == Tail) Tail = nodeToInsert;
					return;
				}
				current = current.Next;
			}
			return;
		}

		public void InsertAtPosition(int position, Node nodeToInsert) {
			int currentPosition = 1;
			Node current = Head;
			while(current != null)
			{
				if(currentPosition == position)
				{
					nodeToInsert.Prev = current.Prev;
					nodeToInsert.Next = current;
					current.Prev = nodeToInsert;
					if(current == Head) Head = nodeToInsert;
					return;
				}
				current = current.Next;
				position++;
			}
			return;
		}

		public void RemoveNodesWithValue(int value) {
			Node current = Head;
			while(current != null)
			{
				if(current.Value == value)
				{
					if(current.Prev != null) current.Prev.Next = current.Next;
					if(current.Next != null) current.Next.Prev = current.Prev;
					if(current == Head) 
					{
						Head = current.Next;
						Head.Prev = null;
					}
					if(current== Tail)
					{
						Tail = current.Prev;
						Tail.Next = null;	
					}
				}
				current = current.Next;
			}
			return;
		}

		public void Remove(Node node) {
			Node current = Head;
			while(current != null)
			{
				//if(current.Value == node.Value)
				if(current == node)
				{
					if(current.Prev != null) current.Prev.Next = current.Next;
					if(current.Next != null) current.Next.Prev = current.Prev;
					if(current == Head)
					{
						Head = current.Next;
						Head.Prev = null;
					}
					if(current == Tail)
					{
						Tail = current.Prev;
						Tail.Next = null;
					}
					return;
				}
				current = current.Next;
			}
			return;
		}

		public bool ContainsNodeWithValue(int value) {
			Node current = Head;
			while(current != null)
			{
				if(current.Value == value) return true;
				current = current.Next;
			}
			return false;
		}
	}

	// Do not edit the class below.
	public class Node {
		public int Value;
		public Node Prev;
		public Node Next;

		public Node(int value) {
			this.Value = value;
		}
	}
}
}
