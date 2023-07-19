import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_json_assertParse_ArrayRecursiveUnionExplicit =
    _test_json_assertParse<ArrayRecursiveUnionExplicit>(
        ArrayRecursiveUnionExplicit,
    )(typia.json.createAssertParse<ArrayRecursiveUnionExplicit>());
