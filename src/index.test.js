var combine = require('./index');

describe("combine tests", () => {

    it('combines paths with no trailing slash and no leading slash', () => {
        var actual = combine('http://example.com', 'test');
        expect(actual).toBe('http://example.com/test');
    })

    it('combines paths with trailing slash with no leading slash', () => {
        var actual = combine('http://example.com/', 'test');
        expect(actual).toBe('http://example.com/test');
    })

    it('combines paths with trailing slash and leading slash', () => {
        var actual = combine('http://example.com/', '/test');
        expect(actual).toBe('http://example.com/test');
    })

    it('combines paths with no trailing slash and leading slash', () => {
        var actual = combine('http://example.com', '/test');
        expect(actual).toBe('http://example.com/test');
    })
})