using System;
using System.Collections.Generic;

namespace myApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting program...");
            var program = new Solution();
            program.Combine(4, 2);
        }
    }
    public class Solution
    {
        public IList<IList<int>> Combine(int n, int k)
        {
            var result = new List<IList<int>>();

            for (int i = 1; i <= n; i++)
                RecursiveCombine(result, new List<int> { i }, n, k);

            PrintResult(result);
            Console.ReadLine();

            return result as IList<IList<int>>;
        }

        public void RecursiveCombine(List<IList<int>> result, List<int> currentList, int n, int k)
        {
            var currentSize = currentList.Count;
            var currentNumber = currentList[currentSize - 1];

            if (currentSize == k)
            {
                result.Add(currentList );
                return;
            }
            for (int j = currentNumber + 1; j <= n ; j++)
            {
                var newList = new List<int>(currentList);
                newList.Add(j);
                RecursiveCombine(result, newList, n, k);
            }
        }

        public void PrintResult(List<IList<int>> listToPrint)
        {
            foreach (List<int> list in listToPrint)
            {
                Console.Write("(");
                foreach (int number in list)
                {
                    string output = (list.IndexOf(number) != list.Count - 1) ? (number.ToString() + "," + " ") : number.ToString();
                    Console.Write(output);
                }
                Console.Write("),\n");

            }

        }
    }
}
