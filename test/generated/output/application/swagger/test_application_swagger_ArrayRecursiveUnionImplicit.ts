import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursiveUnionImplicit } from "../../../../structures/ArrayRecursiveUnionImplicit";

export const test_application_swagger_ArrayRecursiveUnionImplicit =
    _test_application("swagger")("ArrayRecursiveUnionImplicit", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ArrayRecursiveUnionImplicit.IDirectory": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
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
                    },
                    nullable: false,
                    required: ["id", "name", "path", "children"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.ISharedDirectory": {
                    type: "object",
                    properties: {
                        access: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["read", "write"],
                        },
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        children: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "array",
                            items: {
                                oneOf: [
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
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
                    },
                    nullable: false,
                    required: ["access", "id", "name", "path", "children"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IImageFile": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        width: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        height: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        url: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "width",
                        "height",
                        "url",
                        "size",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.ITextFile": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        content: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "path", "size", "content"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IZipFile": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        size: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        count: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "path", "size", "count"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionImplicit.IShortcut": {
                    type: "object",
                    properties: {
                        id: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        name: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        path: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                        target: {
                            oneOf: [
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IDirectory",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ISharedDirectory",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IImageFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.ITextFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IZipFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionImplicit.IShortcut",
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
                    required: ["id", "name", "path", "target"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    });