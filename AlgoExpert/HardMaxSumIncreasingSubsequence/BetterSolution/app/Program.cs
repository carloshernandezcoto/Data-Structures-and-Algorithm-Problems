using System;
using System.Collections.Generic;
using System.Linq;

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
            var candidateSums = new int[array.Length];
            int[] candidateIndexes = Enumerable.Repeat(-1, array.Length).ToArray(); //Creates an array of size array.Length, all values start in -1.
            var maxSum = array[0];
            int lastIndex = -1;
            candidateSums[0] = array[0];


            for (int i = 1; i < array.Length; i++)
            {
                var maxSoFar = array[i];
                var maxSoFarIndex = -1;
                for (int j = i - 1; j >= 0; j--)
                {
                    if (array[j] < array[i] && (candidateSums[j] + array[i]) > maxSoFar)
                    {
                        maxSoFar = candidateSums[j] + array[i];
                        maxSoFarIndex = j;
                    }
                }
                candidateSums[i] = maxSoFar;
                candidateIndexes[i] = maxSoFarIndex;
                if (maxSum < candidateSums[i])
                {
                    maxSum = candidateSums[i];
                    lastIndex = i;
                }
            }

            var finalItems = new List<int>();
            while (lastIndex != -1)
            {
                finalItems.Add(array[lastIndex]);
                lastIndex = candidateIndexes[lastIndex];
            }
            if (finalItems.Count == 0)
                finalItems.Add(array[0]);
            else
                finalItems.Reverse();

            return new List<List<int>>(){
                   new List<int>(){
                       maxSum, // Sum of the items.
			       },
                   finalItems, // Item sequence.
		};
        }
    }
}
