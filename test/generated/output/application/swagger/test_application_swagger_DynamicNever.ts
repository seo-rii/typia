import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicNever } from "../../../../structures/DynamicNever";

export const test_application_swagger_DynamicNever = _test_application(
    "swagger",
)("DynamicNever", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicNever",
        },
    ],
    components: {
        schemas: {
            DynamicNever: {
                type: "object",
                properties: {},
                nullable: false,
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});