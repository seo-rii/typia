import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_json_isStringify_ObjectUnionExplicitPointer =
    _test_json_isStringify<ObjectUnionExplicitPointer>(
        ObjectUnionExplicitPointer,
    )(typia.json.createIsStringify<ObjectUnionExplicitPointer>());
