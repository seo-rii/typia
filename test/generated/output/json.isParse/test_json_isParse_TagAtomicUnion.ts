import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_json_isParse_TagAtomicUnion =
    _test_json_isParse<TagAtomicUnion>(TagAtomicUnion)((input) =>
        ((input: any): typia.Primitive<TagAtomicUnion> => {
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
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    );
