using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Console.WriteLine(FirstNonRepeatingCharacter("aaassssdfaksdfasdfj"));
        }

        static char FirstNonRepeatingCharacter(string str)
        {
            Dictionary<char, int> lettersHash = new Dictionary<char, int>();
            for (int i = 0; i < str.Length; i++)
            {
                if (lettersHash.ContainsKey(str[i]))
                {
                    lettersHash[str[i]]++;
                }
                else
                {
                    lettersHash.Add(str[i], 1);
                }
            }

            for (int i = 0; i < str.Length; i++)
            {
                if (lettersHash[str[i]] == 1)
                {
                    return str[i];
                }
            }
            return '_';
        }
    }
}
