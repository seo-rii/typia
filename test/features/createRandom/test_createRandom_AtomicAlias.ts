import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_random_AtomicAlias = _test_random<AtomicAlias>(AtomicAlias)({
    random: typia.createRandom<AtomicAlias>(),
    assert: typia.createAssert<AtomicAlias>(),
});
