"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyVariableDeclarator = exports.dummyBlockExpression = exports.dummyFunctionDeclaration = exports.dummyFunctionExpression = exports.dummyPrimitive = exports.dummyUnaryExpression = exports.dummyBinaryExpression = exports.dummyArrayExpression = exports.dummyConditionalExpression = exports.dummyLogicalExpression = exports.dummyReturnStatement = exports.dummyProgram = exports.dummyArrowFunctionExpression = exports.dummyBlockStatement = exports.dummyStatement = exports.dummyExpressionStatement = exports.dummyCallExpression = exports.dummyExpression = exports.dummyLiteral = exports.dummyIdentifier = exports.dummyLocation = void 0;
const DUMMY_STRING = '__DUMMY__';
const DUMMY_UNARY_OPERATOR = '!';
const DUMMY_LOGICAL_OPERATOR = '||';
const DUMMY_BINARY_OPERATOR = '+';
exports.dummyLocation = () => ({
    start: { line: -1, column: -1 },
    end: { line: -1, column: -1 }
});
exports.dummyIdentifier = () => ({
    type: 'Identifier',
    name: DUMMY_STRING
});
exports.dummyLiteral = () => ({
    type: 'Literal',
    value: DUMMY_STRING,
    loc: exports.dummyLocation()
});
exports.dummyExpression = () => exports.dummyLiteral();
exports.dummyCallExpression = () => ({
    type: 'CallExpression',
    callee: exports.dummyExpression(),
    arguments: [],
    loc: exports.dummyLocation(),
    optional: false
});
exports.dummyExpressionStatement = () => ({
    type: 'ExpressionStatement',
    expression: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
exports.dummyStatement = () => exports.dummyExpressionStatement();
exports.dummyBlockStatement = () => ({
    type: 'BlockStatement',
    body: [],
    loc: exports.dummyLocation()
});
exports.dummyArrowFunctionExpression = () => ({
    type: 'ArrowFunctionExpression',
    expression: false,
    generator: false,
    params: [],
    body: exports.dummyBlockStatement(),
    loc: exports.dummyLocation()
});
exports.dummyProgram = () => ({
    type: 'Program',
    body: [],
    loc: exports.dummyLocation(),
    sourceType: 'module'
});
exports.dummyReturnStatement = () => ({
    type: 'ReturnStatement',
    argument: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
/*
export const property = (): es.Property => ({
  type: 'Property',
  method: false,
  shorthand: false,
  computed: false,
  key: dummyIdentifier(),
  value: dummyExpression(),
  kind: 'init'
})

export const objectExpression = (properties: es.Property[]): es.ObjectExpression => ({
  type: 'ObjectExpression',
  properties
})

export const mutateToCallExpression = (
  node: es.Node,
  callee: es.Expression,
  args: es.Expression[]
) => {
  node.type = 'CallExpression'
  node = node as es.CallExpression
  node.callee = callee
  node.arguments = args
}
*/
exports.dummyLogicalExpression = () => ({
    type: 'LogicalExpression',
    operator: DUMMY_LOGICAL_OPERATOR,
    left: exports.dummyExpression(),
    right: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
exports.dummyConditionalExpression = () => ({
    type: 'ConditionalExpression',
    test: exports.dummyExpression(),
    consequent: exports.dummyExpression(),
    alternate: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
exports.dummyArrayExpression = () => ({
    type: 'ArrayExpression',
    elements: []
});
exports.dummyBinaryExpression = () => ({
    type: 'BinaryExpression',
    operator: DUMMY_BINARY_OPERATOR,
    left: exports.dummyExpression(),
    right: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
exports.dummyUnaryExpression = () => ({
    type: 'UnaryExpression',
    operator: DUMMY_UNARY_OPERATOR,
    prefix: true,
    argument: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
// primitive: undefined is a possible value
exports.dummyPrimitive = () => exports.dummyLiteral();
exports.dummyFunctionExpression = () => ({
    type: 'FunctionExpression',
    id: exports.dummyIdentifier(),
    params: [],
    body: exports.dummyBlockStatement(),
    loc: exports.dummyLocation()
});
exports.dummyFunctionDeclaration = () => ({
    type: 'FunctionDeclaration',
    id: exports.dummyIdentifier(),
    params: [],
    body: exports.dummyBlockStatement(),
    loc: exports.dummyLocation()
});
exports.dummyBlockExpression = () => ({
    type: 'BlockExpression',
    body: [],
    loc: exports.dummyLocation()
});
exports.dummyVariableDeclarator = () => ({
    type: 'VariableDeclarator',
    id: exports.dummyIdentifier(),
    init: exports.dummyExpression(),
    loc: exports.dummyLocation()
});
//# sourceMappingURL=dummyAstCreator.js.map