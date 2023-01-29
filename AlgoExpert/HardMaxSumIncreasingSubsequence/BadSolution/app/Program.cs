using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting...");
            int[] input = { 10, 70, 20, 30, 50, 11, 30 };
            ProgramProcessor.MaxSumIncreasingSubsequence(input);
        }


    }

    public class ProgramTest
    {
        //  [Test]
        public void TestCase1()
        {
            int[] input = { 10, 70, 20, 30, 50, 11, 30 };
            Tuple<int, int[]> expected = Tuple.Create(110, new int[] { 10, 20, 30, 50 });
            //    Utils.AssertTrue(compare(Program.MaxSumIncreasingSubsequence(input), expected));
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

    public class ProgramProcessor
    {
        public static List<List<int>> MaxSumIncreasingSubsequence(int[] array)
        {
            var allPossibilities = new List<List<int>>();
            var maxSum = Int32.MinValue;
            var finalItems = new List<int>();

            for (int i = 0; i < array.Length; i++)
            {
                var allNewPossibilities = new List<List<int>>();
                foreach (List<int> candidate in allPossibilities)
                {
                    if (candidate[candidate.Count - 1] < array[i])
                    {
                        var newCandidate = new List<int>(candidate);
                        newCandidate.Add(array[i]);
                        newCandidate[0] += array[i];
                        if (newCandidate[0] > maxSum)
                        {
                            UpdateReturnValues(newCandidate, ref maxSum, ref finalItems);
                        }
                        allNewPossibilities.Add(newCandidate);
                    }
                }
                allPossibilities.AddRange(allNewPossibilities);
                allNewPossibilities.Clear();
                var newItem = new List<int>() { array[i], array[i] };
                if (newItem[0] > maxSum)
                {
                    UpdateReturnValues(newItem, ref maxSum, ref finalItems);
                }
                allPossibilities.Add(newItem);
            }

            return new List<List<int>>(){
                   new List<int>(){
                       maxSum, // Sum of the items.
			       },
                   finalItems, // Item sequence.
		};
        }

        public static void UpdateReturnValues(List<int> newMax, ref int maxSum, ref List<int> finalItems)
        {
            maxSum = newMax[0];
            finalItems.Clear();
            finalItems.AddRange(newMax.GetRange(1, newMax.Count - 1));
        }
    }
}
