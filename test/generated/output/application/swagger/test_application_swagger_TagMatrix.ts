import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagMatrix } from "../../../../structures/TagMatrix";

export const test_application_swagger_TagMatrix = _test_application("swagger")(
    "TagMatrix",
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagMatrix",
            },
        ],
        components: {
            schemas: {
                TagMatrix: {
                    type: "object",
                    properties: {
                        matrix: {
                            description:
                                "Doubled array.\n@items 3\n@format uuid",
                            "x-typia-metaTags": [
                                {
                                    kind: "items",
                                    value: 3,
                                },
                                {
                                    kind: "format",
                                    value: "uuid",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "items",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
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
                            type: "array",
                            items: {
                                description:
                                    "Doubled array.\n@items 3\n@format uuid",
                                "x-typia-metaTags": [
                                    {
                                        kind: "items",
                                        value: 3,
                                    },
                                    {
                                        kind: "format",
                                        value: "uuid",
                                    },
                                ],
                                "x-typia-jsDocTags": [
                                    {
                                        name: "items",
                                        text: [
                                            {
                                                text: "3",
                                                kind: "text",
                                            },
                                        ],
                                    },
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
                                type: "array",
                                items: {
                                    description:
                                        "Doubled array.\n@items 3\n@format uuid",
                                    "x-typia-metaTags": [
                                        {
                                            kind: "items",
                                            value: 3,
                                        },
                                        {
                                            kind: "format",
                                            value: "uuid",
                                        },
                                    ],
                                    "x-typia-jsDocTags": [
                                        {
                                            name: "items",
                                            text: [
                                                {
                                                    text: "3",
                                                    kind: "text",
                                                },
                                            ],
                                        },
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
                            },
                        },
                    },
                    nullable: false,
                    required: ["matrix"],
                    description: "Doubled array.\n@items 3\n@format uuid",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);