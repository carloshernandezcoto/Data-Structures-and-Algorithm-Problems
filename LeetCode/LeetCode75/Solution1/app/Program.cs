using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting P1...");

            int[] numbers = new int[] { 2, 0, 0, 1, 1, 1, 2, 0, 1, 0, 2, 2, 1, 0, 2, 0, 1 };
            SortColors(numbers);
            Console.WriteLine("[{0}]", string.Join(", ", numbers));

            Console.ReadLine();
        }

        static void SortColors(int[] nums)
        {
            int p1 = -1;
            int p2 = -1;

            for (int i = 0; i < nums.Length; i++)
            {
                switch (nums[i])
                {
                    case 2:
                        if (p2 == -1)
                            p2 = i;
                        break;

                    case 1:
                        if (p1 != -1 && p2 != -1)
                        {
                            nums[p2] = 1;
                            p2++;
                            nums[i] = 2;
                            break;
                        }
                        if (p1 != -1)
                        {
                            break;
                        }
                        if (p2 != -1)
                        {
                            nums[p2] = 1;
                            p1 = p2;
                            p2++;
                            nums[i] = 2;
                            break;
                        }
                        p1 = i;
                        break;

                    case 0:
                        if (p1 != -1 && p2 != -1)
                        {
                            nums[p1] = 0;
                            p1++;
                            nums[p2] = 1;
                            p2++;
                            nums[i] = 2;
                            break;
                        }
                        if (p1 != -1)
                        {
                            nums[p1] = 0;
                            p1++;
                            nums[i] = 1;
                            break;
                        }
                        if (p2 != -1)
                        {
                            nums[p2] = 0;
                            p2++;
                            nums[i] = 2;
                            break;
                        }
                        break;

                    default: break;
                }
            }

        }
    }
}
