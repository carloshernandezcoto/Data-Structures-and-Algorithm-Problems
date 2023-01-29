using System;
using System.Collections.Generic;

namespace app
{
    class ProgramLeetCode
    {
        static void Main2(string[] args)
        {
            Console.WriteLine(MinInsertions("(()))(()))()())))"));
            Console.ReadLine();

        }

        static int MinInsertions(string s)
        {
            int currentlyOpen = 0;
            int currentlyClose = 0;
            int insertions = 0;
            bool canClose = false;

            for (int i = 0; i < s.Length; i++)
            {
                switch (s[i])
                {
                    case '(':
                        currentlyOpen++;
                        canClose = false;
                        break;
                    case ')':
                        if (currentlyOpen == 0 && i == s.Length - 1)
                        {
                            insertions += 2;
                            canClose = false;
                            break;
                        }
                        if (currentlyOpen == 0)
                        {
                            insertions++;
                            if (i < s.Length - 1 && s[i + 1] == '(')
                            {
                                insertions++;
                                canClose = false;
                            }
                            else
                            {
                                if (i < s.Length - 1)
                                {
                                    currentlyClose++;
                                    currentlyOpen++;
                                    canClose = true;
                                }
                            }
                        }
                        else
                        {
                            if (canClose)
                            {
                                currentlyOpen--;
                                currentlyClose--;
                                canClose = false;
                            }
                            else
                            {
                                if (i == s.Length - 1)
                                {
                                    currentlyClose++;
                                    break;
                                }
                                if (i < s.Length - 1 && s[i + 1] == ')')
                                {
                                    currentlyClose++;
                                    canClose = true;
                                }
                                else
                                {
                                    if (i < s.Length - 1)
                                    {
                                        insertions++;
                                        currentlyOpen--;
                                        canClose = false;
                                    }
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            insertions += currentlyOpen * 2 - currentlyClose;
            return insertions;
        }

    }
}
