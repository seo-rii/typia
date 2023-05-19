import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectPropertyNullable } from "../../../../structures/ObjectPropertyNullable";

export const test_application_swagger_ObjectPropertyNullable =
    _test_application("swagger")("ObjectPropertyNullable", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_boolean_gt_",
                            },
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_number_gt_",
                            },
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_string_gt_",
                            },
                        },
                        {
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_",
                            },
                        },
                    ],
                },
                "x-typia-tuple": {
                    type: "array",
                    items: [
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_boolean_gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_number_gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        {
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_string_gt_",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        {
                            "x-typia-rest": false,
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_",
                                "x-typia-rest": false,
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ObjectPropertyNullable.IPointer_lt_boolean_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                            nullable: true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectPropertyNullable.IPointer_lt_number_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            nullable: true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectPropertyNullable.IPointer_lt_string_gt_": {
                    type: "object",
                    properties: {
                        value: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            nullable: true,
                        },
                    },
                    nullable: false,
                    required: ["value"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectPropertyNullable.IPointer_lt_ObjectPropertyNullable.IMember_gt_":
                    {
                        type: "object",
                        properties: {
                            value: {
                                $ref: "#/components/schemas/ObjectPropertyNullable.IMember.Nullable",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        nullable: false,
                        required: ["value"],
                        description: "",
                        "x-typia-jsDocTags": [],
                    },
                "ObjectPropertyNullable.IMember.Nullable": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            nullable: true,
                        },
                        grade: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                        },
                        serial: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                            type: "number",
                            nullable: true,
                        },
                        activated: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "boolean",
                            nullable: true,
                        },
                    },
                    nullable: true,
                    required: ["id", "name", "activated"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    });