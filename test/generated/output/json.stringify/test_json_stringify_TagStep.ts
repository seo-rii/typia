import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TagStep } from "../../../structures/TagStep";

export const test_json_stringify_TagStep = _test_json_stringify<TagStep>(
    TagStep,
)((input) =>
    ((input: Array<TagStep.Type>): string => {
        const $number = (typia.json.stringify as any).number;
        return `[${input
            .map(
                (elem: any) =>
                    `{"exclusiveMinimum":${$number(
                        (elem as any).exclusiveMinimum,
                    )},"minimum":${$number(
                        (elem as any).minimum,
                    )},"range":${$number(
                        (elem as any).range,
                    )},"multipleOf":${$number((elem as any).multipleOf)}}`,
            )
            .join(",")}]`;
    })(input),
);
