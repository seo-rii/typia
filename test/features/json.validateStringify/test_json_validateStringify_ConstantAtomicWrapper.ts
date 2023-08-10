import typia from "../../../src";
import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_json_validateStringify_ConstantAtomicWrapper =
    _test_json_validateStringify<ConstantAtomicWrapper>(ConstantAtomicWrapper)(
        (input) => typia.json.validateStringify<ConstantAtomicWrapper>(input),
    );
