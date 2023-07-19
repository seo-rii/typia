import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_assertParse_ArrayUnion =
    _test_json_assertParse<ArrayUnion>(ArrayUnion)((input) =>
        typia.json.assertParse<ArrayUnion>(input),
    );
