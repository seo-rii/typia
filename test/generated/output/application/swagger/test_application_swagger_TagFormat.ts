import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { TagFormat } from "../../../../structures/TagFormat";

export const test_application_swagger_TagFormat = _test_application("swagger")(
    "TagFormat",
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagFormat",
            },
        ],
        components: {
            schemas: {
                TagFormat: {
                    type: "object",
                    properties: {
                        uuid: {
                            description:
                                "Universally Unique Identifier.\n@format uuid",
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
                        email: {
                            description: "Email address\n@format email",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "email",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "email",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "email",
                        },
                        url: {
                            description: "URL address.\n@format url",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "url",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "url",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "url",
                        },
                        ipv4: {
                            description: "IPv4 address.\n@format ipv4",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv4",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv4",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "ipv4",
                        },
                        ipv6: {
                            description: "IPv6 address.\n@format ipv6",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "ipv6",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "ipv6",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "ipv6",
                        },
                        date: {
                            description: "Date only.\n@format date",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "date",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "date",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date",
                        },
                        date_time: {
                            description: "Date and time.\n@format date-time",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "datetime",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "date-time",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date-time",
                        },
                        datetime: {
                            description:
                                "Date and time with only lowercase characters.\n@format datetime",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "datetime",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "datetime",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date-time",
                        },
                        dateTime: {
                            description:
                                "Date and time with camelCase.\n@format dateTime",
                            "x-typia-metaTags": [
                                {
                                    kind: "format",
                                    value: "datetime",
                                },
                            ],
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "dateTime",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "date-time",
                        },
                        custom: {
                            description:
                                "A custom format string.\n@format my-custom-format",
                            "x-typia-jsDocTags": [
                                {
                                    name: "format",
                                    text: [
                                        {
                                            text: "my-custom-format",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            format: "my-custom-format",
                        },
                    },
                    nullable: false,
                    required: [
                        "uuid",
                        "email",
                        "url",
                        "ipv4",
                        "ipv6",
                        "date",
                        "date_time",
                        "datetime",
                        "dateTime",
                        "custom",
                    ],
                    description:
                        "A custom format string.\n@format my-custom-format",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);