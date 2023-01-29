using System;
using System.Collections.Generic;
using System.Linq;

namespace app
{
    class Program
    {
		static int size = 4;
		static List<int> remaining = new List<int>();
		static List<List<int>> result = new List<List<int>>(){};

        static void Main(string[] args){
            Console.WriteLine("Starting...");
			CreateList(size);
			DFS(new List<int>(), remaining, result);
			PrintResult(result);
			Console.ReadKey();
        }
		
		static void DFS(List<int> current, List<int> remaining, List<List<int>> result){
				if(current.Count == size){
					result.Add(new List<int>(current));
					return;
				}
			for(int i = 0; i <remaining.Count; i++){
					current.Add(remaining[0]);
					remaining.RemoveAt(0);
					DFS(current, remaining, result);
					remaining.Add(current[current.Count - 1]);
					current.RemoveAt(current.Count - 1);
			}
		}

		static void CreateList(int size)
		{
			for(int i = 1; i <= size; i++){
				remaining.Add(i);
			}
		}

		static void PrintResult(List<List<int>> listToPrint)
        {
            foreach (List<int> list in listToPrint)
            {
                Console.Write("(");
                foreach (int number in list)
                {
                    string output = (list.IndexOf(number) != list.Count - 1) ? (number.ToString() + "," + " ") : number.ToString();
                    Console.Write(output);
                }
                Console.Write("),\n");

            }

        }
    }
}