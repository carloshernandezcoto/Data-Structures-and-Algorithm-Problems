using System;

namespace app
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Starting left view print...");

            var nodeBuilder = new NodeBuilder();
            //ILeftViewPrinter printer = new LeftViewPrinterMySolution(nodeBuilder.BuildTestNode());
            ILeftViewPrinter printer = new LeftViewPrinterQueueSolution(nodeBuilder.BuildTestNode());
            printer.Print();

            Console.WriteLine("Done. Press any key to exit.");
            Console.ReadKey();
        }
    }
}
