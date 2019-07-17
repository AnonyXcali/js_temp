const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

class Graph {


	constructor(){
		this.vertices = [];
		this.adjList = new Map();
	}

	addVertex(vertex){
		this.vertices.push(vertex);
		this.adjList.set(vertex , []);
	}

	addEdges(v,w){
		if(!this.adjList.get(v)){
			this.vertices.push(v);
		}

		if(!this.adjList.get(w)){
			this.vertices.push(w);
		}

		this.adjList.get(v).push(w);

	}

	getVertices() {
  		return this.vertices;
	}

	getAdjList() {
  		return this.adjList;
	}

	printVertex(value){
		console.log('Visited vertex: ' + value)
	};

	_dfsV(vertex, color, adjList, callback){

		color[vertex] = Colors.GREY;
		if(callback){
				callback(vertex);
		}
		const neighbors = adjList.get(vertex);
		for (let i = 0; i < neighbors.length; i++) {
			if(color[neighbors[i]] === Colors.WHITE){
				this._dfsV(neighbors[i], color, adjList, callback);
			}
		}

		color[vertex] = Colors.BLACK;

	}

	dfs(graph, callback){
		let vertices = graph.getVertices();
		let adjList = graph.getAdjList();
		const color = initializeColor(vertices);

		for (let v = 0; v < vertices.length; v++) {
			if(color[vertices[v]] === Colors.WHITE){
				this._dfsV(vertices[v], color, adjList, callback)
			}

		}

	}

	bfs(graph, startVertex, callback){
		let vertices = graph.getVertices();
		let adjList = graph.getAdjList();
		const color = initializeColor(vertices);
		const queue = new Queue();

		queue.enqueue(startVertex);

		while(!queue.isEmpty()){
			const u = queue.dequeue();
			const neighbors = adjList.get(u);
			color[u] = Colors.GREY;
			for (let i = 0; i < neighbors.length; i++) {
      			const w = neighbors[i];
      			if (color[w] === Colors.WHITE) { 
        			color[w] = Colors.GREY;
        			queue.enqueue(w);
      			}
   	 		}
			color[u] = Colors.BLACK;
			if(callback){
			callback(u);
			}
		}

	}

}


class Queue {

  constructor() {
    this.list = [];
    this.length = 0;
  }

  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  isEmpty(){
  	return this.length <= 0;
  }

  dequeue() {
    if (this.length === 0) return;
    this.length--;
    return this.list.shift();
  }
  peek() {
    return this.list[0];
  }
}



let graph = new Graph();


graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addVertex('I');



graph.addEdges('A','B');
graph.addEdges('A','C');
graph.addEdges('A','D');
graph.addEdges('B','E');
graph.addEdges('B','F');
graph.addEdges('E','I');
graph.addEdges('C','G');
graph.addEdges('B','F');
graph.addEdges('D','H');
graph.addEdges('D','G');

graph.bfs(graph, graph.getVertices()[0] , graph.printVertex); 
//graph.dfs(graph, graph.printVertex)

