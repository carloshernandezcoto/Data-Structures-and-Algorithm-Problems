using System;

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
            int[] input = { 1, 5 };
            //Utils.AssertTrue(Program.NumberOfWaysToMakeChange(6, input) == 2);
            Program1.NumberOfWaysToMakeChange(6, input);
        }
    }

    public class Program1
    {
        public static int NumberOfWaysToMakeChange(int n, int[] denoms)
        {
            //time complexity: n Exp(denomsLength + 1)
            //space complexity: n Exp(denomsLength + 1)
            var denomsWidth = denoms.Length;
            int counter = 0;

            int[,] matrix = new int[((int)Math.Pow(n+1, denomsWidth)), denomsWidth];
            for (int j = 0; j < Math.Pow(n+1, denomsWidth); j++)
            {
                int sum = 0;
                for (int i = 0; i < denomsWidth; i++)
                {
                    matrix[j, i] = (j / ((int)Math.Pow(n+1, denomsWidth - i - 1))) % (n+1);
                    sum = sum + (matrix[j, i] * denoms[i]);
                    if(sum > n)
                        break;
                    //Print the current entry
                    //Console.Write(matrix[j, i]);
                }
                if (sum == n)
                    counter++;

                //Print the current line sum and counter
                //Console.WriteLine("    sum = {0}, counter = {1}", sum, counter);
            }

            //Prints the matrix
            // for (int j = 0; j < Math.Pow(n, denomsWidth); j++)
            // {
            //     for (int i = 0; i < denomsWidth; i++)
            //     {
            //         Console.Write(matrix[j, i]);
            //     }
            //     Console.WriteLine();
            // }

            return counter;
        }
    }

}
