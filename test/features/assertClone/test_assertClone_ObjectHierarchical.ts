import TSON from "../../../src";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ObjectHierarchical = _test_assertClone(
    "ObjectHierarchical",
    ObjectHierarchical.generate,
    (input) => TSON.assertClone(input),
    ObjectHierarchical.SPOILERS,
);