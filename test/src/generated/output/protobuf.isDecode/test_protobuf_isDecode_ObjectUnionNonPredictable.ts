import typia from "typia";

import { _test_protobuf_isDecode } from "../../../internal/_test_protobuf_isDecode";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_protobuf_createIsDecode_ObjectUnionNonPredictable =
  _test_protobuf_isDecode(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)({
    decode: (input) =>
      ((
        input: Uint8Array,
      ): typia.Resolved<ObjectUnionNonPredictable> | null => {
        const is = (input: any): input is ObjectUnionNonPredictable => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $io2(input.value);
          const $io2 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
          const $io3 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "boolean" === typeof (input.value as any).value;
          const $io5 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "number" === typeof (input.value as any).value &&
            Number.isFinite((input.value as any).value);
          const $io7 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            "string" === typeof (input.value as any).value;
          const $iu0 = (input: any): any =>
            (() => {
              if ($io7(input)) return $io7(input);
              else if ($io5(input)) return $io5(input);
              else if ($io3(input)) return $io3(input);
              else return false;
            })();
          return "object" === typeof input && null !== input && $io0(input);
        };
        const decode = (
          input: Uint8Array,
        ): typia.Resolved<ObjectUnionNonPredictable> => {
          const $ProtobufReader =
            require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
          const $pdo0 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: [] as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // type: Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>;
                  output.value.push($pdo1(reader, reader.uint32()));
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo1 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // IPointer<ObjectUnionNonPredictable.IUnion>;
                  output.value = $pdo2(reader, reader.uint32());
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo2 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // ObjectUnionNonPredictable.IWrapper<string>;
                  output.value = $pdo7(reader, reader.uint32());
                  break;
                case 2:
                  // ObjectUnionNonPredictable.IWrapper<number>;
                  output.value = $pdo5(reader, reader.uint32());
                  break;
                case 3:
                  // ObjectUnionNonPredictable.IWrapper<boolean>;
                  output.value = $pdo3(reader, reader.uint32());
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo3 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // IPointer<boolean>;
                  output.value = $pdo4(reader, reader.uint32());
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo4 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // bool;
                  output.value = reader.bool();
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo5 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // IPointer<number>;
                  output.value = $pdo6(reader, reader.uint32());
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo6 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // double;
                  output.value = reader.double();
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo7 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: undefined as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // IPointer<string>;
                  output.value = $pdo8(reader, reader.uint32());
                  break;
                default:
                  reader.skipType(tag & 7);
                  break;
              }
            }
            return output;
          };
          const $pdo8 = (reader: any, length: number = -1): any => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
              value: "" as any,
            } as any;
            while (reader.index() < length) {
              const tag = reader.uint32();
              switch (tag >>> 3) {
                case 1:
                  // string;
                  output.value = reader.string();
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
        if (!is(output)) return null;
        return output;
      })(input),
    encode: (input: ObjectUnionNonPredictable): Uint8Array => {
      const $throws = require("typia/lib/functional/$throws").$throws(
        "typia.protobuf.createEncode",
      );
      const $ProtobufSizer =
        require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
      const $ProtobufWriter =
        require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
      const encoder = (writer: any): any => {
        const $peo0 = (input: any): any => {
          // property "value";
          if (0 !== input.value.length) {
            for (const elem of input.value) {
              // 1 -> ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>;
              writer.uint32(10);
              writer.fork();
              $peo1(elem);
              writer.ldelim();
            }
          }
        };
        const $peo1 = (input: any): any => {
          // property "value";
          // 1 -> IPointer<ObjectUnionNonPredictable.IUnion>;
          writer.uint32(10);
          writer.fork();
          $peo2(input.value);
          writer.ldelim();
        };
        const $peo2 = (input: any): any => {
          // property "value";
          (() => {
            if ($io7(input.value))
              return (() => {
                // 1 -> ObjectUnionNonPredictable.IWrapper<string>;
                writer.uint32(10);
                writer.fork();
                $peo7(input.value);
                writer.ldelim();
              })();
            else if ($io5(input.value))
              return (() => {
                // 2 -> ObjectUnionNonPredictable.IWrapper<number>;
                writer.uint32(18);
                writer.fork();
                $peo5(input.value);
                writer.ldelim();
              })();
            else if ($io3(input.value))
              return (() => {
                // 3 -> ObjectUnionNonPredictable.IWrapper<boolean>;
                writer.uint32(26);
                writer.fork();
                $peo3(input.value);
                writer.ldelim();
              })();
            else
              $throws({
                expected:
                  "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                value: input.value,
              });
          })();
        };
        const $peo3 = (input: any): any => {
          // property "value";
          // 1 -> IPointer<boolean>;
          writer.uint32(10);
          writer.fork();
          $peo4(input.value);
          writer.ldelim();
        };
        const $peo4 = (input: any): any => {
          // property "value";
          writer.uint32(8);
          writer.bool(input.value);
        };
        const $peo5 = (input: any): any => {
          // property "value";
          // 1 -> IPointer<number>;
          writer.uint32(10);
          writer.fork();
          $peo6(input.value);
          writer.ldelim();
        };
        const $peo6 = (input: any): any => {
          // property "value";
          writer.uint32(9);
          writer.double(input.value);
        };
        const $peo7 = (input: any): any => {
          // property "value";
          // 1 -> IPointer<string>;
          writer.uint32(10);
          writer.fork();
          $peo8(input.value);
          writer.ldelim();
        };
        const $peo8 = (input: any): any => {
          // property "value";
          writer.uint32(10);
          writer.string(input.value);
        };
        const $io1 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io2(input.value);
        const $io2 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $iu0(input.value);
        const $io3 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io4(input.value);
        const $io4 = (input: any): boolean => "boolean" === typeof input.value;
        const $io5 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io6(input.value);
        const $io6 = (input: any): boolean => "number" === typeof input.value;
        const $io7 = (input: any): boolean =>
          "object" === typeof input.value &&
          null !== input.value &&
          $io8(input.value);
        const $io8 = (input: any): boolean => "string" === typeof input.value;
        const $iu0 = (input: any): any =>
          $io7(input) || $io5(input) || $io3(input);
        //ObjectUnionNonPredictable;
        $peo0(input);
        return writer;
      };
      const sizer = encoder(new $ProtobufSizer());
      const writer = encoder(new $ProtobufWriter(sizer));
      return writer.buffer();
    },
  });
