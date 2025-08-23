function join(path: string): (...paths: string[]) => string
function join(path: string, ...paths: string[]): string

function join(path: string, ...paths: string[]) {
  if (paths.length === 0) return (...paths: string[]) => join(path, ...paths)

  paths = paths.map((path) => path.replace(/^\/+|\/+$/g, ''))
  paths.unshift(path.replace(/\/$/, ''))

  return paths.join('/')
}

export default join
