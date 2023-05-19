import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagDefault } from "../../../../structures/TagDefault";

export const test_application_ajv_TagDefault = _test_application("ajv")(
    "TagDefault",
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagDefault",
            },
        ],
        components: {
            schemas: {
                TagDefault: {
                    $id: "#/components/schemas/TagDefault",
                    type: "object",
                    properties: {
                        boolean: {
                            description: "@default false",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            default: true,
                            type: "boolean",
                        },
                        number: {
                            description: "@default 1",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            default: 1,
                        },
                        string: {
                            description: "@default two",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            default: "two",
                        },
                        text: {
                            description:
                                "@default Very long text, can you understand it?",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "Very long text, can you understand it?",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            default: "Very long text, can you understand it?",
                        },
                        template: {
                            type: "string",
                            description: "@default prefix_A",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_A",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            pattern: "^(prefix_(.*))",
                            default: "prefix_A",
                        },
                        boolean_and_number_and_string: {
                            oneOf: [
                                {
                                    description:
                                        "@default false\n@default 1\n@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    default: "two",
                                },
                                {
                                    description:
                                        "@default false\n@default 1\n@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 1,
                                },
                                {
                                    description:
                                        "@default false\n@default 1\n@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: true,
                                    type: "boolean",
                                },
                            ],
                            description:
                                "@default false\n@default 1\n@default two",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_boolean: {
                            oneOf: [
                                {
                                    description: "@default false",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                                {
                                    description: "@default false",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    description: "@default false",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: true,
                                    type: "boolean",
                                },
                            ],
                            description: "@default false",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_number: {
                            oneOf: [
                                {
                                    description: "@default 1",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                },
                                {
                                    description: "@default 1",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 1,
                                },
                                {
                                    description: "@default 1",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            description: "@default 1",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        union_but_string: {
                            oneOf: [
                                {
                                    description: "@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "string",
                                    default: "two",
                                },
                                {
                                    description: "@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    description: "@default two",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "two",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "boolean",
                                },
                            ],
                            description: "@default two",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        vulnerable_range: {
                            description: "@default 7\n@minimum 3\n@maximum 5",
                            "x-typia-metaTags": [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 5,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "5",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                            minimum: 3,
                            maximum: 5,
                        },
                        vulnerable_template: {
                            type: "string",
                            description: "@default two",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "two",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            pattern: "^(prefix_(.*))",
                        },
                        boolean_and_number_and_template: {
                            oneOf: [
                                {
                                    type: "string",
                                    description:
                                        "@default false\n@default 1\n@default prefix_B",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    pattern:
                                        "^(-?\\d+\\.?\\d*|true|false|(prefix_(.*)))",
                                    default: "prefix_B",
                                },
                                {
                                    description:
                                        "@default false\n@default 1\n@default prefix_B",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                    default: 1,
                                },
                                {
                                    description:
                                        "@default false\n@default 1\n@default prefix_B",
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "false",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "1",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                        {
                                            name: "default",
                                            text: [
                                                {
                                                    text: "prefix_B",
                                                    kind: "text",
                                                },
                                            ],
                                        },
                                    ],
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    default: true,
                                    type: "boolean",
                                },
                            ],
                            description:
                                "@default false\n@default 1\n@default prefix_B",
                            "x-typia-jsDocTags": [
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "false",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "1",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "default",
                                    text: [
                                        {
                                            text: "prefix_B",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    required: [
                        "boolean",
                        "number",
                        "string",
                        "text",
                        "template",
                        "boolean_and_number_and_string",
                        "union_but_boolean",
                        "union_but_number",
                        "union_but_string",
                        "vulnerable_range",
                        "vulnerable_template",
                        "boolean_and_number_and_template",
                    ],
                    description:
                        "@default false\n@default 1\n@default prefix_B",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);