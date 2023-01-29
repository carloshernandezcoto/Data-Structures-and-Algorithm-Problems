using System;
using System.Linq;
using System.Collections.Generic;

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

    public class ProgramTest {
	//[Test]
	public void TestCase1() {
		int[,] input = {
			{1, 2, 3, 4},
			{12, 13, 14, 5},
			{11, 16, 15, 6},
			{10, 9, 8, 7},
		};
		var expected = new List<int> {
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
		};
		var actual = Program1.SpiralTraverse(input);
		//Utils.AssertTrue(expected.SequenceEqual(actual));
	}
}

public class Program1 {
	public static List<int> SpiralTraverse(int[,] array) {
		var finalArray = new List<int>();
		int n = array.GetLength(0);
		int m = array.GetLength(1);
		int nMin = 0, mMin = 0;
		int nMax = n - 1;
		int mMax = m - 1;
		int pending = n * m;
		
		while(pending > 0)
		{
			for(int i = mMin; i <= mMax; i++)
			{
				finalArray.Add(array[nMin,i]);
				if((pending = pending - (mMax - mMin + 1)) == 0)
					return finalArray;
			}

			for(int i = nMin; i <= nMax; i++)
			{
				finalArray.Add(array[i,mMax]);
				if((pending = pending - (nMax - nMin + 1)) == 0)
					return finalArray;
			}

			for(int i = mMax; i >= mMin; i--)
			{
				finalArray.Add(array[nMax,i]);
				if((pending = pending - (mMax - mMin + 1)) == 0)
					return finalArray;
			}

			for(int i = nMax; i >= nMin; i--)
			{
				finalArray.Add(array[i,mMin]);
				if((pending = pending - (nMax - nMin + 1)) == 0)
					return finalArray;
			}
		}
		
		return finalArray;
	}
}
}
