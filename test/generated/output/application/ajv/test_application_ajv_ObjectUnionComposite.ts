import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionComposite } from "../../../../structures/ObjectUnionComposite";

export const test_application_ajv_ObjectUnionComposite = _test_application(
    "ajv",
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
                $id: "#/components/schemas/ObjectUnionComposite.IPoint",
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
                required: ["x", "y"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ILine": {
                $id: "#/components/schemas/ObjectUnionComposite.ILine",
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
                required: ["p1", "p2"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ITriangle": {
                $id: "#/components/schemas/ObjectUnionComposite.ITriangle",
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
                required: ["p1", "p2", "p3"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IRectangle": {
                $id: "#/components/schemas/ObjectUnionComposite.IRectangle",
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
                required: ["p1", "p2", "p3", "p4"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPolyline": {
                $id: "#/components/schemas/ObjectUnionComposite.IPolyline",
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
                required: ["points"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPolygon": {
                $id: "#/components/schemas/ObjectUnionComposite.IPolygon",
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
                required: ["outer", "inner"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.IPointedShape": {
                $id: "#/components/schemas/ObjectUnionComposite.IPointedShape",
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
                required: ["outer", "inner"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionComposite.ICircle": {
                $id: "#/components/schemas/ObjectUnionComposite.ICircle",
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
                required: ["centroid", "radius"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "ajv",
    prefix: "#/components/schemas",
});