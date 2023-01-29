var graph = function() {
    console.log('Starting program...');
    const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
    const routes = [
        ['PHX', 'LAX'],
        ['PHX', 'JFK'],
        ['JFK', 'OKC'],
        ['JFK', 'HEL'],
        ['JFK', 'LOS'],
        ['MEX', 'LAX'],
        ['MEX', 'BKK'],
        ['MEX', 'LIM'],
        ['MEX', 'EZE'],
        ['LIM', 'BKK'],
    ];

    //The actual graph
    const adjacencyList = new Map();

    //Add node
    function addNode(airport){
        adjacencyList.set(airport, []);
    }

    //Add edge, undirected
    function addEdge(origin, destination){
        adjacencyList.get(origin).push(destination);
        adjacencyList.get(destination).push(origin);
    }

    airports.forEach(airport => addNode(airport));
    routes.forEach(route => addEdge(...route));

    //Breadth first search mechanism.
    function bfs(start, finish){
        console.log('Starting bfs...');
        const queue = [start];
        const visited = new Set();
        while (queue.length > 0){
            const airport = queue.shift();
            const destinations = adjacencyList.get(airport);
            for (let destination of destinations){
                if(!visited.has(destination)){
                    queue.push(destination);
                    visited.add(airport);
                    console.log(destination);
                }
                if(destination === finish){
                    console.log(`There\'s a connection from ${start} to ${finish}!`);
                    return;
                }
            }
        }
        console.log(`No connection was found from ${start} to ${finish}!`);
    }


    //Depth first search mechanism.
    function dfs(start, finish)
    {
        //External variables for dfs.
        const result = [];
        const visited = new Set();
        //Global variables for dfs.
        found = false;

        console.log('Starting dfs...');
        result.push(start);
        visited.add(start);
        doDFS(start, finish, result, visited);
        if(!found) console.log(`No connection was found from ${result[0]} to ${finish}!`);
    }

    function doDFS(start, finish, result, visited){
        const airport = start;
        const destinations = adjacencyList.get(airport);

        if(destinations.length === 0)
            return;
        if(start === finish){
            console.log(`The quickest route from ${result[0]} to ${result[result.length - 1]} is ${result}.`);
            found = true;
            return;
        }
        for(let destination of destinations){
            if(!visited.has(destination) && !found){
                visited.add(destination);
                result.push(destination);
                doDFS(destination, finish, result, visited);
                result.pop();
            }
        }
    }

    //Find out if there's a route from one airport to another.
    //bfs('EZE', 'HEL');
    dfs('EZE', 'HEL');

    //Print objects
    console.log(adjacencyList);
}


    