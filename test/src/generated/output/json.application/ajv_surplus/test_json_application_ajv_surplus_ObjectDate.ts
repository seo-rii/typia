import typia from "typia";

import { _test_json_application } from "../../../../internal/_test_json_application";
import { ObjectDate } from "../../../../structures/ObjectDate";

export const test_json_application_ajv_surplus_ObjectDate =
  _test_json_application({ purpose: "ajv", surplus: true, name: "ObjectDate" })(
    {
      schemas: [
        {
          $ref: "#/components/schemas/ObjectDate",
        },
      ],
      components: {
        schemas: {
          ObjectDate: {
            $id: "#/components/schemas/ObjectDate",
            type: "object",
            properties: {
              classDate: {
                oneOf: [
                  {
                    "x-typia-required": true,
                    "x-typia-optional": true,
                    type: "null",
                  },
                  {
                    type: "string",
                    format: "date-time",
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": true,
              },
              date: {
                oneOf: [
                  {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "null",
                  },
                  {
                    type: "string",
                    format: "date",
                    "x-typia-typeTags": [
                      {
                        target: "string",
                        name: 'Format<"date">',
                        kind: "format",
                        value: "date",
                        validate: "/^(\\d{4})-(\\d{2})-(\\d{2})$/.test($input)",
                        exclusive: ["format", "pattern"],
                      },
                    ],
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              datetime: {
                oneOf: [
                  {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "null",
                  },
                  {
                    type: "string",
                    format: "date-time",
                    "x-typia-typeTags": [
                      {
                        target: "string",
                        name: 'Format<"date-time">',
                        kind: "format",
                        value: "date-time",
                        validate: "!isNaN(new Date($input).getTime())",
                        exclusive: ["format", "pattern"],
                      },
                    ],
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              time: {
                oneOf: [
                  {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "null",
                  },
                  {
                    type: "string",
                    format: "time",
                    "x-typia-typeTags": [
                      {
                        target: "string",
                        name: 'Format<"time">',
                        kind: "format",
                        value: "time",
                        validate:
                          "/^(\\d\\d):(\\d\\d):(\\d\\d(?:\\.\\d+)?)(z|([+-])(\\d\\d)(?::?(\\d\\d))?)?$/i.test($input)",
                        exclusive: ["format", "pattern"],
                      },
                    ],
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
              duration: {
                oneOf: [
                  {
                    "x-typia-required": true,
                    "x-typia-optional": false,
                    type: "null",
                  },
                  {
                    type: "string",
                    format: "duration",
                    "x-typia-typeTags": [
                      {
                        target: "string",
                        name: 'Format<"duration">',
                        kind: "format",
                        value: "duration",
                        validate:
                          "/^P(?!$)((\\d+Y)?(\\d+M)?(\\d+D)?(T(?=\\d)(\\d+H)?(\\d+M)?(\\d+S)?)?|(\\d+W)?)$/.test($input)",
                        exclusive: ["format", "pattern"],
                      },
                    ],
                  },
                ],
                "x-typia-required": true,
                "x-typia-optional": false,
              },
            },
            required: ["date", "datetime", "time", "duration"],
            "x-typia-jsDocTags": [],
          },
        },
      },
      purpose: "ajv",
      surplus: true,
    },
  );
