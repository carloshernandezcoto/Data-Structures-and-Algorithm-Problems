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

    public class ProgramTest
    {
        //[Test]
        public void TestCase1()
        {
            //Utils.AssertTrue(Program.IsPalindrome("abcdcba"));
            Program1.IsPalindrome("abb");
        }
    }

    public class Program1
    {
        public static bool IsPalindrome(string str)
        {
            char[] forward = new char[str.Length];
            char[] backwards = new char[str.Length];
            for (int i = 0; i < str.Length; i++)
            {
                forward[i] = str[i];
                backwards[i] = str[str.Length - 1 - i];
            }
            var f = forward.ToString();
            var b = backwards.ToString();
            var bul = forward.ToString().Equals(backwards.ToString());
            return bul;
        }
    }
}
