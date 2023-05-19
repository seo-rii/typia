import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUndefined } from "../../../../structures/ObjectUndefined";

export const test_application_swagger_ObjectUndefined = _test_application(
    "swagger",
)("ObjectUndefined", {
    schemas: [
        {
            type: "array",
            items: {
                $ref: "#/components/schemas/ObjectUndefined.ILecture",
            },
        },
    ],
    components: {
        schemas: {
            "ObjectUndefined.ILecture": {
                type: "object",
                properties: {
                    name: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    professor: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "string",
                            },
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "number",
                            },
                        ],
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                    },
                    classroom: {
                        $ref: "#/components/schemas/ObjectUndefined.IClassroom",
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                    },
                    grade: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    unknown: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["name", "unknown"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUndefined.IClassroom": {
                type: "object",
                properties: {
                    id: {
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
                },
                nullable: false,
                required: ["id", "name"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});