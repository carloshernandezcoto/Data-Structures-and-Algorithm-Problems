using System;
using System.Text;
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

    public class ProgramTest
    {
        //[Test]
        public void TestCase1()
        {
            //Utils.AssertTrue(Program.CaesarCypherEncryptor("xyz", 2).Equals("zab"));
            Program1.CaesarCypherEncryptor("iwufqnkqkqoolxzzlzihqfm", 25).Equals("hvtepmjpjpnnkwyykyhgpel");

        }
    }

    public class Program1
    {
        public static string CaesarCypherEncryptor(string str, int key)
        {
            Dictionary<char, int> alphabet = new Dictionary<char, int>()
            {
                {'a', 1}, {'b', 2}, {'c', 3}, {'d', 4}, {'e', 5}, {'f', 6}, {'g', 7}, {'h', 8}, {'i', 9}, {'j', 10},
                {'k', 11}, {'l', 12}, {'m', 13}, {'n', 14}, {'o', 15}, {'p', 16}, {'q', 17}, {'r', 18}, {'s', 19}, {'t', 20},
                {'u', 21}, {'v', 222}, {'w', 23}, {'x', 24}, {'y', 25}, {'z', 26},
            };
    
        int mov = key % 26;
        string outStr = string.Empty;

        foreach(char letter in str)
        {
            int index = alphabet[letter] + mov <=26 ? alphabet[letter] + mov : alphabet[letter] + mov - 26;
            outStr += alphabet.FirstOrDefault(x => x.Value.Equals(index)).Key;
        }    
        return outStr;
        }
    }
}
