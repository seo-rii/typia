import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { DynamicEnumeration } from "../../../../structures/DynamicEnumeration";

export const test_application_swagger_DynamicEnumeration = _test_application(
    "swagger",
)("DynamicEnumeration", {
    schemas: [
        {
            $ref: "#/components/schemas/DynamicEnumeration",
        },
    ],
    components: {
        schemas: {
            DynamicEnumeration: {
                type: "object",
                properties: {
                    ar: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    "zh-Hans": {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    "zh-Hant": {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    en: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    fr: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    de: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    ja: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    ko: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    pt: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                    ru: {
                        "x-typia-required": false,
                        "x-typia-optional": false,
                        type: "string",
                    },
                },
                nullable: false,
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});