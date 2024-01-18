import typia from "typia";

import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_assertGuard_ObjectOptional = _test_assertGuard(
  "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input) =>
  ((input: any): asserts input is ObjectOptional => {
    const __is = (input: any): input is ObjectOptional => {
      const $io0 = (input: any): boolean =>
        (undefined === input.id || "string" === typeof input.id) &&
        (undefined === input.name || "string" === typeof input.name) &&
        (undefined === input.email || "string" === typeof input.email) &&
        (undefined === input.sequence ||
          ("number" === typeof input.sequence &&
            Number.isFinite(input.sequence)));
      return (
        "object" === typeof input &&
        null !== input &&
        false === Array.isArray(input) &&
        $io0(input)
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ObjectOptional => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.assertGuard",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          (undefined === input.id ||
            "string" === typeof input.id ||
            $guard(_exceptionable, {
              path: _path + ".id",
              expected: "(string | undefined)",
              value: input.id,
            })) &&
          (undefined === input.name ||
            "string" === typeof input.name ||
            $guard(_exceptionable, {
              path: _path + ".name",
              expected: "(string | undefined)",
              value: input.name,
            })) &&
          (undefined === input.email ||
            "string" === typeof input.email ||
            $guard(_exceptionable, {
              path: _path + ".email",
              expected: "(string | undefined)",
              value: input.email,
            })) &&
          (undefined === input.sequence ||
            ("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)) ||
            $guard(_exceptionable, {
              path: _path + ".sequence",
              expected: "(number | undefined)",
              value: input.sequence,
            }));
        return (
          ((("object" === typeof input &&
            null !== input &&
            false === Array.isArray(input)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectOptional",
              value: input,
            })) &&
            $ao0(input, _path + "", true)) ||
          $guard(true, {
            path: _path + "",
            expected: "ObjectOptional",
            value: input,
          })
        );
      })(input, "$input", true);
  })(input),
);
