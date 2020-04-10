# path-combine

Combine 2 url paths (no dependencies)

## Install

npm i path-combine --save

## Usage
   ES module
   ```
   import combine from 'path-combine'
   ```
   or 
   
   common js
   ```
   const combine = require('path-combine');
   ```

   ```
   // returns "http://example.com/test" for all of the following cases    
   combine('http://example.com', 'test');
   combine('http://example.com/', 'test');
   combine('http://example.com/', '/test');
   combine('http://example.com', '/test');
   ```

