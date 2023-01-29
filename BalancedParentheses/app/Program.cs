using System;
using System.Collections.Generic;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting process...");

            var input = "))())(";
            int open = 0;
            int close = 0;
            string output = input;
            int insertions = 0;
            bool canClose = false;

            for (int i = 0; i < input.Length; i++)
            {
                switch (input[i])
                {
                    case '(':
                        open++;
                        canClose = false;
                        break;
                    case ')':
                        if (open == 0)
                        {
                            output = output.Insert(i + insertions, "(");
                            insertions++;
                            if (i == input.Length - 1)//Last item in the input string
                            {
                                output = output.Insert(i + insertions + 1, ")");
                                insertions++;
                                canClose = false;
                                break;
                            }
                            if (input[i + 1] == '(')
                            {
                                output = output.Insert(i + insertions + 1, ")");
                                insertions++;
                                canClose = false;
                            }
                            else
                            {
                                close++;
                                open++;
                                canClose = true;
                            }
                        }
                        else //There are open parenthesis
                        {
                            if (canClose)
                            {
                                open--;
                                close--;
                                canClose = false;
                            }
                            else
                            {
                                if (i == input.Length - 1) //Last item in the list
                                {
                                    close++;
                                    break;
                                }
                                if (input[i + 1] == ')')
                                {
                                    close++;
                                    canClose = true;
                                }
                                else
                                {
                                    output = output.Insert(i + insertions + 1, ")");
                                    insertions++;
                                    open--;
                                    canClose = false;
                                }
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            insertions += open * 2 - close;
            for (int o = 1; o <= open; o++)
            {
                output = output.Insert(output.Length, "))");
            }
            if (close > 0)
            {
                for (int o = close; o > 0; o--)
                {
                    output = output.Remove(output.Length - 1);
                }
            }
            Console.WriteLine("Insertions: {0}.", insertions);
            Console.WriteLine("Input string: {0}", input);
            Console.WriteLine("Outpt string: {0}", output);

            Console.ReadLine();
        }

    }
}
