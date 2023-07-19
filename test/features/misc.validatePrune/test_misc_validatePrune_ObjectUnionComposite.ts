import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_validatePrune_ObjectUnionComposite =
    _test_misc_validatePrune<ObjectUnionComposite>(ObjectUnionComposite)(
        (input) => typia.misc.validatePrune(input),
    );
