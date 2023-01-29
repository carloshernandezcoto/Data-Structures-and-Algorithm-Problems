using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting program...");
            var testProgram = new TestProgram();
            var result = testProgram.TestCase1();
        }
    }

    public class TestProgram
    {
        public bool TestCase1()
        {
            int[][] input = new int[][] {
            new int[] {1, 0, 0, 0, 0, 0},
            new int[] {0, 1, 0, 1, 1, 1},
            new int[] {0, 0, 1, 0, 1, 0},
            new int[] {1, 1, 0, 0, 1, 0},
            new int[] {1, 0, 1, 1, 0, 0},
            new int[] {1, 0, 0, 0, 0, 1},
        };
            int[][] expected = new int[][] {
            new int[] {1, 0, 0, 0, 0, 0},
            new int[] {0, 0, 0, 1, 1, 1},
            new int[] {0, 0, 0, 0, 1, 0},
            new int[] {1, 1, 0, 0, 1, 0},
            new int[] {1, 0, 0, 0, 0, 0},
            new int[] {1, 0, 0, 0, 0, 1},
        };
            int[][] actual = new Solution().RemoveIslands(input);
            for (int i = 0; i < actual.Length; i++)
            {
                for (int j = 0; j < actual[i].Length; j++)
                {
                    if (actual[i][j] != expected[i][j])
                        return false;
                }
            }
            return true;
        }
    }

    public class Solution
    {
        //Time complexity: O(n+m), where n is the matrix width, and m is the matrix height.
        //Space complexity: O(n+m), since at any point in the program execution there'll be at worse, n+m calls to on the callstack.
        public int[][] RemoveIslands(int[][] matrix)
        {
            var height = matrix.Length;
            var width = matrix[0].Length;

            for (int x = 1; x < width - 1; x++)
                if (matrix[0][x] == 1 && matrix[1][x] == 1)
                    TagNeighbors(1, x, width, height, matrix);

            for (int x = 1; x < width - 1; x++)
                if (matrix[height - 1][x] == 1 && matrix[height - 2][x] == 1)
                    TagNeighbors(height - 2, x, width, height, matrix);

            for (int y = 1; y < height - 1; y++)
                if (matrix[y][0] == 1 && matrix[y][1] == 1)
                    TagNeighbors(y, 1, width, height, matrix);

            for (int y = 1; y < height - 1; y++)
                if (matrix[y][width - 1] == 1 && matrix[y][width - 2] == 1)
                    TagNeighbors(y, width - 2, width, height, matrix);

            CleanUpMatrix(width, height, matrix);
            return matrix;
        }
        public void TagNeighbors(int y, int x, int width, int height, int[][] matrix)
        {
            if (matrix[y][x] > 1)
                return;

            matrix[y][x]++;
            if (matrix[y][x + 1] == 1 && !IsOnTheBorder(y, x + 1, width, height))
                TagNeighbors(y, x + 1, width, height, matrix);

            if (matrix[y][x - 1] == 1 && !IsOnTheBorder(y, x - 1, width, height))
                TagNeighbors(y, x - 1, width, height, matrix);

            if (matrix[y + 1][x] == 1 && !IsOnTheBorder(y + 1, x, width, height))
                TagNeighbors(y + 1, x, width, height, matrix);

            if (matrix[y - 1][x] == 1 && !IsOnTheBorder(y - 1, x, width, height))
                TagNeighbors(y - 1, x, width, height, matrix);
        }

        private bool IsOnTheBorder(int y, int x, int width, int height)
        {
            return (y == 0 || y == height - 1 || x == 0 || x == width - 1) ? true : false;
        }

        private void CleanUpMatrix(int width, int height, int[][] matrix)
        {
            for (int y = 1; y < height - 1; y++)
                for (int x = 1; x < width - 1; x++)
                {
                    if (matrix[y][x] == 1)
                    {
                        matrix[y][x] = 0;
                        continue;
                    }
                    if (matrix[y][x] > 1)
                        matrix[y][x] = 1;
                }
        }
    }
}