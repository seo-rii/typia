import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_json_validateParse_DynamicUndefined =
    _test_json_validateParse<DynamicUndefined>(DynamicUndefined)(
        typia.json.createValidateParse<DynamicUndefined>(),
    );
