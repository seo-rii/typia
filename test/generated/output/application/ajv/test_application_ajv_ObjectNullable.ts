import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectNullable } from "../../../../structures/ObjectNullable";

export const test_application_ajv_ObjectNullable = _test_application("ajv")(
    "ObjectNullable",
    {
        schemas: [
            {
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
        ],
        components: {
            schemas: {
                "ObjectNullable.IProduct": {
                    $id: "#/components/schemas/ObjectNullable.IProduct",
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
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectNullable.IBrand",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        similar: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    $ref: "#/components/schemas/ObjectNullable.IManufacturer",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ObjectNullable.IBrand",
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
                    required: ["name", "manufacturer", "brand", "similar"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IManufacturer": {
                    $id: "#/components/schemas/ObjectNullable.IManufacturer",
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
                    required: ["type", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ObjectNullable.IBrand": {
                    $id: "#/components/schemas/ObjectNullable.IBrand",
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
                    required: ["type", "name"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);