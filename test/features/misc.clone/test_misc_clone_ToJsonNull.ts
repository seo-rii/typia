import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_misc_clone_ToJsonNull = _test_misc_clone<ToJsonNull>(
    ToJsonNull,
)((input) => typia.misc.clone<ToJsonNull>(input));
