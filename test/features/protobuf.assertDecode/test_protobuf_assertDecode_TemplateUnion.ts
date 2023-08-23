import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_protobuf_assertDecode_TemplateUnion =
    _test_protobuf_assertDecode("TemplateUnion")<TemplateUnion>(TemplateUnion)({
        assertDecode: (input) =>
            typia.protobuf.assertDecode<TemplateUnion>(input),
        encode: typia.protobuf.createEncode<TemplateUnion>(),
    });