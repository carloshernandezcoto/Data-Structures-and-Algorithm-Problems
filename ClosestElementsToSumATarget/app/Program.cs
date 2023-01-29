//Time complexity: O(nlog(n)) where n is the largest array size.
//Space complaxity: O(n) where n is the largest array size.
//Both these complexities come from the fact that the arrays must be sorted in order to generate a linear solution...
using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting process...");
            TestMethod();
            Console.ReadLine();//Keep the values on screen
        }

        static void TestMethod()
        {
            int[] array1 = new int[] { -1, 3, 8, 2, 9, 4 };
            int[] array2 = new int[] { 4, 1, 2, 10, 5, 20, 14 };
            int target = 24;
            Console.WriteLine(ProcessArrays(array1, array2, target)); //Call the processing logic and print the output.
        }

        static string ProcessArrays(int[] array1, int[] array2, int target)
        {
            Array.Sort(array1);
            Array.Sort(array2);

            int p1 = 0;
            int p2 = array2.Length - 1;

            int array1BestMatch = array1[p1];
            int array2BestMatch = array2[p2];

            int bestDistance = target - (array1[p1] + array2[p2]);
            int currentDistance = target - (array1[p1] + array2[p2]);

            while (p1 < array1.Length && p2 >= 0)
            {
                if (currentDistance == 0) break;
                if (currentDistance > 0 && p1 < array1.Length - 1)
                {
                    p1++;
                }
                else if (currentDistance < 0 && p2 > 0)
                { p2--; }
                else { break; }

                currentDistance = target - (array1[p1] + array2[p2]);
                if (Math.Abs(currentDistance) <= Math.Abs(bestDistance))
                {
                    bestDistance = currentDistance;
                    array1BestMatch = array1[p1];
                    array2BestMatch = array2[p2];
                }
            }


            return String.Format("From array1: {0}\nFrom array2: {1}", array1BestMatch, array2BestMatch);
        }

        // static string PrintArray(int[] array)
        // {
        //     string myArray = "[";
        //     for (int i = 0; i < array.Length; i++)
        //     {
        //         if (i == 0)
        //             myArray = myArray + array[i];
        //         else
        //             myArray = myArray + " ," + array[i];
        //     }
        //     return (myArray + "]");

        // }
    }
}
