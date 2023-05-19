import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicTree } from "../../../../structures/DynamicTree";

export const test_application_swagger_DynamicTree = _test_application(
    "swagger",
)("DynamicTree", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicTree",
        },
    ],
    components: {
        schemas: {
            DynamicTree: {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    sequence: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    children: {
                        $ref: "#/components/schemas/Record_lt_string_comma__space_DynamicTree_gt_",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["id", "sequence", "children"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            Record_lt_string_comma__space_DynamicTree_gt_: {
                type: "object",
                properties: {},
                nullable: false,
                description: "",
                "x-typia-jsDocTags": [],
                "x-typia-additionalProperties": {
                    $ref: "#/components/schemas/DynamicTree",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
                additionalProperties: {
                    $ref: "#/components/schemas/DynamicTree",
                    "x-typia-required": true,
                    "x-typia-optional": false,
                },
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});