import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_stringify_ObjectGenericAlias =
    _test_json_stringify<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        ((input: ObjectGenericAlias.ISomething<string>): string => {
            const $string = (typia.json.stringify as any).string;
            return `{"value":${$string((input as any).value)}}`;
        })(input),
    );
