using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int n = 3;
            int m = 3;

            //int[,] matrix = new int[2,2];
            int[,] matrix = new int[((int)Math.Pow(n, m)), m];
		    for(int j = 0; j < Math.Pow(n, m); j++)
			    for(int i = 0; i < m; i++)
			    {
                    var power = ((int)Math.Pow(n, m - i - 1));
                    var div = (j / power);
				    matrix[j,i] = div % n;
			    }

            
			for(int j = 0; j < Math.Pow(n, m); j++)
                {
                for(int i = 0; i < m; i++)
			    {
                    Console.Write(matrix[j,i]);
			    }
                Console.WriteLine();
                }
        }
    }
}
