"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whileStatement = exports.ifStatement = exports.variableDeclarator = exports.variableDeclaration = exports.arrowFunctionExpression = exports.blockExpression = exports.functionDeclaration = exports.functionDeclarationExpression = exports.primitive = exports.unaryExpression = exports.binaryExpression = exports.assignmentExpression = exports.arrayExpression = exports.conditionalExpression = exports.mutateToConditionalExpression = exports.logicalExpression = exports.mutateToMemberExpression = exports.mutateToReturnStatement = exports.mutateToExpressionStatement = exports.mutateToAssignmentExpression = exports.mutateToCallExpression = exports.objectExpression = exports.property = exports.returnStatement = exports.program = exports.blockStatement = exports.functionExpression = exports.blockArrowFunction = exports.expressionStatement = exports.callExpression = exports.constantDeclaration = exports.declaration = exports.memberExpression = exports.literal = exports.identifier = exports.locationDummyNode = exports.getVariableDecarationName = void 0;
exports.getVariableDecarationName = (decl) => decl.declarations[0].id.name;
exports.locationDummyNode = (line, column) => exports.literal('Dummy', { start: { line, column }, end: { line, column } });
exports.identifier = (name, loc) => ({
    type: 'Identifier',
    name,
    loc
});
exports.literal = (value, loc) => ({
    type: 'Literal',
    value,
    loc
});
exports.memberExpression = (object, property) => ({
    type: 'MemberExpression',
    object,
    computed: typeof property === 'number',
    optional: false,
    property: typeof property === 'number' ? exports.literal(property) : exports.identifier(property)
});
exports.declaration = (name, kind, init, loc) => ({
    type: 'VariableDeclaration',
    declarations: [
        {
            type: 'VariableDeclarator',
            id: exports.identifier(name),
            init
        }
    ],
    kind,
    loc
});
exports.constantDeclaration = (name, init, loc) => exports.declaration(name, 'const', init, loc);
exports.callExpression = (callee, args, loc) => ({
    type: 'CallExpression',
    callee,
    arguments: args,
    optional: false,
    loc
});
exports.expressionStatement = (expression) => ({
    type: 'ExpressionStatement',
    expression
});
exports.blockArrowFunction = (params, body, loc) => ({
    type: 'ArrowFunctionExpression',
    expression: false,
    generator: false,
    params,
    body: Array.isArray(body) ? exports.blockStatement(body) : body,
    loc
});
exports.functionExpression = (params, body, loc) => ({
    type: 'FunctionExpression',
    id: null,
    async: false,
    generator: false,
    params,
    body: Array.isArray(body) ? exports.blockStatement(body) : body,
    loc
});
exports.blockStatement = (body) => ({
    type: 'BlockStatement',
    body
});
exports.program = (body) => ({
    type: 'Program',
    sourceType: 'module',
    body
});
exports.returnStatement = (argument, loc) => ({
    type: 'ReturnStatement',
    argument,
    loc
});
exports.property = (key, value) => ({
    type: 'Property',
    method: false,
    shorthand: false,
    computed: false,
    key: exports.identifier(key),
    value,
    kind: 'init'
});
exports.objectExpression = (properties) => ({
    type: 'ObjectExpression',
    properties
});
exports.mutateToCallExpression = (node, callee, args) => {
    node.type = 'CallExpression';
    node = node;
    node.callee = callee;
    node.arguments = args;
};
exports.mutateToAssignmentExpression = (node, left, right) => {
    node.type = 'AssignmentExpression';
    node = node;
    node.operator = '=';
    node.left = left;
    node.right = right;
};
exports.mutateToExpressionStatement = (node, expr) => {
    node.type = 'ExpressionStatement';
    node = node;
    node.expression = expr;
};
exports.mutateToReturnStatement = (node, expr) => {
    node.type = 'ReturnStatement';
    node = node;
    node.argument = expr;
};
exports.mutateToMemberExpression = (node, obj, prop) => {
    node.type = 'MemberExpression';
    node = node;
    node.object = obj;
    node.property = prop;
    node.computed = false;
};
exports.logicalExpression = (operator, left, right, loc) => ({
    type: 'LogicalExpression',
    operator,
    left,
    right,
    loc
});
exports.mutateToConditionalExpression = (node, test, consequent, alternate) => {
    node.type = 'ConditionalExpression';
    node = node;
    node.test = test;
    node.consequent = consequent;
    node.alternate = alternate;
};
exports.conditionalExpression = (test, consequent, alternate, loc) => ({
    type: 'ConditionalExpression',
    test,
    consequent,
    alternate,
    loc
});
exports.arrayExpression = (elements) => ({
    type: 'ArrayExpression',
    elements
});
exports.assignmentExpression = (left, right) => ({
    type: 'AssignmentExpression',
    operator: '=',
    left,
    right
});
exports.binaryExpression = (operator, left, right, loc) => ({
    type: 'BinaryExpression',
    operator,
    left,
    right,
    loc
});
exports.unaryExpression = (operator, argument, loc) => ({
    type: 'UnaryExpression',
    operator,
    prefix: true,
    argument,
    loc
});
// primitive: undefined is a possible value
exports.primitive = (value) => {
    return value === undefined ? exports.identifier('undefined') : exports.literal(value);
};
exports.functionDeclarationExpression = (id, params, body, loc) => ({
    type: 'FunctionExpression',
    id,
    params,
    body,
    loc
});
exports.functionDeclaration = (id, params, body, loc) => ({
    type: 'FunctionDeclaration',
    id,
    params,
    body,
    loc
});
exports.blockExpression = (body, loc) => ({
    type: 'BlockExpression',
    body,
    loc
});
exports.arrowFunctionExpression = (params, body, loc) => ({
    type: 'ArrowFunctionExpression',
    expression: body.type !== 'BlockStatement',
    generator: false,
    params,
    body,
    loc
});
exports.variableDeclaration = (declarations, loc) => ({
    type: 'VariableDeclaration',
    kind: 'const',
    declarations,
    loc
});
exports.variableDeclarator = (id, init, loc) => ({
    type: 'VariableDeclarator',
    id,
    init,
    loc
});
exports.ifStatement = (test, consequent, alternate, loc) => ({
    type: 'IfStatement',
    test,
    consequent,
    alternate,
    loc
});
exports.whileStatement = (body, test, loc) => ({
    type: 'WhileStatement',
    test,
    body,
    loc
});
//# sourceMappingURL=astCreator.js.map