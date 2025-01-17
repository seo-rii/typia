import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectHierarchical } from "../../../../structures/ObjectHierarchical";

export const test_json_application_swagger_surplus_ObjectHierarchical =
  _test_json_application({
    purpose: "swagger",
    surplus: true,
    name: "ObjectHierarchical",
  })({
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
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            channel: {
              $ref: "#/components/schemas/ObjectHierarchical.IChannel",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            member: {
              $ref: "#/components/schemas/ObjectHierarchical.IMember.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            href: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            referrer: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            ip: {
              type: "array",
              items: {
                type: "number",
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              "x-typia-required": true,
              "x-typia-optional": false,
              minItems: 4,
              maxItems: 4,
              "x-typia-tuple": {
                type: "array",
                items: [
                  {
                    type: "number",
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                  },
                  {
                    type: "number",
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                  },
                  {
                    type: "number",
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                  },
                  {
                    type: "number",
                    "x-typia-rest": false,
                    "x-typia-required": true,
                    "x-typia-optional": false,
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
                minItems: 4,
                maxItems: 4,
              },
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
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
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IChannel": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            sequence: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            exclusive: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            priority: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
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
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.ITimestamp": {
          type: "object",
          properties: {
            time: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            zone: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["time", "zone"],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IMember.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            enterprise: {
              $ref: "#/components/schemas/ObjectHierarchical.IEnterprise.Nullable",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            emails: {
              type: "array",
              items: {
                type: "string",
              },
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            authorized: {
              type: "boolean",
              "x-typia-required": true,
              "x-typia-optional": false,
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
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IAccount": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: false,
          required: ["id", "code", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IEnterprise.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            account: {
              $ref: "#/components/schemas/ObjectHierarchical.IAccount",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            name: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            grade: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["id", "account", "name", "grade", "created_at"],
          "x-typia-jsDocTags": [],
        },
        "ObjectHierarchical.IAccount.Nullable": {
          type: "object",
          properties: {
            id: {
              type: "number",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            code: {
              type: "string",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
            created_at: {
              $ref: "#/components/schemas/ObjectHierarchical.ITimestamp",
              "x-typia-required": true,
              "x-typia-optional": false,
            },
          },
          nullable: true,
          required: ["id", "code", "created_at"],
          "x-typia-jsDocTags": [],
        },
      },
    },
    purpose: "swagger",
    surplus: true,
  });
