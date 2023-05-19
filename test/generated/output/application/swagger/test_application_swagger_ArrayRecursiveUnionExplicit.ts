import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ArrayRecursiveUnionExplicit } from "../../../../structures/ArrayRecursiveUnionExplicit";

export const test_application_swagger_ArrayRecursiveUnionExplicit =
    _test_application("swagger")("ArrayRecursiveUnionExplicit", {
        schemas: [
            {
                type: "array",
                items: {
                    oneOf: [
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                        },
                        {
                            $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                        },
                    ],
                },
            },
        ],
        components: {
            schemas: {
                "ArrayRecursiveUnionExplicit.IDirectory": {
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
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                        description: "",
                                        "x-typia-required": true,
                                        "x-typia-optional": false,
                                    },
                                    {
                                        $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
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
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["directory"],
                        },
                    },
                    nullable: false,
                    required: ["id", "name", "path", "children", "type"],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IImageFile": {
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
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["jpg"],
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
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.ITextFile": {
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
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["txt"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "content",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IZipFile": {
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
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["zip"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "size",
                        "count",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                "ArrayRecursiveUnionExplicit.IShortcut": {
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
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IDirectory",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IImageFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.ITextFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IZipFile",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                                {
                                    $ref: "#/components/schemas/ArrayRecursiveUnionExplicit.IShortcut",
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                        type: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["file"],
                        },
                        extension: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                            enum: ["lnk"],
                        },
                    },
                    nullable: false,
                    required: [
                        "id",
                        "name",
                        "path",
                        "target",
                        "type",
                        "extension",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    });