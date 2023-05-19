import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayAny } from "../../../../structures/ArrayAny";

export const test_application_swagger_ArrayAny = _test_application("swagger")(
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
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            nullable: true,
                        },
                        nullables2: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            nullable: true,
                        },
                        both1: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": false,
                            },
                            nullable: true,
                        },
                        both2: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": false,
                            },
                            nullable: true,
                        },
                        both3: {
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": false,
                            },
                            nullable: true,
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
                    nullable: false,
                    required: ["anys", "nullables1", "nullables2", "union"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);