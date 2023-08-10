import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_validate_TemplateUnion = _test_validate<TemplateUnion>(
    TemplateUnion,
)((input: any): typia.IValidation<TemplateUnion> => {
    const errors = [] as any[];
    const __is = (input: any): input is TemplateUnion => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "string" === typeof input.prefix &&
            (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                RegExp(/^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/).test(
                    input.prefix,
                )) &&
            "string" === typeof input.postfix &&
            (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                RegExp(/^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/).test(
                    input.postfix,
                )) &&
            null !== input.middle &&
            undefined !== input.middle &&
            ("the_false_value" === input.middle ||
                "the_true_value" === input.middle ||
                ("string" === typeof input.middle &&
                    RegExp(
                        /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.middle))) &&
            null !== input.mixed &&
            undefined !== input.mixed &&
            ("the_A_value" === input.mixed ||
                "the_B_value" === input.mixed ||
                ("number" === typeof input.mixed &&
                    Number.isFinite(input.mixed)) ||
                "boolean" === typeof input.mixed ||
                ("string" === typeof input.mixed &&
                    RegExp(
                        /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                    ).test(input.mixed)) ||
                ("object" === typeof input.mixed &&
                    null !== input.mixed &&
                    $io2(input.mixed)));
        const $io2 = (input: any): boolean => "string" === typeof input.name;
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TemplateUnion => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ((Array.isArray(input.value) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TemplateUnion.Type>",
                            value: input.value,
                        })) &&
                        input.value
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".value[" +
                                                _index1 +
                                                "]",
                                            expected: "TemplateUnion.Type",
                                            value: elem,
                                        })) &&
                                        $vo1(
                                            elem,
                                            _path + ".value[" + _index1 + "]",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TemplateUnion.Type",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TemplateUnion.Type>",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    ("string" === typeof input.prefix &&
                        (RegExp(/^prefix_(.*)/).test(input.prefix) ||
                            RegExp(
                                /^prefix_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?$/,
                            ).test(input.prefix))) ||
                        $report(_exceptionable, {
                            path: _path + ".prefix",
                            expected:
                                "(`prefix_${number}` | `prefix_${string}`)",
                            value: input.prefix,
                        }),
                    ("string" === typeof input.postfix &&
                        (RegExp(/(.*)_postfix$/).test(input.postfix) ||
                            RegExp(
                                /^[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_postfix$/,
                            ).test(input.postfix))) ||
                        $report(_exceptionable, {
                            path: _path + ".postfix",
                            expected:
                                "(`${number}_postfix` | `${string}_postfix`)",
                            value: input.postfix,
                        }),
                    (null !== input.middle ||
                        $report(_exceptionable, {
                            path: _path + ".middle",
                            expected:
                                '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                            value: input.middle,
                        })) &&
                        (undefined !== input.middle ||
                            $report(_exceptionable, {
                                path: _path + ".middle",
                                expected:
                                    '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                                value: input.middle,
                            })) &&
                        ("the_false_value" === input.middle ||
                            "the_true_value" === input.middle ||
                            ("string" === typeof input.middle &&
                                RegExp(
                                    /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                                ).test(input.middle)) ||
                            $report(_exceptionable, {
                                path: _path + ".middle",
                                expected:
                                    '("the_false_value" | "the_true_value" | `the_${number}_value`)',
                                value: input.middle,
                            })),
                    (null !== input.mixed ||
                        $report(_exceptionable, {
                            path: _path + ".mixed",
                            expected:
                                '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                            value: input.mixed,
                        })) &&
                        (undefined !== input.mixed ||
                            $report(_exceptionable, {
                                path: _path + ".mixed",
                                expected:
                                    '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                                value: input.mixed,
                            })) &&
                        ("the_A_value" === input.mixed ||
                            "the_B_value" === input.mixed ||
                            ("number" === typeof input.mixed &&
                                Number.isFinite(input.mixed)) ||
                            "boolean" === typeof input.mixed ||
                            ("string" === typeof input.mixed &&
                                RegExp(
                                    /^the_[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?_value$/,
                                ).test(input.mixed)) ||
                            ((("object" === typeof input.mixed &&
                                null !== input.mixed) ||
                                $report(_exceptionable, {
                                    path: _path + ".mixed",
                                    expected:
                                        '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                                    value: input.mixed,
                                })) &&
                                $vo2(
                                    input.mixed,
                                    _path + ".mixed",
                                    true && _exceptionable,
                                )) ||
                            $report(_exceptionable, {
                                path: _path + ".mixed",
                                expected:
                                    '("the_A_value" | "the_B_value" | __type | `the_${number}_value` | boolean | number)',
                                value: input.mixed,
                            })),
                ].every((flag: boolean) => flag);
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "TemplateUnion",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "TemplateUnion",
                    value: input,
                })
            );
        })(input, "$input", true);
    }
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined,
    } as any;
});
