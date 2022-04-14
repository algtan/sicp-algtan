"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nodeToValue = exports.valueToExpression = void 0;
const context_1 = require("../mocks/context");
const parser_1 = require("../parser/parser");
const builtin = require("./lib");
const stepper_1 = require("./stepper");
const util = require("./util");
// the value in the parameter is not an ast node, but a underlying javascript value
// return by evaluateBinaryExpression and evaluateUnaryExpression.
function valueToExpression(value, context) {
    const programString = (typeof value === 'string' ? `"` + value + `"` : String(value)) + ';';
    const program = parser_1.parse(programString, context ? context : context_1.mockContext(2));
    return program.body[0].expression;
}
exports.valueToExpression = valueToExpression;
function nodeToValue(node) {
    return node.type === 'Literal'
        ? node.value
        : util.isBuiltinFunction(node)
            ? builtin[node.name]
            : // tslint:disable-next-line
                eval(stepper_1.codify(node));
}
exports.nodeToValue = nodeToValue;
//# sourceMappingURL=converter.js.map