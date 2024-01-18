import typia from "typia";

import { _test_random } from "../../../internal/_test_random";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_createRandom_TypeTagObjectUnion = _test_random(
  "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)({
  random: (
    generator: Partial<typia.IRandomGenerator> = (TypeTagObjectUnion as any)
      .RANDOM,
  ): typia.Resolved<TypeTagObjectUnion> => {
    const $generator = require("typia/lib/functional/$generator").$generator;
    const $ro0 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value:
        (generator?.customs ?? $generator.customs)?.number?.([
          {
            name: "Minimum<3>",
            kind: "minimum",
            value: 3,
          },
        ]) ?? (generator?.number ?? $generator.number)(3, 13),
    });
    const $ro1 = (_recursive: boolean = false, _depth: number = 0): any => ({
      value:
        (generator?.customs ?? $generator.customs)?.string?.([
          {
            name: "MinLength<3>",
            kind: "minLength",
            value: 3,
          },
          {
            name: "MaxLength<7>",
            kind: "maxLength",
            value: 7,
          },
        ]) ??
        (generator?.string ?? $generator.string)(
          (generator?.integer ?? $generator.integer)(3, 7),
        ),
    });
    return (generator?.array ?? $generator.array)(() =>
      (generator?.pick ?? $generator.pick)([() => $ro1(), () => $ro0()])(),
    );
  },
  assert: (input: any): TypeTagObjectUnion => {
    const __is = (input: any): input is TypeTagObjectUnion => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.value &&
        Number.isFinite(input.value) &&
        3 <= input.value;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.value &&
        3 <= input.value.length &&
        input.value.length <= 7;
      const $iu0 = (input: any): any =>
        (() => {
          if (
            "string" === typeof input.value &&
            3 <= input.value.length &&
            input.value.length <= 7
          )
            return $io1(input);
          else if (
            "number" === typeof input.value &&
            Number.isFinite(input.value) &&
            3 <= input.value
          )
            return $io0(input);
          else return false;
        })();
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $iu0(elem),
        )
      );
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is TypeTagObjectUnion => {
        const $guard = require("typia/lib/functional/$guard").$guard(
          "typia.createAssert",
        );
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("number" === typeof input.value &&
            (Number.isFinite(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number",
                value: input.value,
              })) &&
            (3 <= input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "number & Minimum<3>",
                value: input.value,
              }))) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(number & Minimum<3>)",
            value: input.value,
          });
        const $ao1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.value &&
            (3 <= input.value.length ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MinLength<3>",
                value: input.value,
              })) &&
            (input.value.length <= 7 ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "string & MaxLength<7>",
                value: input.value,
              }))) ||
          $guard(_exceptionable, {
            path: _path + ".value",
            expected: "(string & MinLength<3> & MaxLength<7>)",
            value: input.value,
          });
        const $au0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (
              "string" === typeof input.value &&
              (3 <= input.value.length ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MinLength<3>",
                  value: input.value,
                })) &&
              (input.value.length <= 7 ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "string & MaxLength<7>",
                  value: input.value,
                }))
            )
              return $ao1(input, _path, true && _exceptionable);
            else if (
              "number" === typeof input.value &&
              (3 <= input.value ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "number & Minimum<3>",
                  value: input.value,
                }))
            )
              return $ao0(input, _path, true && _exceptionable);
            else
              return $guard(_exceptionable, {
                path: _path,
                expected:
                  "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                value: input,
              });
          })();
        return (
          ((Array.isArray(input) ||
            $guard(true, {
              path: _path + "",
              expected: "TypeTagObjectUnion",
              value: input,
            })) &&
            input.every(
              (elem: any, _index1: number) =>
                ((("object" === typeof elem && null !== elem) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                    value: elem,
                  })) &&
                  $au0(elem, _path + "[" + _index1 + "]", true)) ||
                $guard(true, {
                  path: _path + "[" + _index1 + "]",
                  expected:
                    "(TypeTagObjectUnion.Literal | TypeTagObjectUnion.Numeric)",
                  value: elem,
                }),
            )) ||
          $guard(true, {
            path: _path + "",
            expected: "TypeTagObjectUnion",
            value: input,
          })
        );
      })(input, "$input", true);
    return input;
  },
});
