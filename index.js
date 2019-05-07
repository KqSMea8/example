const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const generate = require('babel-generator').default;

const code = `function square(hexie) {
  return hexie * hexie;
}
console.log(square(1));
`

const ast = babylon.parse(code);
traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier' && path.node.name === 'hexie') {
      path.node.name = 'x'
    }
  }
})
console.log(generate(ast, {}, code).code);