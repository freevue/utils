// function createTreeWalker(show: number): (node: Node) => Generator<Node>
// function createTreeWalker(show: number, node: Node): Generator<Node>

function* createTreeWalker(show: number, node?: Node) {
  if (document === undefined) throw new Error('브라우저 환경에서만 작동합니다.')

  if (node === undefined) return (currentNode: Node) => createTreeWalker(show, currentNode)

  const walker = document.createTreeWalker(node, show)

  while (walker.nextNode()) {
    yield walker.currentNode
  }
}

export default createTreeWalker
