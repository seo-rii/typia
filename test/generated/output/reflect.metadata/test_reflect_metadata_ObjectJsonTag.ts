import typia from "../../../../src";
import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_reflect_metadata_ObjectJsonTag = _test_reflect_metadata(
    "ObjectJsonTag",
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
                tuples: [],
                objects: ["ObjectJsonTag"],
                aliases: [],
                natives: [],
                sets: [],
                maps: [],
            },
        ],
        components: {
            objects: [
                {
                    name: "ObjectJsonTag",
                    properties: [
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["vulnerable"],
                                    },
                                ],
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
                            value: {
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
                            description: null,
                            jsDocTags: [
                                {
                                    name: "deprecated",
                                },
                            ],
                        },
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["description"],
                                    },
                                ],
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
                            value: {
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
                            description: "Descripted property.",
                            jsDocTags: [],
                        },
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["title"],
                                    },
                                ],
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
                            value: {
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
                            description: "Titled property.",
                            jsDocTags: [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            key: {
                                any: false,
                                required: true,
                                optional: false,
                                nullable: false,
                                functional: false,
                                atomics: [],
                                constants: [
                                    {
                                        type: "string",
                                        values: ["complicate_title"],
                                    },
                                ],
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
                            value: {
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
                            description: "Complicate title.",
                            jsDocTags: [
                                {
                                    name: "title",
                                    text: [
                                        {
                                            text: "something weirdo with ",
                                            kind: "text",
                                        },
                                        {
                                            text: "{@link ",
                                            kind: "link",
                                        },
                                        {
                                            text: "something ",
                                            kind: "linkText",
                                        },
                                        {
                                            text: "}",
                                            kind: "link",
                                        },
                                        {
                                            text: " tag",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    jsDocTags: [],
                    index: 0,
                    validated: false,
                    recursive: false,
                    nullables: [false],
                },
            ],
            aliases: [],
            arrays: [],
            tuples: [],
        },
    }),
);
