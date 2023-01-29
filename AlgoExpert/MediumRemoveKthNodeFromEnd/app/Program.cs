using System;
using System.Linq;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting...");
            var x = new ProgramTest();
            x.TestCase();
        }
    }
    public class ProgramTest
    {
        public void TestCase()
        {
            TestLinkedList test = new TestLinkedList(0);
            test.addMany(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });
            RemoveKthNodeFromEnd(test, 10);
        }
        public static void RemoveKthNodeFromEnd(LinkedList head, int k)
        {
            int count = 1;
            var currentNode = head;
            while (currentNode.Next != null)
            {
                count++;
                currentNode = currentNode.Next;
            }
            int indexToRedirect = count - k;
            if (indexToRedirect == 0)//Head needs to go...
            {
                //head = head.Next; //This doesnt work. Reassigning the variable "head" causes no change on the "test" object originally sent to this method.
                head.Value = head.Next.Value;
                head.Next = head.Next.Next;
                return;
            }
            currentNode = head;
            for (int i = 1; i < indexToRedirect; i++)
                currentNode = currentNode.Next;
            currentNode.Next = currentNode.Next.Next;
        }
    }
}