using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting process...");
            List<string> result = new List<string>();
            int n = 4;
            int open = n; int close = n;
            BackTrack(result, "", open, close);

            foreach (string str in result)
            {
                Console.WriteLine(str);
            }
            Console.WriteLine("Count of strings: {0}", result.Count);
            Console.ReadLine();
        }

        static void BackTrack(List<string> result, string currentString, int open, int close)
        {
            //  if(open < 0 && close < 0)
            //     return;
            if (open == 0 && close == 0)
            {
                result.Add(currentString);
                return;
            }
            if (open > 0)
            {
                BackTrack(result, currentString + "(", open - 1, close);
            }
            if (close > open)
            {
                BackTrack(result, currentString + ")", open, close - 1);
            }
        }
    }
}
