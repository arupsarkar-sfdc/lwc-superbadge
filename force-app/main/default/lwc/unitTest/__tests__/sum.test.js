import { sum } from '../sum'

describe('sum()', () => {
    it('should add 10 and 10 returning 3', () => {
        expect(sum(10,10)).toBe(20)
        expect(sum(100,200)).not.toBeGreaterThan(300)
    })
})