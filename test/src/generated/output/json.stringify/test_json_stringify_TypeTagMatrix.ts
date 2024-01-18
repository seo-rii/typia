import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_stringify_TypeTagMatrix = _test_json_stringify(
  "TypeTagMatrix",
)<TypeTagMatrix>(TypeTagMatrix)((input) =>
  ((input: TypeTagMatrix): string => {
    const $string = require("typia/lib/functional/$string").$string;
    const $so0 = (input: any): any =>
      `{"matrix":${`[${input.matrix
        .map(
          (elem: any) =>
            `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
        )
        .join(",")}]`}}`;
    return $so0(input);
  })(input),
);
