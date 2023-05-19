import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicConstant } from "../../../../structures/DynamicConstant";

export const test_application_swagger_DynamicConstant = _test_application(
    "swagger",
)("DynamicConstant", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicConstant",
        },
    ],
    components: {
        schemas: {
            DynamicConstant: {
                type: "object",
                properties: {
                    a: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    b: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    c: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    d: {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["a", "b", "c", "d"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});