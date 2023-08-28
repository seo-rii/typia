"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtobufValidateEncodeProgrammer = void 0;
const typescript_1 = __importDefault(require("typescript"));
const IdentifierFactory_1 = require("../../factories/IdentifierFactory");
const StatementFactory_1 = require("../../factories/StatementFactory");
const TypeFactory_1 = require("../../factories/TypeFactory");
const ValidateProgrammer_1 = require("../ValidateProgrammer");
const ProtobufEncodeProgrammer_1 = require("./ProtobufEncodeProgrammer");
var ProtobufValidateEncodeProgrammer;
(function (ProtobufValidateEncodeProgrammer) {
    ProtobufValidateEncodeProgrammer.write = (project) => (modulo) => (type, name) => typescript_1.default.factory.createArrowFunction(undefined, undefined, [
        IdentifierFactory_1.IdentifierFactory.parameter("input", typescript_1.default.factory.createTypeReferenceNode(name ??
            TypeFactory_1.TypeFactory.getFullName(project.checker)(type))),
    ], typescript_1.default.factory.createTypeReferenceNode("typia.IValidation<Uint8Array>"), undefined, typescript_1.default.factory.createBlock([
        StatementFactory_1.StatementFactory.constant("validate", ValidateProgrammer_1.ValidateProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: true,
            },
        })(modulo)(false)(type, name)),
        StatementFactory_1.StatementFactory.constant("encode", ProtobufEncodeProgrammer_1.ProtobufEncodeProgrammer.write({
            ...project,
            options: {
                ...project.options,
                functional: false,
                numeric: false,
            },
        })(modulo)(type, name)),
        StatementFactory_1.StatementFactory.constant("output", typescript_1.default.factory.createAsExpression(typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("validate"), undefined, [typescript_1.default.factory.createIdentifier("input")]), TypeFactory_1.TypeFactory.keyword("any"))),
        typescript_1.default.factory.createIfStatement(typescript_1.default.factory.createIdentifier("output.success"), typescript_1.default.factory.createExpressionStatement(typescript_1.default.factory.createBinaryExpression(typescript_1.default.factory.createIdentifier("output.data"), typescript_1.default.SyntaxKind.EqualsToken, typescript_1.default.factory.createCallExpression(typescript_1.default.factory.createIdentifier("encode"), undefined, [typescript_1.default.factory.createIdentifier("input")])))),
        typescript_1.default.factory.createReturnStatement(typescript_1.default.factory.createIdentifier("output")),
    ]));
})(ProtobufValidateEncodeProgrammer || (exports.ProtobufValidateEncodeProgrammer = ProtobufValidateEncodeProgrammer = {}));
