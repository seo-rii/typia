import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_json_assertParse_ArrayAtomicSimple =
    _test_json_assertParse<ArrayAtomicSimple>(ArrayAtomicSimple)(
        typia.json.createAssertParse<ArrayAtomicSimple>(),
    );
