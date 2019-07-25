// module.exports = {
//   plugins: {
//     autoprefixer: {}
//   }
// }
module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 36,
      minPixelValue: 2,
      propWhiteList: []
    })
  ]
}