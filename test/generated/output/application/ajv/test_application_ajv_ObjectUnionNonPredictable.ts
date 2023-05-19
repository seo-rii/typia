import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionNonPredictable } from "../../../../structures/ObjectUnionNonPredictable";

export const test_application_ajv_ObjectUnionNonPredictable = _test_application(
    "ajv",
)("ObjectUnionNonPredictable", {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_",
            },
        },
    ],
    components: {
        schemas: {
            "ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_":
                {
                    $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_",
                    type: "object",
                    properties: {
                        value: {
                            $ref: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_":
                {
                    $id: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_",
                    type: "object",
                    properties: {
                        value: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_number_gt_",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_string_gt_",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            "ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_",
                type: "object",
                properties: {
                    value: {
                        $ref: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_boolean_gt_",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionNonPredictable.IPointer_lt_boolean_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_boolean_gt_",
                type: "object",
                properties: {
                    value: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionNonPredictable.IWrapper_lt_number_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_number_gt_",
                type: "object",
                properties: {
                    value: {
                        $ref: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_number_gt_",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionNonPredictable.IPointer_lt_number_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_number_gt_",
                type: "object",
                properties: {
                    value: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionNonPredictable.IWrapper_lt_string_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IWrapper_lt_string_gt_",
                type: "object",
                properties: {
                    value: {
                        $ref: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_string_gt_",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionNonPredictable.IPointer_lt_string_gt_": {
                $id: "#/components/schemas/ObjectUnionNonPredictable.IPointer_lt_string_gt_",
                type: "object",
                properties: {
                    value: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                required: ["value"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});