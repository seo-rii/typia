import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursive } from "../../../../structures/ArrayRecursive";

export const test_application_ajv_ArrayRecursive = _test_application("ajv")(
    "ArrayRecursive",
    {
        schemas: [
            {
                $recursiveRef: "#/components/schemas/ArrayRecursive.ICategory",
            },
        ],
        components: {
            schemas: {
                "ArrayRecursive.ICategory": {
                    $id: "#/components/schemas/ArrayRecursive.ICategory",
                    $recursiveAnchor: true,
                    type: "object",
                    properties: {
                        children: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $recursiveRef:
                                    "#/components/schemas/ArrayRecursive.ICategory",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        code: {
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
                        created_at: {
                            $ref: "#/components/schemas/ArrayRecursive.ITimestamp",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: [
                        "children",
                        "id",
                        "code",
                        "sequence",
                        "created_at",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursive.ITimestamp": {
                    $id: "#/components/schemas/ArrayRecursive.ITimestamp",
                    type: "object",
                    properties: {
                        time: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        zone: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["time", "zone"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);