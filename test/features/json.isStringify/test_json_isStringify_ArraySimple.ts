import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_isStringify_ArraySimple =
    _test_json_isStringify<ArraySimple>(ArraySimple)((input) =>
        typia.json.isStringify<ArraySimple>(input),
    );
