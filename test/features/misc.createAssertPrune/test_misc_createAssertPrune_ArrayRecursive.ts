import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_assertPrune_ArrayRecursive =
    _test_misc_assertPrune<ArrayRecursive>(ArrayRecursive)(
        typia.misc.createAssertPrune<ArrayRecursive>(),
    );
