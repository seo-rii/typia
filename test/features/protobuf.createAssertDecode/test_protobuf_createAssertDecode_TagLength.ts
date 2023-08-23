import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TagLength } from "../../structures/TagLength";

export const test_protobuf_assertDecode_TagLength = _test_protobuf_assertDecode(
    "TagLength",
)<TagLength>(TagLength)({
    assertDecode: typia.protobuf.createAssertDecode<TagLength>(),
    encode: typia.protobuf.createEncode<TagLength>(),
});