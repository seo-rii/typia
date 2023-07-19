import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_protobuf_message_TupleRestAtomic = _test_protobuf_message(
    "TupleRestAtomic",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_boolean_comma__space_number_comma__space_...string_agt_ value = 1;\n}\n\nmessage _alt_boolean_comma__space_number_comma__space_ {\n    message  {\n        message  {\n            message string_agt_ {\n                bool v0 = 1;\n                double v1 = 2;\n                repeated string v2 = 3;\n            }\n        }\n    }\n}',
);
