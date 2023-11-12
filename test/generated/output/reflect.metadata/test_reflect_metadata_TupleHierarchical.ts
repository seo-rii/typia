import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_reflect_metadata_TupleHierarchical = _test_reflect_metadata(
    "TupleHierarchical",
)(
    (typia.reflect.metadata as any).from({
        metadatas: [
            {
                any: false,
                required: true,
                optional: false,
                nullable: false,
                functional: false,
                atomics: [],
                constants: [],
                templates: [],
                escaped: null,
                rest: null,
                arrays: [],
                tuples: [
                    {
                        name: "TupleHierarchical",
                        tags: [],
                    },
                ],
                objects: [],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [],
            aliases: [],
            arrays: [
                {
                    name: "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                    value: {
                        any: false,
                        required: true,
                        optional: false,
                        nullable: false,
                        functional: false,
                        atomics: [],
                        constants: [],
                        templates: [],
                        escaped: null,
                        rest: null,
                        arrays: [],
                        tuples: [
                            {
                                name: "[string, boolean, [number, number, [boolean, string]][]]",
                                tags: [],
                            },
                        ],
                        objects: [],
                        aliases: [],
                        natives: [],
                        sets: [],
                        maps: [],
                    },
                    nullables: [false],
                    recursive: false,
                    index: null,
                },
                {
                    name: "Array<[number, number, [boolean, string]]>",
                    value: {
                        any: false,
                        required: true,
                        optional: false,
                        nullable: false,
                        functional: false,
                        atomics: [],
                        constants: [],
                        templates: [],
                        escaped: null,
                        rest: null,
                        arrays: [],
                        tuples: [
                            {
                                name: "[number, number, [boolean, string]]",
                                tags: [],
                            },
                        ],
                        objects: [],
                        aliases: [],
                        natives: [],
                        sets: [],
                        maps: [],
                    },
                    nullables: [false],
                    recursive: false,
                    index: null,
                },
            ],
            tuples: [
                {
                    name: "TupleHierarchical",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: true,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [
                                {
                                    name: "[boolean, null, [number, [boolean, string]]]",
                                    tags: [],
                                },
                            ],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [
                                {
                                    name: "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                                    tags: [],
                                },
                            ],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[boolean, null, [number, [boolean, string]]]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: true,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [
                                {
                                    name: "[number, [boolean, string]]",
                                    tags: [],
                                },
                            ],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[number, [boolean, string]]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [
                                {
                                    name: "[boolean, string]",
                                    tags: [],
                                },
                            ],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[boolean, string]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "string",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[number, [string, boolean, [number, number, [boolean, string]][]][]]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [
                                {
                                    name: "Array<[string, boolean, [number, number, [boolean, string]][]]>",
                                    tags: [],
                                },
                            ],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[string, boolean, [number, number, [boolean, string]][]]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "string",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "boolean",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [
                                {
                                    name: "Array<[number, number, [boolean, string]]>",
                                    tags: [],
                                },
                            ],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
                {
                    name: "[number, number, [boolean, string]]",
                    index: null,
                    elements: [
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [
                                {
                                    type: "number",
                                    tags: [],
                                },
                            ],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                        {
                            any: false,
                            required: true,
                            optional: false,
                            nullable: false,
                            functional: false,
                            atomics: [],
                            constants: [],
                            templates: [],
                            escaped: null,
                            rest: null,
                            arrays: [],
                            tuples: [
                                {
                                    name: "[boolean, string]",
                                    tags: [],
                                },
                            ],
                            objects: [],
                            aliases: [],
                            natives: [],
                            sets: [],
                            maps: [],
                        },
                    ],
                    recursive: false,
                    nullables: [false],
                },
            ],
        },
    }),
);
