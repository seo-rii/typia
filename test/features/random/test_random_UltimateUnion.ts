import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_random_UltimateUnion = _test_random<UltimateUnion>(
    UltimateUnion,
)({
    random: () => typia.random<UltimateUnion>(),
    assert: typia.createAssert<UltimateUnion>(),
});
