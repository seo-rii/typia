import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagType } from "../../../structures/TagType";

export const test_createAssert_TagType = _test_assert(
    "TagType",
    TagType.generate,
    (input: any): TagType => {
        const $guard = (typia.createAssert as any).guard;
        const $is_custom = (typia.createAssert as any).is_custom;
        const __is = (input: any): input is TagType => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.int &&
                Number.isFinite(input.int) &&
                parseInt(input.int) === input.int &&
                $is_custom(
                    "example",
                    "number",
                    "https://example.com",
                    input.int,
                ) &&
                "number" === typeof input.uint &&
                Number.isFinite(input.uint) &&
                parseInt(input.uint) === input.uint &&
                0 <= input.uint;
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagType => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.int &&
                        Number.isFinite(input.int) &&
                        (parseInt(input.int) === input.int ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected: "number (@type int)",
                                value: input.int,
                            })) &&
                        ($is_custom(
                            "example",
                            "number",
                            "https://example.com",
                            input.int,
                        ) ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected:
                                    "number (@example https://example.com)",
                                value: input.int,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".int",
                            expected: "number",
                            value: input.int,
                        })) &&
                    (("number" === typeof input.uint &&
                        Number.isFinite(input.uint) &&
                        (parseInt(input.uint) === input.uint ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number (@type uint)",
                                value: input.uint,
                            })) &&
                        (0 <= input.uint ||
                            $guard(_exceptionable, {
                                path: _path + ".uint",
                                expected: "number (@type uint)",
                                value: input.uint,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint",
                            expected: "number",
                            value: input.uint,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<TagType.Type>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagType.Type",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
    TagType.SPOILERS,
);