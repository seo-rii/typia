import typia from "../../../../../src";
import { _test_application } from "../../../../internal/_test_application";
import { ObjectUnionImplicit } from "../../../../structures/ObjectUnionImplicit";

export const test_application_swagger_ObjectUnionImplicit = _test_application(
    "swagger",
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["x", "y"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ILine": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                    distance: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["p1", "p2"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ITriangle": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                    height: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                    area: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IRectangle": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                    height: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                    area: {
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["p1", "p2", "p3", "p4"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolyline": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["points"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.IPolygon": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["outer"],
                description: "",
                "x-typia-jsDocTags": [],
            },
            "ObjectUnionImplicit.ICircle": {
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
                        description: "",
                        "x-typia-required": false,
                        "x-typia-optional": true,
                        type: "number",
                        nullable: true,
                    },
                },
                nullable: false,
                required: ["radius"],
                description: "",
                "x-typia-jsDocTags": [],
            },
        },
    },
    purpose: "swagger",
    prefix: "#/components/schemas",
});