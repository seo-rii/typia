import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_stringify_TemplateConstant =
    _test_json_stringify<TemplateConstant>(TemplateConstant)((input) =>
        ((input: Array<TemplateConstant.Type>): string => {
            const $string = (typia.json.stringify as any).string;
            const $throws = (typia.json.stringify as any).throws;
            const $so0 = (input: any): any =>
                `{"prefix":${(() => {
                    if ("string" === typeof input.prefix)
                        return $string(input.prefix);
                    if ("string" === typeof input.prefix)
                        return '"' + input.prefix + '"';
                    $throws({
                        expected: '("prefix_A" | "prefix_B" | "prefix_C")',
                        value: input.prefix,
                    });
                })()},"postfix":${(() => {
                    if ("string" === typeof input.postfix)
                        return $string(input.postfix);
                    if ("string" === typeof input.postfix)
                        return '"' + input.postfix + '"';
                    $throws({
                        expected: '("1_postfix" | "2_postfix" | "3_postfix")',
                        value: input.postfix,
                    });
                })()},"combined":${(() => {
                    if ("string" === typeof input.combined)
                        return $string(input.combined);
                    if ("string" === typeof input.combined)
                        return '"' + input.combined + '"';
                    $throws({
                        expected:
                            '("the_1_value_with_label_A" | "the_1_value_with_label_B" | "the_1_value_with_label_C" | "the_2_value_with_label_A" | "the_2_value_with_label_B" | "the_2_value_with_label_C" | "the_3_value_with_label_A" | "the_3_value_with_label_B" | "the_3_value_with_label_C")',
                        value: input.combined,
                    });
                })()}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        })(input),
    );
