import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ToJsonArray } from "../../../../structures/ToJsonArray";

export const test_application_ajv_ToJsonArray = _test_application("ajv")(
    "ToJsonArray",
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    {
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    {
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ToJsonArray.IObject",
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ToJsonArray.IObject": {
                    $id: "#/components/schemas/ToJsonArray.IObject",
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["id"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);