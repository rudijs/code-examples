// Graphs

// A collection made up of nodes aka vertices
// Nodes may or may not point to other nodes, these connections are known as edges

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,

    addNode(key) {
      nodes.push(createNode(key));
    },

    getNode(key) {
      return nodes.find(node => node.key === key);
    },

    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);

      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
        // if we add another edge we need to then add a method to reconcile those as the same
        // and not count them twice if we provide an edges.length property
      }
    },

    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;

          if (neighbors.length) {
            result += ` => ${neighbors
              .map(neighbor => neighbor.key)
              .join(" ")}`;
          }

          return result;
        })
        .join("\n");
    }
  };
}

const graph = createGraph(true);

// couple
graph.addNode("Bob");
graph.addNode("Alice");
// pets
graph.addNode("Ginger Megs"); // cat
graph.addNode("Little Megs"); // cat

// relationships

// happy couple
graph.addEdge("Bob", "Alice"); // both directions relationship
graph.addEdge("Alice", "Bob");
// both like their cats
graph.addEdge("Bob", "Ginger Megs");
graph.addEdge("Bob", "Little Megs");
graph.addEdge("Alice", "Ginger Megs");
graph.addEdge("Alice", "Little Megs");

// cats don't like each other

// Big Megs likes Bob
graph.addEdge("Ginger Megs", "Bob");
// Little Megs likes Alice
graph.addEdge("Little Megs", "Alice");

console.log(graph.print());
