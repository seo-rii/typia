import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_assertClone_ToJsonTuple = _test_assertClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) =>
        ((
            input: any,
        ): typia.Primitive<
            [
                ToJsonTuple.IToJson<string>,
                ToJsonTuple.IToJson<number>,
                ToJsonTuple.IToJson<boolean>,
                ToJsonTuple.IObject,
            ]
        > => {
            const assert = (
                input: any,
            ): [
                ToJsonTuple.IToJson<string>,
                ToJsonTuple.IToJson<number>,
                ToJsonTuple.IToJson<boolean>,
                ToJsonTuple.IObject,
            ] => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (
                    input: any,
                ): input is [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ] => {
                    const $io0 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io1 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io2 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    const $io3 = (input: any): boolean =>
                        "function" === typeof input.toJSON;
                    return (
                        Array.isArray(input) &&
                        input.length === 4 &&
                        "object" === typeof input[0] &&
                        null !== input[0] &&
                        $io0(input[0]) &&
                        "object" === typeof input[1] &&
                        null !== input[1] &&
                        $io1(input[1]) &&
                        "object" === typeof input[2] &&
                        null !== input[2] &&
                        $io2(input[2]) &&
                        "object" === typeof input[3] &&
                        null !== input[3] &&
                        $io3(input[3])
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is [
                        ToJsonTuple.IToJson<string>,
                        ToJsonTuple.IToJson<number>,
                        ToJsonTuple.IToJson<boolean>,
                        ToJsonTuple.IObject,
                    ] => {
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        const $ao2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        const $ao3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            "function" === typeof input.toJSON ||
                            $guard(_exceptionable, {
                                path: _path + ".toJSON",
                                expected: "unknown",
                                value: input.toJSON,
                            });
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ToJsonTuple.IToJson<string>>, Resolve<ToJsonTuple.IToJson<number>>, Resolve<ToJsonTuple.IToJson<boolean>>, Resolve<ToJsonTuple.IObject>]",
                                    value: input,
                                })) &&
                            (input.length === 4 ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ToJsonTuple.IToJson<string>>, Resolve<ToJsonTuple.IToJson<number>>, Resolve<ToJsonTuple.IToJson<boolean>>, Resolve<ToJsonTuple.IObject>]",
                                    value: input,
                                })) &&
                            (("object" === typeof input[0] &&
                                null !== input[0]) ||
                                $guard(true, {
                                    path: _path + "[0]",
                                    expected:
                                        "Resolve<ToJsonTuple.IToJson<string>>",
                                    value: input[0],
                                })) &&
                            $ao0(input[0], _path + "[0]", true) &&
                            (("object" === typeof input[1] &&
                                null !== input[1]) ||
                                $guard(true, {
                                    path: _path + "[1]",
                                    expected:
                                        "Resolve<ToJsonTuple.IToJson<number>>",
                                    value: input[1],
                                })) &&
                            $ao1(input[1], _path + "[1]", true) &&
                            (("object" === typeof input[2] &&
                                null !== input[2]) ||
                                $guard(true, {
                                    path: _path + "[2]",
                                    expected:
                                        "Resolve<ToJsonTuple.IToJson<boolean>>",
                                    value: input[2],
                                })) &&
                            $ao2(input[2], _path + "[2]", true) &&
                            (("object" === typeof input[3] &&
                                null !== input[3]) ||
                                $guard(true, {
                                    path: _path + "[3]",
                                    expected: "Resolve<ToJsonTuple.IObject>",
                                    value: input[3],
                                })) &&
                            $ao3(input[3], _path + "[3]", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ],
            ): typia.Primitive<
                [
                    ToJsonTuple.IToJson<string>,
                    ToJsonTuple.IToJson<number>,
                    ToJsonTuple.IToJson<boolean>,
                    ToJsonTuple.IObject,
                ]
            > => {
                const $co0 = (input: any): any => ({
                    code: input.code as any,
                    name: input.name as any,
                });
                return Array.isArray(input) &&
                    input.length === 4 &&
                    true &&
                    true &&
                    true &&
                    true
                    ? ([
                          "object" === typeof input[0] &&
                          null !== input[0] &&
                          "function" === typeof input[0].toJSON
                              ? (input[0].toJSON() as any)
                              : (input[0] as any),
                          "object" === typeof input[1] &&
                          null !== input[1] &&
                          "function" === typeof input[1].toJSON
                              ? (input[1].toJSON() as any)
                              : (input[1] as any),
                          "object" === typeof input[2] &&
                          null !== input[2] &&
                          "function" === typeof input[2].toJSON
                              ? (input[2].toJSON() as any)
                              : (input[2] as any),
                          "object" === typeof input[3] &&
                          null !== input[3] &&
                          "function" === typeof input[3].toJSON
                              ? "object" === typeof input[3].toJSON() &&
                                null !== input[3].toJSON()
                                  ? $co0(input[3].toJSON())
                                  : (input[3].toJSON() as any)
                              : (input[3] as any),
                      ] as any)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
);