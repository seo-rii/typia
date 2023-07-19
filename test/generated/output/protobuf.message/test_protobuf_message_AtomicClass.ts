import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_protobuf_message_AtomicClass = _test_protobuf_message(
    "AtomicClass",
)(
    'syntax = "proto3";\n\nmessage __Main {\n    _alt_Boolean_comma__space__lp_Boolean_space__or__space_false_rp__comma__space__lp_Boolean_space__or__space_boolean_rp__comma__space_Number_comma__space__lp_1_space__or__space_Number_rp__comma__space__lp_Number_space__or__space_number_rp__comma__space_String_comma__space__lp__doublequote_characters_doublequote__space__or__space_String_rp__comma__space__lp_String_space__or__space_string_rp__agt_ value = 1;\n}\n\nmessage _alt_Boolean_comma__space__lp_Boolean_space__or__space_false_rp__comma__space__lp_Boolean_space__or__space_boolean_rp__comma__space_Number_comma__space__lp_1_space__or__space_Number_rp__comma__space__lp_Number_space__or__space_number_rp__comma__space_String_comma__space__lp__doublequote_characters_doublequote__space__or__space_String_rp__comma__space__lp_String_space__or__space_string_rp__agt_ {\n    bytes v0 = 1;\n    oneof v1 {\n        bool v1_o0 = 2;\n        bytes v1_o1 = 3;\n    }\n    oneof v2 {\n        bool v2_o0 = 4;\n        bytes v2_o1 = 5;\n    }\n    bytes v3 = 6;\n    oneof v4 {\n        uint32 v4_o0 = 7;\n        bytes v4_o1 = 8;\n    }\n    oneof v5 {\n        double v5_o0 = 9;\n        bytes v5_o1 = 10;\n    }\n    bytes v6 = 11;\n    oneof v7 {\n        string v7_o0 = 12;\n        bytes v7_o1 = 13;\n    }\n    oneof v8 {\n        string v8_o0 = 14;\n        bytes v8_o1 = 15;\n    }\n}',
);
