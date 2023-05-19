import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagCustom } from "../../../../structures/TagCustom";

export const test_application_ajv_TagCustom = _test_application("ajv")(
    "TagCustom",
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagCustom",
            },
        ],
        components: {
            schemas: {
                TagCustom: {
                    $id: "#/components/schemas/TagCustom",
                    type: "object",
                    properties: {
                        id: {
                            description:
                                "Regular feature supported by typia\n@format uuid",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "uuid",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "uuid",
                        },
                        dollar: {
                            description:
                                'Custom feature composed with "$" + number\n@dollar',
                            "x-typia-jsDocTags": [
                                {
                                    name: "dollar",
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        postfix: {
                            description:
                                'Custom feature composed with string + "abcd"\n@postfix abcd',
                            "x-typia-jsDocTags": [
                                {
                                    name: "postfix",
                                    text: [
                                        {
                                            text: "abcd",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        log: {
                            description:
                                "Custom feature meaning x^y\n@powerOf 10",
                            "x-typia-jsDocTags": [
                                {
                                    name: "powerOf",
                                    text: [
                                        {
                                            text: "10",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    required: ["id", "dollar", "postfix", "log"],
                    description: "Custom feature meaning x^y\n@powerOf 10",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);