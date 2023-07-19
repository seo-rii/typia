import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_json_isStringify_TagAtomicUnion =
    _test_json_isStringify<TagAtomicUnion>(TagAtomicUnion)(
        (input: TagAtomicUnion): string | null => {
            const is = (input: any): input is TagAtomicUnion => {
                const $io0 = (input: any): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value);
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    )
                );
            };
            const stringify = (input: TagAtomicUnion): string => {
                const $string = (typia.json.createIsStringify as any).string;
                const $number = (typia.json.createIsStringify as any).number;
                const $throws = (typia.json.createIsStringify as any).throws;
                const $so0 = (input: any): any =>
                    `{"value":${(() => {
                        if ("string" === typeof input.value)
                            return $string(input.value);
                        if ("number" === typeof input.value)
                            return $number(input.value);
                        $throws({
                            expected: "(number | string)",
                            value: input.value,
                        });
                    })()}}`;
                return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        },
    );
