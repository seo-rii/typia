import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_stringify_DynamicSimple =
    _test_json_stringify<DynamicSimple>(DynamicSimple)((input) =>
        ((input: DynamicSimple): string => {
            const $join = (typia.json.stringify as any).join;
            const $number = (typia.json.stringify as any).number;
            const $so0 = (input: any): any =>
                `{${Object.entries(input)
                    .map(([key, value]: [string, any]) => {
                        if (undefined === value) return "";
                        return `${JSON.stringify(key)}:${$number(value)}`;
                    })
                    .filter((str: any) => "" !== str)
                    .join(",")}}`;
            return $so0(input);
        })(input),
    );
