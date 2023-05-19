import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_application_swagger_ObjectNullable = _test_application(
    "swagger",
)("ObjectNullable", {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectNullable.IProduct",
            },
            "x-typia-tuple": {
                type: "array",
                items: [
                    {
                        $ref: "#/components/schemas/ObjectNullable.IProduct",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ObjectNullable.IProduct",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    {
                        $ref: "#/components/schemas/ObjectNullable.IProduct",
                        "x-typia-rest": false,
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ObjectNullable.IProduct": {
                type: "object",
                properties: {
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    manufacturer: {
                        $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    brand: {
                        $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    similar: {
                        oneOf: [
                            {
                                $ref: "#/components/schemas/ObjectNullable.IManufacturer.Nullable",
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            {
                                $ref: "#/components/schemas/ObjectNullable.IBrand.Nullable",
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
                nullable: false,
                required: ["name", "manufacturer", "brand", "similar"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectNullable.IManufacturer": {
                type: "object",
                properties: {
                    type: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["manufacturer"],
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                required: ["type", "name"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectNullable.IBrand.Nullable": {
                type: "object",
                properties: {
                    type: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["brand"],
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: true,
                required: ["type", "name"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectNullable.IManufacturer.Nullable": {
                type: "object",
                properties: {
                    type: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                        enum: ["manufacturer"],
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: true,
                required: ["type", "name"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});