import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_application_ajv_ArrayAny = _test_application("ajv")(
    "ArrayAny",
    {
        schemas: [
            {
                $ref: "#/components/schemas/ArrayAny",
            },
        ],
        components: {
            schemas: {
                ArrayAny: {
                    $id: "#/components/schemas/ArrayAny",
                    type: "object",
                    properties: {
                        anys: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                        undefindable1: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": false,
                            },
                        },
                        undefindable2: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": false,
                            },
                        },
                        nullables1: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        nullables2: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        both1: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        description: "",
                                        "x-typia-required": false,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                        },
                        both2: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        description: "",
                                        "x-typia-required": false,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                        },
                        both3: {
                            oneOf: [
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "null",
                                },
                                {
                                    description: "",
                                    "x-typia-required": false,
                                    "x-typia-optional": false,
                                    type: "array",
                                    items: {
                                        description: "",
                                        "x-typia-required": false,
                                        "x-typia-optional": false,
                                    },
                                },
                            ],
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                        },
                        union: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                        },
                    },
                    required: ["anys", "nullables1", "nullables2", "union"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);