# path-combine

Combine 2 paths

## Install

npm install path-combine --save

## Usage

    var combine = require('path-combine');

    // returns "http://example.com/test" for all of the following cases
    
    combine('http://example.com', 'test');
    combine('http://example.com/', 'test');
    combine('http://example.com/', '/test');
    combine('http://example.com', '/test');

