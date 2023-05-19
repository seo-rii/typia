import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagTuple } from "../../../../structures/TagTuple";

export const test_application_swagger_TagTuple = _test_application("swagger")(
    "TagTuple",
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagTuple",
            },
        ],
        components: {
            schemas: {
                TagTuple: {
                    type: "object",
                    properties: {
                        tuple: {
                            description:
                                "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                            "x-typia-metaTags": [
                                {
                                    kind: "minItems",
                                    value: 3,
                                },
                                {
                                    kind: "maxItems",
                                    value: 7,
                                },
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                                {
                                    kind: "minLength",
                                    value: 3,
                                },
                                {
                                    kind: "maxLength",
                                    value: 7,
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "minItems",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maxItems",
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
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "minLength",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maxLength",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "string",
                                        minLength: 3,
                                        maxLength: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "number",
                                        minimum: 3,
                                        maximum: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "array",
                                        items: {
                                            description:
                                                "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                            "x-typia-metaTags": [
                                                {
                                                    kind: "minItems",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxItems",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minimum",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maximum",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minLength",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxLength",
                                                    value: 7,
                                                },
                                            ],
                                            "x-typia-jsDocTags": [
                                                {
                                                    name: "minItems",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxItems",
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
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "minLength",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxLength",
                                                    text: [
                                                        {
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                            ],
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "string",
                                            minLength: 3,
                                            maxLength: 7,
                                        },
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "array",
                                        items: {
                                            description:
                                                "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                            "x-typia-metaTags": [
                                                {
                                                    kind: "minItems",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxItems",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minimum",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maximum",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minLength",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxLength",
                                                    value: 7,
                                                },
                                            ],
                                            "x-typia-jsDocTags": [
                                                {
                                                    name: "minItems",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxItems",
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
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "minLength",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxLength",
                                                    text: [
                                                        {
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                            ],
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "number",
                                            minimum: 3,
                                            maximum: 7,
                                        },
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                ],
                                description:
                                    "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                "x-typia-metaTags": [
                                    {
                                        kind: "minItems",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxItems",
                                        value: 7,
                                    },
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "maximum",
                                        value: 7,
                                    },
                                    {
                                        kind: "minLength",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxLength",
                                        value: 7,
                                    },
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "minItems",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxItems",
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
                                                text: "7",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "minLength",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxLength",
                                        text: [
                                            {
                                                text: "7",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            "x-typia-tuple": {
                                type: "array",
                                items: [
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "string",
                                        minLength: 3,
                                        maxLength: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "number",
                                        minimum: 3,
                                        maximum: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        type: "array",
                                        items: {
                                            description:
                                                "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                            "x-typia-metaTags": [
                                                {
                                                    kind: "minItems",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxItems",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minimum",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maximum",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minLength",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxLength",
                                                    value: 7,
                                                },
                                            ],
                                            "x-typia-jsDocTags": [
                                                {
                                                    name: "minItems",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxItems",
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
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "minLength",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxLength",
                                                    text: [
                                                        {
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                            ],
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            type: "string",
                                            minLength: 3,
                                            maxLength: 7,
                                        },
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                    {
                                        description:
                                            "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                        "x-typia-metaTags": [
                                            {
                                                kind: "minItems",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxItems",
                                                value: 7,
                                            },
                                            {
                                                kind: "minimum",
                                                value: 3,
                                            },
                                            {
                                                kind: "maximum",
                                                value: 7,
                                            },
                                            {
                                                kind: "minLength",
                                                value: 3,
                                            },
                                            {
                                                kind: "maxLength",
                                                value: 7,
                                            },
                                        ],
                                        "x-typia-jsDocTags": [
                                            {
                                                name: "minItems",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxItems",
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
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "minLength",
                                                text: [
                                                    {
                                                        text: "3",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                            {
                                                name: "maxLength",
                                                text: [
                                                    {
                                                        text: "7",
                                                        kind: "text",
                                                    },
                                                ],
                                            },
                                        ],
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                        "x-typia-rest": false,
                                        type: "array",
                                        items: {
                                            description:
                                                "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                            "x-typia-metaTags": [
                                                {
                                                    kind: "minItems",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxItems",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minimum",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maximum",
                                                    value: 7,
                                                },
                                                {
                                                    kind: "minLength",
                                                    value: 3,
                                                },
                                                {
                                                    kind: "maxLength",
                                                    value: 7,
                                                },
                                            ],
                                            "x-typia-jsDocTags": [
                                                {
                                                    name: "minItems",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxItems",
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
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "minLength",
                                                    text: [
                                                        {
                                                            text: "3",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                                {
                                                    name: "maxLength",
                                                    text: [
                                                        {
                                                            text: "7",
                                                            kind: "text",
                                                        },
                                                    ],
                                                },
                                            ],
                                            "x-typia-required": true,
                                            "x-typia-optional": false,
                                            "x-typia-rest": false,
                                            type: "number",
                                            minimum: 3,
                                            maximum: 7,
                                        },
                                        minItems: 3,
                                        maxItems: 7,
                                    },
                                ],
                                description:
                                    "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                                "x-typia-metaTags": [
                                    {
                                        kind: "minItems",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxItems",
                                        value: 7,
                                    },
                                    {
                                        kind: "minimum",
                                        value: 3,
                                    },
                                    {
                                        kind: "maximum",
                                        value: 7,
                                    },
                                    {
                                        kind: "minLength",
                                        value: 3,
                                    },
                                    {
                                        kind: "maxLength",
                                        value: 7,
                                    },
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "minItems",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxItems",
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
                                                text: "7",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "minLength",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                    {
                                        name: "maxLength",
                                        text: [
                                            {
                                                text: "7",
                                                kind: "text",
                                            },
                                        ],
                                    },
                                ],
                                "x-typia-required": true,
                                "x-typia-optional": false,
                            },
                            minItems: 3,
                            maxItems: 7,
                        },
                    },
                    nullable: false,
                    required: ["tuple"],
                    description:
                        "@minItems 3\n@maxItems 7\n@minimum 3\n@maximum 7\n@minLength 3\n@maxLength 7",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);