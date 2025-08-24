import { map, pipe, prepend, join } from '@fxts/core'

function pathJoin(path: string): (...paths: string[]) => string
function pathJoin(path: string, ...paths: string[]): string

function pathJoin(path: string, ...paths: string[]) {
  if (paths.length === 0) return (...paths: string[]) => pathJoin(path, ...paths)

  return pipe(
    paths,
    map((path) => path.replace(/^\/+|\/+$/g, '')),
    prepend(path.replace(/\/$/, '')),
    join('/')
  )
}

export default pathJoin
