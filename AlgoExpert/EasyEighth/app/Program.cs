using System;
using System.Collections.Generic;
using System.Linq;

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
		List<object> test = new List<object>(){
			new List<object>(){
				new List<object>(){
				new List<object>(){
				new List<object>(){
				5
				},
				},
				},
			}
		};
        // List<object> test = new List<object>(){
		// 	5,
		// 	2,
		// 	new List<object>(){
		// 		7, -1
		// 	},
		// 	3,
		// 	new List<object>(){
		// 		6,
		// 		new List<object>(){
		// 			-13, 8
		// 		},
		// 		4,
		// 	},
		// };
		//Utils.AssertTrue(Program.ProductSum(test) == 12);
        
    Program1.ProductSum(test);
	}
}

public class Program1 {
	// Tip: You can use `el is IList<object>` to check whether an item is a list or
	// an integer.
	public static List<int> serializedList = new List<int>();
    public static Dictionary<int, int> levelMultiplier = new Dictionary<int, int>(){{1,1}};
	public static int ProductSum(List<object> array) {
		// Write your code here.
		serializedList.Clear();
		SerializeArray(array, 1, serializedList);
		return serializedList.Sum();
	}
	
	public static void SerializeArray(List<object> array, int level, List<int> serialArray)
	{
		for(int i = 0; i < array.Count; i++)
		{
                if (array[i] is IList<object>)
                    SerializeArray((List<Object>)array[i], level + 1, serialArray);
                else
                    serialArray.Add((levelMultiplier.ContainsKey(level) ? levelMultiplier[level] : AddLevelToDictionary(level)) * (int)array[i]);
            }
	}

    public static int AddLevelToDictionary(int level)
    {
        if(levelMultiplier.ContainsKey(level))
            return levelMultiplier[level];

        levelMultiplier.Add(level, level * AddLevelToDictionary(level - 1));
        return  levelMultiplier[level];
    }
}
}
