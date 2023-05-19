import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createAssertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: any): string => {
        const assert = (input: any): ArrayUnion => {
            const $guard = (typia.createAssertStringify as any).guard;
            const __is = (input: any): input is ArrayUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) &&
                            (() => {
                                if (0 === elem.length) return true;
                                const tupleList = [
                                    [
                                        (top: any) => "boolean" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "boolean" === typeof elem,
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "number" === typeof elem &&
                                                    Number.isFinite(elem),
                                            ),
                                    ],
                                    [
                                        (top: any) => "string" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any) =>
                                                    "string" === typeof elem,
                                            ),
                                    ],
                                ];
                                const front = elem[0];
                                const filtered = tupleList.filter(
                                    (tuple) => true === tuple[0](front),
                                );
                                if (1 === filtered.length)
                                    return filtered[0][1](elem);
                                const array = elem;
                                if (1 < filtered.length)
                                    for (const tuple of filtered)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === tuple[0](value),
                                            )
                                        )
                                            return tuple[1](array);
                                return false;
                            })(),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayUnion => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Array<boolean> | Array<number> | Array<string>)>",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                (Array.isArray(elem) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Array<string>)",
                                        value: elem,
                                    })) &&
                                (() => {
                                    if (0 === elem.length) return true;
                                    const tupleList = [
                                        [
                                            (top: any) =>
                                                "boolean" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index2: number,
                                                    ) =>
                                                        "boolean" ===
                                                            typeof elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected: "boolean",
                                                            value: elem,
                                                        }),
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "number" === typeof top &&
                                                Number.isFinite(top),
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index2: number,
                                                    ) =>
                                                        ("number" ===
                                                            typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            )) ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected: "number",
                                                            value: elem,
                                                        }),
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "string" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (
                                                        elem: any,
                                                        _index2: number,
                                                    ) =>
                                                        "string" ===
                                                            typeof elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected: "string",
                                                            value: elem,
                                                        }),
                                                ),
                                        ],
                                    ];
                                    const front = elem[0];
                                    const filtered = tupleList.filter(
                                        (tuple) => true === tuple[0](front),
                                    );
                                    if (1 === filtered.length)
                                        return filtered[0][1](elem);
                                    const array = elem;
                                    if (1 < filtered.length)
                                        for (const tuple of filtered)
                                            if (
                                                array.every(
                                                    (value: any) =>
                                                        true ===
                                                        tuple[0](value),
                                                )
                                            )
                                                return tuple[1](array);
                                    return $guard(_exceptionable, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Array<boolean> | Array<number> | Array<string>)",
                                        value: elem,
                                    });
                                })(),
                        )
                    );
                })(input, "$input", true);
            return input;
        };
        const stringify = (input: ArrayUnion): string => {
            const $number = (typia.createAssertStringify as any).number;
            const $string = (typia.createAssertStringify as any).string;
            const $throws = (typia.createAssertStringify as any).throws;
            return `[${input
                .map((elem: any) =>
                    (() => {
                        if (0 === elem.length) return "[]";
                        const tupleList = [
                            [
                                (top: any) => "boolean" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => elem)
                                        .join(",")}]`,
                            ],
                            [
                                (top: any) => "number" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => $number(elem))
                                        .join(",")}]`,
                            ],
                            [
                                (top: any) => "string" === typeof top,
                                (top: any) =>
                                    `[${top
                                        .map((elem: any) => $string(elem))
                                        .join(",")}]`,
                            ],
                        ];
                        const front = elem[0];
                        const filtered = tupleList.filter(
                            (tuple) => true === tuple[0](front),
                        );
                        if (1 === filtered.length) return filtered[0][1](elem);
                        const array = elem;
                        if (1 < filtered.length)
                            for (const tuple of filtered)
                                if (
                                    array.every(
                                        (value: any) =>
                                            true === tuple[0](value),
                                    )
                                )
                                    return tuple[1](array);
                        $throws({
                            expected:
                                "(Array<boolean> | Array<number> | Array<string>)",
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`;
        };
        return stringify(assert(input));
    },
    ArrayUnion.SPOILERS,
);