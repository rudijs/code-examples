// Graphs

// A collection made up of nodes aka vertices
// Nodes may or may not point to other nodes, these connections are known as edges

function createNode(key) {
  const children = [];

  return {
    key,
    children,
    addChild(node) {
      children.push(node);
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

      node1.addChild(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addChild(node1);
        // if we add another edge we need to then add a method to reconcile those as the same
        // and not count them twice if we provide an edges.length property
      }
    },

    print() {
      return nodes
        .map(({ key, children }) => {
          let result = key;

          if (children.length) {
            result += ` => ${children.map(node => node.key).join(" ")}`;
          }

          return result;
        })
        .join("\n");
    },

    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);

      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      function explore(node) {
        if (visited[node.key]) {
          return;
        }
        visitFn(node);
        visited[node.key] = true;

        node.children.forEach(node => {
          explore(node);
        });
      }

      explore(startingNode);
    }
  };
}

// see the image graph-breadth-first-search.png for a visual representation of the graph.
// we branch out from node A and visit all of its children before, climbing back to the top and go down another path
// run the code below and compare the console output to the graph image.
const graph = createGraph(true);
const nodes = ["a", "b", "c", "d", "e", "f"];
const edges = [
  ["a", "b"],
  ["a", "e"],
  ["a", "f"],
  ["b", "d"],
  ["b", "e"],
  ["c", "b"],
  ["d", "c"],
  ["d", "e"]
];

nodes.forEach(node => {
  graph.addNode(node);
});

edges.forEach(nodes => {
  graph.addEdge(...nodes);
});

graph.depthFirstSearch("a", node => {
  console.log(node.key);
});

exports.createNode = createNode;
exports.createGraph = createGraph;
