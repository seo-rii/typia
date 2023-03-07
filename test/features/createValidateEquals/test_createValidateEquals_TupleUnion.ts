import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createValidateEquals_TupleUnion = _test_validateEquals(
    "TupleUnion",
    TupleUnion.generate,
    typia.createValidateEquals<TupleUnion>(),
);