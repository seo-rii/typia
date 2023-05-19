import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_application_ajv_ObjectUnionImplicit = _test_application(
    "ajv",
)("ObjectUnionImplicit", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ILine",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ITriangle",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IRectangle",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolygon",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionImplicit.ICircle",
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ObjectUnionImplicit.IPoint": {
                $id: "#/components/schemas/ObjectUnionImplicit.IPoint",
                type: "object",
                properties: {
                    x: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    y: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    slope: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["x", "y"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ILine": {
                $id: "#/components/schemas/ObjectUnionImplicit.ILine",
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    width: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                    distance: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["p1", "p2"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ITriangle": {
                $id: "#/components/schemas/ObjectUnionImplicit.ITriangle",
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    width: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                    height: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                    area: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["p1", "p2", "p3"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IRectangle": {
                $id: "#/components/schemas/ObjectUnionImplicit.IRectangle",
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p4: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    width: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                    height: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                    area: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["p1", "p2", "p3", "p4"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolyline": {
                $id: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                type: "object",
                properties: {
                    points: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    length: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["points"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolygon": {
                $id: "#/components/schemas/ObjectUnionImplicit.IPolygon",
                type: "object",
                properties: {
                    outer: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    inner: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionImplicit.IPolyline",
                            description: "",
                            "x-typia-required": false,
                            "x-typia-optional": true,
                        },
                    },
                    area: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["outer"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ICircle": {
                $id: "#/components/schemas/ObjectUnionImplicit.ICircle",
                type: "object",
                properties: {
                    centroid: {
                        $ref: "#/components/schemas/ObjectUnionImplicit.IPoint",
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                    },
                    radius: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                    area: {
                        oneOf: [
                            {
                                description: "",
                                "x-typia-required": false,
                                "x-typia-optional": true,
                                type: "null",
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
                },
                required: ["radius"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});