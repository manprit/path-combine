
module.exports = {
   presets: [],
   env: {
      test: {
         presets: [
            [
               '@babel/preset-env',
               {
                  modules: 'commonjs'
               }
            ]
         ]
      },
      cjs: {
         presets: [
            [
               '@babel/preset-env',
               {
                  modules: 'commonjs'
               }
            ]
         ]
      },
      esm: {
         presets: [
            [
               '@babel/preset-env',
               {
                  modules: false
               }
            ]
         ]
      }
   }
};
