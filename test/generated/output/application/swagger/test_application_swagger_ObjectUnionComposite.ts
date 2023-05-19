import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";

export const test_application_swagger_ObjectUnionComposite = _test_application(
    "swagger",
)("ObjectUnionComposite", {
    schemas: [
        {
            type: "array",
            items: {
                oneOf: [
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.ILine",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.ITriangle",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.IRectangle",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPolygon",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPointedShape",
                    },
                    {
                        $ref: "#/components/schemas/ObjectUnionComposite.ICircle",
                    },
                ],
            },
        },
    ],
    components: {
        schemas: {
            "ObjectUnionComposite.IPoint": {
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
                },
                nullable: false,
                required: ["x", "y"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ILine": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ITriangle": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IRectangle": {
                type: "object",
                properties: {
                    p1: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p2: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p3: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    p4: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3", "p4"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPolyline": {
                type: "object",
                properties: {
                    points: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["points"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPolygon": {
                type: "object",
                properties: {
                    outer: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    inner: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionComposite.IPolyline",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                },
                nullable: false,
                required: ["outer", "inner"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPointedShape": {
                type: "object",
                properties: {
                    outer: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                            description: "",
                            "x-typia-required": true,
                            "x-typia-optional": false,
                        },
                    },
                    inner: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                },
                nullable: false,
                required: ["outer", "inner"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ICircle": {
                type: "object",
                properties: {
                    centroid: {
                        $ref: "#/components/schemas/ObjectUnionComposite.IPoint",
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                    },
                    radius: {
                        description: "",
                        "x-typia-required": true,
                        "x-typia-optional": false,
                        type: "number",
                    },
                },
                nullable: false,
                required: ["centroid", "radius"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});