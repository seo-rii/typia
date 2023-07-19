import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_isClone_ObjectPropertyNullable =
    _test_misc_isClone<ObjectPropertyNullable>(ObjectPropertyNullable)(
        typia.misc.createIsClone<ObjectPropertyNullable>(),
    );
