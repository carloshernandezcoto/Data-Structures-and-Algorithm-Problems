using System;
using System.Text;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting P1...");

            Console.WriteLine(LongestPalindrome("aacabdkacaa"));

            Console.ReadLine();
        }
        //Time Complexity: O(n*p) where k is the longest palindrome in the string
        //Space complexity: O(p)
        static string LongestPalindrome(string s)
        {
            if (s == null || s.Length == 0)
                return s;

            string longest = s[0].ToString();

            for (int i = 0; i < s.Length; i++)
            {
                var l1 = SideLength(ref s, i - 1, i + 1);
                if (l1 > 0 && 1 + 2 * l1 > longest.Length)
                    longest = s.Substring(i - l1, 1 + 2 * l1);

                if (i < s.Length - 1 && s[i] == s[i + 1])
                {
                    var l2 = SideLength(ref s, i - 1, i + 2);
                    if (l2 > 0 && 2 + 2 * l2 > longest.Length)
                        longest = s.Substring(i - l2, 2 + 2 * l2);
                    else if (longest.Length < 2) longest = s.Substring(i, 2);
                }
            }
            return longest;
        }
        static int SideLength(ref string s, int idx1, int idx2)
        {
            int counter = 0;
            while (idx1 - counter >= 0 && idx2 + counter < s.Length && s[idx1 - counter] == s[idx2 + counter])
            {
                counter++;
            }
            return counter;
        }

    }
}
