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
            var array = new int[] { 1, 2 };
            //var expected = true;
            var actual = Program1.IsMonotonic(array);
            //Utils.AssertEquals(expected, actual);
        }
    }

    public class Program1
    {
        public static bool IsMonotonic(int[] array)
        {
            if (array.Length <= 1)
                return true;
            var mode = "";
            for (int k = 0; k < array.Length - 2; k++)
            {
                if (array[k] != array[k + 1])
                {
                    mode = array[k] < array[k + 1] ? "Ascending" : "Descending";
                    break;
                }
            }
            int i = array.Length - 1;
            while ((mode == "Ascending" && array[i] >= array[i - 1]) || (mode == "Descending" && array[i] <= array[i - 1]))
            {
                i--;
                if (i == 0)
                    return true;
            }
            return false;
        }
    }
}
