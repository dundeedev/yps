import { expect, test } from 'vitest'
import { formatDate } from '../utils/formatDate.js'

test('format date string', () => {
  expect(formatDate('2024-03-06T19:05:12.882Z')).toBe('6 March 2024')
})
