// function createTreeWalker(show: number): (node: Node) => Generator<Node>
// function createTreeWalker(show: number, node: Node): Generator<Node>

function* createTreeWalker(show: number, node?: Node) {
  if (node === undefined) return (currentNode: Node) => createTreeWalker(show, currentNode)

  const walker = document.createTreeWalker(node, show)

  while (walker.nextNode()) {
    yield walker.currentNode
  }
}

export default createTreeWalker
