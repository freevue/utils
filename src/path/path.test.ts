import { join } from './index'

test('Join ', () => {
  expect(join('/A', '/B')).toBe('/A/B')
  expect(join('A', '/B/C')).toBe('A/B/C')
  expect(join('A', 'B/C/D')).toBe('A/B/C/D')
  expect(join('/A', '/B', '/C')).toBe('/A/B/C')
  expect(join('/A', '/B', 'C')).toBe('/A/B/C')
  expect(join('/A', 'B', 'C')).toBe('/A/B/C')
  expect(join('/A')('B', 'C')).toBe('/A/B/C')
  expect(join('/A')('/B', '/C')).toBe('/A/B/C')
})
