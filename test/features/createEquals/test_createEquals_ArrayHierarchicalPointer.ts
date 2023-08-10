import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_equals_ArrayHierarchicalPointer =
    _test_equals<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        typia.createEquals<ArrayHierarchicalPointer>(),
    );
