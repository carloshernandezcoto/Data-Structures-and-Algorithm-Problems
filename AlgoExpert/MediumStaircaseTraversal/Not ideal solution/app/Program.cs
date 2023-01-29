using System;
using System.Linq;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            StaircaseTraversal(4, 3);
        }

        public static int StaircaseTraversal(int height, int maxSteps)
        {
            // The formula for this is W(N-1) + W(N-k) where N is the amount of steps in the staircase 
            //and k is the maximum amount of steps that can be climbed at a time. 
            int[] ways = new int[maxSteps];
            ways[0] = 1;

            for (int i = 1; i < height; i++)
            {
                var total = 0;
                for (int k = 0; k < maxSteps; k++)
                {
                    total += ways[k];
                }
                ways[i % maxSteps] = total;
            }
            return ways.Sum();
        }
    }
}
