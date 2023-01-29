using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting P1...");
            int[] numbers = new int[] { 2, 7, 11, 15 };

            var result = TwoSum(numbers, 9);

            Console.WriteLine("[ {0}, {1} ]", result[0], result[1]);

            Console.ReadLine();
        }

        static int[] TwoSum(int[] numbers, int target)
        {
            int length = numbers.Length;
            int p1 = 0;
            int p2 = length - 1;

            while (p1 < p2)
            {
                var sum = numbers[p1] + numbers[p2];
                if (sum == target) return new int[2] { p1 + 1, p2 + 1 };
                if (sum > target) p2--;
                else p1++;
            }

            return new int[] { -1, -1 };
        }
    }
}
