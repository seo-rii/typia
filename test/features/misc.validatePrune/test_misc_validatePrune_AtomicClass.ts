import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_misc_validatePrune_AtomicClass =
    _test_misc_validatePrune<AtomicClass>(AtomicClass)((input) =>
        typia.misc.validatePrune(input),
    );
