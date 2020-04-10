import { combine } from './index';

describe("combine tests", () => {

   it('combines paths with no trailing slash and no leading slash', () => {
      const actual = combine('http://example.com', 'test');
      expect(actual).toBe('http://example.com/test');
   })

   it('combines paths with trailing slash with no leading slash', () => {
      const actual = combine('http://example.com/', 'test');
      expect(actual).toBe('http://example.com/test');
   })

   it('combines paths with trailing slash and leading slash', () => {
      const actual = combine('http://example.com/', '/test');
      expect(actual).toBe('http://example.com/test');
   })

   it('combines paths with no trailing slash and leading slash', () => {
      const actual = combine('http://example.com', '/test');
      expect(actual).toBe('http://example.com/test');
   })

   it('returns path1 when path2 is not defined', () => {
      const actual = combine('http://example.com');
      expect(actual).toBe('http://example.com');
   })
})