import typia from "../../../src";
import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_prune_DynamicComposite =
    _test_misc_prune<DynamicComposite>(DynamicComposite)(
        typia.misc.createPrune<DynamicComposite>(),
    );
