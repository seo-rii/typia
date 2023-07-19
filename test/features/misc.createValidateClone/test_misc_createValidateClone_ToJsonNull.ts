import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_misc_validateClone_ToJsonNull =
    _test_misc_validateClone<ToJsonNull>(ToJsonNull)(
        typia.misc.createValidateClone<ToJsonNull>(),
    );
