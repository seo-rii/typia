import typia from "../../../../src";
import { _test_assertParse } from "../../../internal/_test_assertParse";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_createAssertParse_DynamicUndefined = _test_assertParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input: string): typia.Primitive<DynamicUndefined> => {
        const assert = (input: any): DynamicUndefined => {
            const $guard = (typia.createAssertParse as any).guard;
            const $join = (typia.createAssertParse as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is DynamicUndefined => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    false === _exceptionable ||
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                (null !== value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    })) &&
                                (undefined === value ||
                                    $guard(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    }))
                            );
                        return true;
                    });
                return (
                    (("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<DynamicUndefined>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input);
    },
    DynamicUndefined.SPOILERS,
);