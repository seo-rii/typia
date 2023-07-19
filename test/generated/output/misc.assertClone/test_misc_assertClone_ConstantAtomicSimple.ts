import typia from "../../../../src";
import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_misc_assertClone_ConstantAtomicSimple =
    _test_misc_assertClone<ConstantAtomicSimple>(ConstantAtomicSimple)(
        (input) =>
            ((input: any): typia.Primitive<[false, true, 2, "three"]> => {
                const assert = (input: any): [false, true, 2, "three"] => {
                    const __is = (
                        input: any,
                    ): input is [false, true, 2, "three"] => {
                        return (
                            Array.isArray(input) &&
                            input.length === 4 &&
                            false === input[0] &&
                            true === input[1] &&
                            2 === input[2] &&
                            "three" === input[3]
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is [false, true, 2, "three"] => {
                            const $guard = (typia.misc.assertClone as any)
                                .guard;
                            return (
                                ((Array.isArray(input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ConstantAtomicSimple",
                                        value: input,
                                    })) &&
                                    (input.length === 4 ||
                                        $guard(true, {
                                            path: _path + "",
                                            expected:
                                                '[false, true, 2, "three"]',
                                            value: input,
                                        })) &&
                                    (false === input[0] ||
                                        $guard(true, {
                                            path: _path + "[0]",
                                            expected: "false",
                                            value: input[0],
                                        })) &&
                                    (true === input[1] ||
                                        $guard(true, {
                                            path: _path + "[1]",
                                            expected: "true",
                                            value: input[1],
                                        })) &&
                                    (2 === input[2] ||
                                        $guard(true, {
                                            path: _path + "[2]",
                                            expected: "2",
                                            value: input[2],
                                        })) &&
                                    ("three" === input[3] ||
                                        $guard(true, {
                                            path: _path + "[3]",
                                            expected: '"three"',
                                            value: input[3],
                                        }))) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ConstantAtomicSimple",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const clone = (
                    input: [false, true, 2, "three"],
                ): typia.Primitive<[false, true, 2, "three"]> => {
                    return Array.isArray(input) &&
                        input.length === 4 &&
                        false === input[0] &&
                        true === input[1] &&
                        2 === input[2] &&
                        "three" === input[3]
                        ? ([
                              input[0] as any,
                              input[1] as any,
                              input[2] as any,
                              input[3] as any,
                          ] as any)
                        : (input as any);
                };
                assert(input);
                const output = clone(input);
                return output;
            })(input),
    );
