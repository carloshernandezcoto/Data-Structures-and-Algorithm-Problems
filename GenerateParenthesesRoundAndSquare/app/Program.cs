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
            //Stack<char> lastOpen = new Stack<char>();
            string lastOpen = "";
            int n = 1;
            int m = 2;
            int openRound = n; int closeRound = n; int openSquare = m; int closeSquare = m;
            BackTrack(result, "", openRound, closeRound, openSquare, closeSquare, lastOpen);

            foreach (string str in result)
            {
                Console.WriteLine(str);
            }
            Console.WriteLine("Count of strings: {0}", result.Count);
            Console.ReadLine();
        }

        static void BackTrack(List<string> result, string currentString, int openRound, int closeRound, int openSquare, int closeSquare, string lastOpen)
        {
            if (openRound == 0 && closeRound == 0 && openSquare == 0 && closeSquare == 0)
            {
                result.Add(currentString);
                return;
            }
            if (openRound > 0)
            {
                //lastOpen.Push('(');
                //lastOpen += "(";
                BackTrack(result, currentString + "(", openRound - 1, closeRound, openSquare, closeSquare, lastOpen + "(");
            }
            if (closeRound > openRound && lastOpen.Length > 0 && lastOpen[lastOpen.Length - 1] == '(')
            {
                //lastOpen.Remove(lastOpen.Length - 1);
                BackTrack(result, currentString + ")", openRound, closeRound - 1, openSquare, closeSquare, lastOpen.Remove(lastOpen.Length - 1));
            }
            if (openSquare > 0)
            {
                //lastOpen.Push('[');
                //lastOpen += ('[');
                BackTrack(result, currentString + "[", openRound, closeRound, openSquare - 1, closeSquare, lastOpen + "[");
            }
            if (closeSquare > openSquare && lastOpen.Length > 0 && lastOpen[lastOpen.Length - 1] == '[')
            {
                //lastOpen.Remove(lastOpen.Length - 1);
                BackTrack(result, currentString + "]", openRound, closeRound, openSquare, closeSquare - 1, lastOpen.Remove(lastOpen.Length - 1));
            }
        }
    }
}
