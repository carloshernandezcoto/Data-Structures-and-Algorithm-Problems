using System;

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
            int[] ways = new int[maxSteps + 1];
            ways[0] = 1;
            ways[1] = 1;

            for (int i = 2; i <= height; i++)
            {
                // if (i <= maxSteps)
                //     ways[i] = 2 * ways[i - 1];
                // else
                ways[i % (maxSteps + 1)] = 2 * (ways[(i - 1) % (maxSteps + 1)]) - ways[i % (maxSteps + 1)];
            }
            return ways[height % (maxSteps + 1)];
        }
    }
}
