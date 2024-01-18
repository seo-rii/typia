import typia from "typia";

import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_protobuf_createValidateDecode_ObjectIntersection =
  _test_protobuf_validateDecode("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )({
    decode: (
      input: Uint8Array,
    ): typia.IValidation<typia.Resolved<ObjectIntersection>> => {
      const validate = (input: any): typia.IValidation<ObjectIntersection> => {
        const errors = [] as any[];
        const __is = (input: any): input is ObjectIntersection => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).email &&
            "string" === typeof (input as any).name &&
            "boolean" === typeof (input as any).vulnerable
          );
        };
        if (false === __is(input)) {
          const $report = require("typia/lib/functional/$report").$report(
            errors,
          );
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectIntersection => {
            const $vo0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              [
                "string" === typeof input.email ||
                  $report(_exceptionable, {
                    path: _path + ".email",
                    expected: "string",
                    value: input.email,
                  }),
                "string" === typeof input.name ||
                  $report(_exceptionable, {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  }),
                "boolean" === typeof input.vulnerable ||
                  $report(_exceptionable, {
                    path: _path + ".vulnerable",
                    expected: "boolean",
                    value: input.vulnerable,
                  }),
              ].every((flag: boolean) => flag);
            return (
              ((("object" === typeof input && null !== input) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectIntersection",
                  value: input,
                })) &&
                $vo0(input, _path + "", true)) ||
              $report(true, {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input,
              })
            );
          })(input, "$input", true);
        }
        const success = 0 === errors.length;
        return {
          success,
          errors,
          data: success ? input : undefined,
        } as any;
      };
      const decode = (
        input: Uint8Array,
      ): typia.Resolved<ObjectIntersection> => {
        const $ProtobufReader =
          require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
        const $pdo0 = (reader: any, length: number = -1): any => {
          length = length < 0 ? reader.size() : reader.index() + length;
          const output = {
            email: "" as any,
            name: "" as any,
            vulnerable: undefined as any,
          } as any;
          while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
              case 1:
                // string;
                output.email = reader.string();
                break;
              case 2:
                // string;
                output.name = reader.string();
                break;
              case 3:
                // bool;
                output.vulnerable = reader.bool();
                break;
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return output;
        };
        const reader = new $ProtobufReader(input);
        return $pdo0(reader);
      };
      const output = decode(input);
      return validate(output) as any;
    },
    encode: (input: ObjectIntersection): Uint8Array => {
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "email";
          writer.uint32(10);
          writer.string(input.email);
          // property "name";
          writer.uint32(18);
          writer.string(input.name);
          // property "vulnerable";
          writer.uint32(24);
          writer.bool(input.vulnerable);
        };
        //ObjectIntersection;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
