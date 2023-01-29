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

public class ProgramTest {
	//[Test]
	public void TestCase1() {
		int[] expected = {2, 3, 5, 5, 6, 8, 9};
		int[] input = {8, 5, 2, 9, 5, 6, 3};
		//Utils.AssertTrue(compare(Program.QuickSort(input), expected));
        var result= compare(Program1.QuickSort(input), expected);
	}

	public bool compare(int[] arr1, int[] arr2) {
		if (arr1.Length != arr2.Length) {
			return false;
		}
		for (int i = 0; i < arr1.Length; i++) {
			if (arr1[i] != arr2[i]) {
				return false;
			}
		}
		return true;
	}
}
    public class Program1 {
	public static int[] QuickSort(int[] array) {
		RecursiveQuickSort(ref array, 0, array.Length-1);
		return array;
	}
	
	public static void RecursiveQuickSort(ref int[] array, int idx1, int idx2)
	{
		if(idx1 >= idx2)
			return;
		int pivot = idx1;
		int left = idx1 + 1;
		int right = idx2;
		
		while(right >= left)
		{
			if(array[left] >= array[pivot] && array[right] < array[pivot])
			{
				swap(ref array, left, right);
				left++;
				right--;
			}
			else
			{
				if(array[left] < array[pivot])
					left++;
				if(array[right] >= array[pivot])
					right--;
			}
		}
		swap(ref array, pivot, right);
		RecursiveQuickSort(ref array, right + 1, idx2);
		RecursiveQuickSort(ref array, idx1, right - 1);
		return;
	}
	
	public static void swap(ref int[] array, int idx1, int idx2)
	{
		var temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	}
}
}
