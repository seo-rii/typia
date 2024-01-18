import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_stringify_AtomicIntersection = _test_json_stringify(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  ((input: AtomicIntersection): string => {
    const $number = require("typia/lib/functional/$number").$number;
    const $string = require("typia/lib/functional/$string").$string;
    return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
  })(input),
);
