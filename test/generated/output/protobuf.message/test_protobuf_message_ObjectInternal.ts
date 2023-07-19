import typia from "../../../../src";
import { _test_protobuf_message } from "../../../internal/_test_protobuf_message";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_protobuf_message_ObjectInternal = _test_protobuf_message(
    "ObjectInternal",
)(
    'syntax = "proto3";\n\nmessage ObjectInternal {\n    string id = 1;\n    string name = 2;\n}',
);
