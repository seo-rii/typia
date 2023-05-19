import type ts from "typescript/lib/tsclibrary";

import { IdentifierFactory } from "../factories/IdentifierFactory";
import { StatementFactory } from "../factories/StatementFactory";
import { TypeFactory } from "../factories/TypeFactory";

import { IProject } from "../transformers/IProject";

import { ValidateProgrammer } from "./ValidateProgrammer";

export namespace ValidateParseProgrammer {
    /**
     * @deprecated Use `write()` function instead
     */
    export const generate =
        (project: IProject, modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            write(project)(modulo)(type, name);

    export const write =
        (p: IProject) =>
        (modulo: ts.LeftHandSideExpression) =>
        (type: ts.Type, name?: string) =>
            p.tsc.factory.createArrowFunction(
                undefined,
                undefined,
                [
                    IdentifierFactory.parameter(p.tsc)(
                        "input",
                        TypeFactory.keyword(p.tsc)("string"),
                    ),
                ],
                p.tsc.factory.createTypeReferenceNode(
                    `typia.IValidation<typia.Primitive<${
                        name ?? TypeFactory.getFullName(p)(type)
                    }>>`,
                ),
                undefined,
                p.tsc.factory.createBlock([
                    StatementFactory.constant(p.tsc)(
                        "validate",
                        ValidateProgrammer.write({
                            ...p,
                            options: {
                                ...p.options,
                                functional: false,
                                numeric: false,
                            },
                        })(modulo)(false)(type, name),
                    ),
                    p.tsc.factory.createExpressionStatement(
                        p.tsc.factory.createBinaryExpression(
                            p.tsc.factory.createIdentifier("input"),
                            p.tsc.SyntaxKind.EqualsToken,
                            p.tsc.factory.createCallExpression(
                                p.tsc.factory.createIdentifier("JSON.parse"),
                                undefined,
                                [p.tsc.factory.createIdentifier("input")],
                            ),
                        ),
                    ),
                    StatementFactory.constant(p.tsc)(
                        "output",
                        p.tsc.factory.createCallExpression(
                            p.tsc.factory.createIdentifier("validate"),
                            undefined,
                            [p.tsc.factory.createIdentifier("input")],
                        ),
                    ),
                    p.tsc.factory.createReturnStatement(
                        p.tsc.factory.createAsExpression(
                            p.tsc.factory.createIdentifier("output"),
                            p.tsc.factory.createTypeReferenceNode("any"),
                        ),
                    ),
                ]),
            );
}