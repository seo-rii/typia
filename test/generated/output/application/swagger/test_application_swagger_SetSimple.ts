import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { SetSimple } from "../../../../structures/SetSimple";

export const test_application_swagger_SetSimple = _test_application("swagger")(
    "SetSimple",
    {
        schemas: [
            {
                $ref: "#/components/schemas/SetSimple",
            },
        ],
        components: {
            schemas: {
                SetSimple: {
                    type: "object",
                    properties: {
                        booleans: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        numbers: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        strings: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        arrays: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                        objects: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Set",
                        },
                    },
                    nullable: false,
                    required: [
                        "booleans",
                        "numbers",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                Set: {
                    type: "object",
                    properties: {},
                    nullable: false,
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);