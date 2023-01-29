using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting P1...");

            //int[] numbers = new int[] { 2, 0, 1 };
            int[] numbers = new int[] { 2, 0, 2, 1, 1, 0 };
            //int[] numbers = new int[] { 0, 2, 1, 0, 0, 2, 0, 2, 0, 2, 1, 1, 0, 2, 2, 2, 0, 2, 1, 1, 0, 2 }; //9 2s, 5 1s. 8 0s. 
            SortColors(numbers);
            Console.WriteLine("[{0}]", string.Join(", ", numbers));

            Console.ReadLine();
        }

        static void SortColors(int[] nums)
        {
            if (nums == null || nums.Length < 2) return;
            int p1 = 0;
            int p2 = nums.Length - 1;
            int current = 0;

            while (p2 >= current && current < nums.Length)
            {
                switch (nums[current])
                {
                    case 1:
                        current++;
                        break;
                    case 2:
                        Swap(nums, current, p2);
                        p2--;
                        if (nums[current] == 1)
                            current++;
                        break;

                    case 0:
                        Swap(nums, p1, current);
                        p1++;
                        current++;
                        break;

                    default: break;
                }
            }

        }
        static void Swap(int[] array, int idx1, int idx2)
        {
            var temp = array[idx1];
            array[idx1] = array[idx2];
            array[idx2] = temp;
        }
    }
}
