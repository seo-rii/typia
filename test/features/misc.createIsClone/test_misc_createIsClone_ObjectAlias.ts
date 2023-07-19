import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_misc_isClone_ObjectAlias = _test_misc_isClone<ObjectAlias>(
    ObjectAlias,
)(typia.misc.createIsClone<ObjectAlias>());
