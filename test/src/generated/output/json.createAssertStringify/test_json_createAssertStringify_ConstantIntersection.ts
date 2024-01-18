import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";

export const test_json_createAssertStringify_ConstantIntersection =
  _test_json_assertStringify("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )((input: any): string => {
    const assert = (input: any): ConstantIntersection => {
      const __is = (input: any): input is ConstantIntersection => {
        return (
          Array.isArray(input) &&
          input.length === 3 &&
          false === input[0] &&
          1 === input[1] &&
          "two" === input[2]
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ConstantIntersection => {
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.json.createAssertStringify",
          );
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ConstantIntersection",
                value: input,
              })) &&
              (input.length === 3 ||
                $guard(true, {
                  path: _path + "",
                  expected: '[false, 1, "two"]',
                  value: input,
                })) &&
              (false === input[0] ||
                $guard(true, {
                  path: _path + "[0]",
                  expected: "false",
                  value: input[0],
                })) &&
              (1 === input[1] ||
                $guard(true, {
                  path: _path + "[1]",
                  expected: "1",
                  value: input[1],
                })) &&
              ("two" === input[2] ||
                $guard(true, {
                  path: _path + "[2]",
                  expected: '"two"',
                  value: input[2],
                }))) ||
            $guard(true, {
              path: _path + "",
              expected: "ConstantIntersection",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    };
    const stringify = (input: ConstantIntersection): string => {
      const $number = require("typia/lib/functional/$number").$number;
      const $string = require("typia/lib/functional/$string").$string;
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.json.createAssertStringify",
      );
      return `[${input[0]},${$number(input[1])},${(() => {
        if ("string" === typeof input[2]) return $string(input[2]);
        if ("string" === typeof input[2]) return '"' + input[2] + '"';
        $throws({
          expected: '"two"',
          value: input[2],
        });
      })()}]`;
    };
    return stringify(assert(input));
  });
