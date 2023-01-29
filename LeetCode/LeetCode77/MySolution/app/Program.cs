using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting program...");
            var program = new Solution();
            program.Combine(4, 2);
        }
    }

    public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        
        var result = new List<IList<int>>();
        var fullCombinations = new List<IList<int>>();
        var tempCombinations = new List<IList<int>>(fullCombinations);

        for (int i = 1; i <= n; i++)
        {
            tempCombinations.Clear();
            foreach(List<int> list in fullCombinations)
            {
                var newItem = new List<int>(list);
                newItem.Add(i);
                if(newItem.Count < k) tempCombinations.Add(newItem);
                if(newItem.Count == k) result.Add(newItem);
            }
            var finalItem = new List<int>(){i};
            tempCombinations.Add(finalItem);
            if(finalItem.Count == k) result.Add(finalItem);
            tempCombinations.ForEach(t => fullCombinations.Add(t)) ;
        }
        

         PrintResult(result);
         Console.ReadLine();

        return result as IList<IList<int>>;
    }

        public void PrintResult(List<IList<int>> listToPrint) {
            foreach(List<int> list in listToPrint)
            {
                Console.Write("(");
                foreach(int number in list)
                {
                    string output = (list.IndexOf(number) != list.Count - 1) ? (number.ToString() + "," + " ") : number.ToString();
                     Console.Write(output);
                }
                Console.Write("),\n");
                
            }

    }
}
}
