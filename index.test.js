var combine = require('./index');

describe("combine tests", () => {

    it('combines no trailing slash with no leading slash', () => {
        var actual = combine('http://example.com', 'test');
        expect(actual).toBe('http://example.com/test');
    })

})