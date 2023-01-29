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

    // This file is initialized with a code version of this
    // question's sample test case. Feel free to add, edit,
    // or remove test cases in this file as you see fit!
    public class ProgramTest {
        //[Test]
        public void TestCase1() {
            //Utils.AssertTrue(Program.BinarySearch(new int[] {0, 1, 21, 33, 45, 45, 61, 71, 72, 73}, 33) == 3);
            Program1.BinarySearch(new int[] {0, 1, 21, 33, 45, 45, 61, 71, 72, 73}, 21);
        }
    }
    public class Program1 {
	public static int BinarySearch(int[] array, int target) {
		int low = 0;
		int top = array.Length - 1;
		while(top >= low)
		{
			if(array[low] ==  target)
				return low;
			if (array[top] == target)
				return top;
            var middle = (top - low) / 2;
            if(array[middle] == target)
      	        return middle;
			if(array[middle] > target)
			{
				top = ((top - low) / 2) - 1;
				low = low + 1;
			}
			else
			{
				low = ((top - low) / 2) + 1;
				top = top - 1;
			}
		}
		return -1;
	}
}

}
