import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagRange } from "../../../structures/TagRange";

export const test_json_stringify_TagRange = _test_json_stringify<TagRange>(
    TagRange,
)((input: TagRange): string => {
    const $number = (typia.json.createStringify as any).number;
    return `[${input
        .map(
            (elem: any) =>
                `{"greater":${$number(
                    (elem as any).greater,
                )},"greater_equal":${$number(
                    (elem as any).greater_equal,
                )},"less":${$number((elem as any).less)},"less_equal":${$number(
                    (elem as any).less_equal,
                )},"greater_less":${$number(
                    (elem as any).greater_less,
                )},"greater_equal_less":${$number(
                    (elem as any).greater_equal_less,
                )},"greater_less_equal":${$number(
                    (elem as any).greater_less_equal,
                )},"greater_equal_less_equal":${$number(
                    (elem as any).greater_equal_less_equal,
                )}}`,
        )
        .join(",")}]`;
});
