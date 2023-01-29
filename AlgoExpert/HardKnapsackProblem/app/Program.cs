using System;
using System.Collections.Generic;
using System.Linq;

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

    public class ProgramTest
    {
        //[Test]
        public void TestCase1()
        {
            int[,] input = { { 1, 2 }, { 4, 3 }, { 5, 6 }, { 6, 7 } };
            //int[,] input = { { 4,3 }, { 1, 2 }, { 5, 6 }, { 6, 7 } };
            Tuple<int, int[]> expected = Tuple.Create(10, new int[] { 1, 3 });
            //Utils.AssertTrue(compare(Program.KnapsackProblem(input, 10), expected));
            //Program1.KnapsackProblem(input, 10);
            bool result = compare(Program1.KnapsackProblem(input, 10), expected);
        }

        private static bool compare(List<List<int>> arr1, Tuple<int, int[]> arr2)
        {
            if (arr1[0][0] != arr2.Item1)
            {
                return false;
            }
            if (arr1[1].Count != arr2.Item2.Length)
            {
                return false;
            }
            for (int i = 0; i < arr1[1].Count; i++)
            {
                if (arr1[1][i] != arr2.Item2[i])
                {
                    return false;
                }
            }
            return true;
        }
    }

    public class Program1
    {
        //Time complexity: n(log(n) + C)
        //Space complexity: nC
        //  n is the number of items in the array, C is the capacity
        public static List<List<int>> KnapsackProblem(int[,] items, int capacity)
        {
            var numberOfItems = items.GetLength(0);
            int[][] sortedItems = new int[numberOfItems + 1][];

            //Initialize sortedItems
            for (int i = 0; i < numberOfItems; i++)
            {
                sortedItems[i] = new int[2];
                for (int j = 0; j < 2; j++)
                    sortedItems[i][j] = items[i, j];
            }
            sortedItems[numberOfItems] = new int[2]{0,0};
            sortedItems = sortedItems.OrderBy(x => x[1]).ToArray();
            
            var table = new int[numberOfItems + 1, capacity + 1];

            for(int i = 1; i <= numberOfItems; i++)
                for(int j = 1; j <= capacity; j++)
                {
                    if(sortedItems[i][1] > j)
                        table[i,j] = table[i-1, j];
                    else
                        table[i,j] = FindMax(sortedItems[i][0] + table[i - 1, j - sortedItems[i][1]], table[i-1, j]);
                }

            var chosenIndexes = new List<int>{};
            var k = capacity;
            for(int i = numberOfItems; i > 0; i--)
            {
                if(table[i,k] != table[i-1, k])
                {
                    chosenIndexes.Add(FindOriginalIndexOfItem(sortedItems[i], items));
                    k = k - sortedItems[i][1];
                }
            }
            chosenIndexes.Sort();
            return new List<List<int>> {new List<int> {table[numberOfItems, capacity]}, chosenIndexes};
        }

        public static int FindMax(int x, int y)
        {
            if(x > y)
                return x;
            else
                return y;
        }

        public static int FindOriginalIndexOfItem(int[] input, int[,] items)
        {
            for(int i = 0; i < items.GetLength(0); i++)
                {
                    if(items[i, 0] == input[0] && items[i, 1] == input[1])
                    {
                        return i;
                    }
                }
                return -1;
        }

    }

}
