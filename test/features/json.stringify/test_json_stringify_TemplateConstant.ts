import typia from "../../../src";
import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_stringify_TemplateConstant =
    _test_json_stringify<TemplateConstant>(TemplateConstant)((input) =>
        typia.json.stringify<TemplateConstant>(input),
    );
