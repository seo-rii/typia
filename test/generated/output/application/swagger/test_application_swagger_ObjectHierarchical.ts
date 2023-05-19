import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_application_swagger_ObjectHierarchical = _test_application(
    "swagger",
)("ObjectHierarchical", {
    schemas: [
        {
            $ref: "#/components/schemas/ObjectHierarchical.ICustomer",
        },
    ],
    components: {
        schemas: {
            "ObjectHierarchical.ICustomer": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    channel: {
                        $ref: "#/components/schemas/ObjectHierarchical.IChannel",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    member: {
                        $ref: "#/components/schemas/ObjectHierarchical.IMember.Nullable",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount.Nullable",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    href: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    referrer: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    ip: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "number",
                        },
                        "x-typia-tuple": {
                            type: "array",
                            items: [
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    type: "number",
                                },
                                {
                                    description: "",
                                    "x-typia-required": true,
                                    "x-typia-optional": false,
                                    "x-typia-rest": false,
                                    type: "number",
                                },
                            ],
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: [
                    "id",
                    "channel",
                    "member",
                    "account",
                    "href",
                    "referrer",
                    "ip",
                    "created_at",
                ],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.IChannel": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    code: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    sequence: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    exclusive: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                    priority: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: [
                    "id",
                    "code",
                    "name",
                    "sequence",
                    "exclusive",
                    "priority",
                    "created_at",
                ],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.ITimestamp": {
                type: "object",
                properties: {
                    time: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    zone: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["time", "zone"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.IMember.Nullable": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    enterprise: {
                        $ref: "#/components/schemas/ObjectHierarchical.IEnterprise.Nullable",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    emails: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            type: "string",
                        },
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    authorized: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "boolean",
                    },
                },
                nullable: true,
                required: [
                    "id",
                    "account",
                    "enterprise",
                    "emails",
                    "created_at",
                    "authorized",
                ],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.IAccount": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    code: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["id", "code", "created_at"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.IEnterprise.Nullable": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    account: {
                        $ref: "#/components/schemas/ObjectHierarchical.IAccount",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    grade: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: true,
                required: ["id", "account", "name", "grade", "created_at"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectHierarchical.IAccount.Nullable": {
                type: "object",
                properties: {
                    id: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    code: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    created_at: {
                        $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: true,
                required: ["id", "code", "created_at"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});