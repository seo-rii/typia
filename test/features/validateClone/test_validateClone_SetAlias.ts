import TSON from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_SetAlias = _test_validateClone(
    "SetAlias",
    SetAlias.generate,
    (input) => TSON.validateClone(input),
    SetAlias.SPOILERS,
);