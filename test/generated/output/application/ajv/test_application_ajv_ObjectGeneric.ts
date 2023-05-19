import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectGeneric } from "../../../../structures/ObjectGeneric";

export const test_application_ajv_ObjectGeneric = _test_application("ajv")(
    "ObjectGeneric",
    {
        schemas: [
            {
                type: "array",
                items: [
                    {
                        $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_boolean_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_number_gt_",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ObjectGeneric.ISomething_lt_string_gt_",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        ],
        components: {
            schemas: {
                "ObjectGeneric.ISomething_lt_boolean_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.ISomething_lt_boolean_gt_",
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        elements: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["value", "child", "elements"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.IChild_lt_boolean_comma__space_boolean_gt_",
                    type: "object",
                    properties: {
                        child_value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                        child_next: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                        },
                    },
                    required: ["child_value", "child_next"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectGeneric.ISomething_lt_number_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.ISomething_lt_number_gt_",
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma__space_number_gt_",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        elements: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma__space_number_gt_",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["value", "child", "elements"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectGeneric.IChild_lt_number_comma__space_number_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.IChild_lt_number_comma__space_number_gt_",
                    type: "object",
                    properties: {
                        child_value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        child_next: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["child_value", "child_next"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectGeneric.ISomething_lt_string_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.ISomething_lt_string_gt_",
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        child: {
                            $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma__space_string_gt_",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        elements: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma__space_string_gt_",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["value", "child", "elements"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectGeneric.IChild_lt_string_comma__space_string_gt_": {
                    $id: "#/components/schemas/ObjectGeneric.IChild_lt_string_comma__space_string_gt_",
                    type: "object",
                    properties: {
                        child_value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        child_next: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    required: ["child_value", "child_next"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);