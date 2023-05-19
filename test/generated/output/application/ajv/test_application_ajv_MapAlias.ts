import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { MapAlias } from "../../../../structures/MapAlias";

export const test_application_ajv_MapAlias = _test_application("ajv")(
    "MapAlias",
    {
        schemas: [
            {
                $ref: "#/components/schemas/MapAlias",
            },
        ],
        components: {
            schemas: {
                MapAlias: {
                    $id: "#/components/schemas/MapAlias",
                    type: "object",
                    properties: {
                        boolean: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        number: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        strings: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        arrays: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                        objects: {
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                            $ref: "#/components/schemas/Map",
                        },
                    },
                    required: [
                        "boolean",
                        "number",
                        "strings",
                        "arrays",
                        "objects",
                    ],
                    description: "",
                    "x-typia-jsDocTags": [],
                },
                Map: {
                    type: "object",
                    $id: "#/components/schemas/Map",
                    properties: {},
                },
            },
        },
        purpose: "ajv",
        prefix: "#/components/schemas",
    },
);