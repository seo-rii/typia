import typia from "typia";

import { _test_protobuf_decode } from "../../../internal/_test_protobuf_decode";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_protobuf_createDecode_TypeTagCustom = _test_protobuf_decode(
  "TypeTagCustom",
)<TypeTagCustom>(TypeTagCustom)({
  decode: (input) =>
    ((input: Uint8Array): typia.Resolved<TypeTagCustom> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: "" as any,
          dollar: "" as any,
          postfix: "" as any,
          powerOf: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // string;
              output.id = reader.string();
              break;
            case 2:
              // string;
              output.dollar = reader.string();
              break;
            case 3:
              // string;
              output.postfix = reader.string();
              break;
            case 4:
              // double;
              output.powerOf = reader.double();
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
    })(input),
  encode: (input: TypeTagCustom): Uint8Array => {
    const $ProtobufSizer =
      require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
    const $ProtobufWriter =
      require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
    const encoder = (writer: any): any => {
      const $peo0 = (input: any): any => {
        // property "id";
        writer.uint32(10);
        writer.string(input.id);
        // property "dollar";
        writer.uint32(18);
        writer.string(input.dollar);
        // property "postfix";
        writer.uint32(26);
        writer.string(input.postfix);
        // property "powerOf";
        writer.uint32(33);
        writer.double(input.powerOf);
      };
      //TypeTagCustom;
      $peo0(input);
      return writer;
    };
    const sizer = encoder(new $ProtobufSizer());
    const writer = encoder(new $ProtobufWriter(sizer));
    return writer.buffer();
  },
});
