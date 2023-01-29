/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
//Optimal solution, help from https://www.youtube.com/watch?v=APn_6BwzCPw, plus additional check of mine.
var graph = function(n, k) {
    let result = [];
    function dfs(index, current){
        if(current.length >= k){
            if(current.length > k){
                return;
            }
            result.push([...current]);
        }

        for(let i = index; i <= n; i++){
            current.push(i);
            dfs(i+1, current);
            current.pop();
        }
    }
    dfs(1, []);
    PrintResult(result);
    return result;
    }
    

//My original solution, just a translation of my C# solution.
// let result = [];
// var combine = function(n, k) {
//     for (let i = 1; i <= n; i++)
//         RecursiveCombine(result, [i], n, k);

//     PrintResult(result)
//     return result;
// }

//         function RecursiveCombine(result, currentList, n, k)
//         {
//             const currentSize = currentList.length;
//             const currentNumber = currentList[currentSize - 1];

//             if (currentSize === k)
//             {
//                 result.push(Array.from(currentList));                
//                 return;
//             }
//             for (let j = currentNumber + 1; j <= n ; j++)
//             {
//                 var newList = Array.from(currentList);
//                 newList.push(j);
//                 RecursiveCombine(result, newList, n, k);
//             }
//         }

    function PrintResult(listToPrint)
    {
        console.log('result = '+ JSON.stringify(listToPrint));
    }