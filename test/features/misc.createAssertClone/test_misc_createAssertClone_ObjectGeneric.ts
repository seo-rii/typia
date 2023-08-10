import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_misc_assertClone_ObjectGeneric =
    _test_misc_assertClone<ObjectGeneric>(ObjectGeneric)(
        typia.misc.createAssertClone<ObjectGeneric>(),
    );
