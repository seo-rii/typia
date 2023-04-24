import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { InstanceUnion } from "../../../structures/InstanceUnion";

export const test_validate_InstanceUnion = _test_validate(
    "InstanceUnion",
    InstanceUnion.generate,
    (input) =>
        ((input: any): typia.IValidation<Array<InstanceUnion.Union>> => {
            const __is = (input: any): input is Array<InstanceUnion.Union> => {
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.scale &&
                    null !== input.scale &&
                    "number" === typeof input.scale.x &&
                    Number.isFinite(input.scale.x) &&
                    "number" === typeof input.scale.y &&
                    Number.isFinite(input.scale.y) &&
                    "number" === typeof input.scale.z &&
                    Number.isFinite(input.scale.z) &&
                    "object" === typeof input.position &&
                    null !== input.position &&
                    "number" === typeof input.position.x &&
                    Number.isFinite(input.position.x) &&
                    "number" === typeof input.position.y &&
                    Number.isFinite(input.position.y) &&
                    "number" === typeof input.position.z &&
                    Number.isFinite(input.position.z) &&
                    "object" === typeof input.rotate &&
                    null !== input.rotate &&
                    "number" === typeof input.rotate.x &&
                    Number.isFinite(input.rotate.x) &&
                    "number" === typeof input.rotate.y &&
                    Number.isFinite(input.rotate.y) &&
                    "number" === typeof input.rotate.z &&
                    Number.isFinite(input.rotate.z) &&
                    "object" === typeof input.pivot &&
                    null !== input.pivot &&
                    "number" === typeof input.pivot.x &&
                    Number.isFinite(input.pivot.x) &&
                    "number" === typeof input.pivot.y &&
                    Number.isFinite(input.pivot.y) &&
                    "number" === typeof input.pivot.z &&
                    Number.isFinite(input.pivot.z);
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y) &&
                    "point" === input.type;
                const $io3 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "line" === input.type;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.x &&
                    Number.isFinite(input.x) &&
                    "number" === typeof input.y &&
                    Number.isFinite(input.y);
                const $io5 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "triangle" === input.type;
                const $io6 = (input: any): boolean =>
                    "object" === typeof input.p1 &&
                    null !== input.p1 &&
                    "number" === typeof input.p1.x &&
                    Number.isFinite(input.p1.x) &&
                    "number" === typeof input.p1.y &&
                    Number.isFinite(input.p1.y) &&
                    "object" === typeof input.p2 &&
                    null !== input.p2 &&
                    "number" === typeof input.p2.x &&
                    Number.isFinite(input.p2.x) &&
                    "number" === typeof input.p2.y &&
                    Number.isFinite(input.p2.y) &&
                    "object" === typeof input.p3 &&
                    null !== input.p3 &&
                    "number" === typeof input.p3.x &&
                    Number.isFinite(input.p3.x) &&
                    "number" === typeof input.p3.y &&
                    Number.isFinite(input.p3.y) &&
                    "object" === typeof input.p4 &&
                    null !== input.p4 &&
                    "number" === typeof input.p4.x &&
                    Number.isFinite(input.p4.x) &&
                    "number" === typeof input.p4.y &&
                    Number.isFinite(input.p4.y) &&
                    "rectangle" === input.type;
                const $io7 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    ) &&
                    "polyline" === input.type;
                const $io8 = (input: any): boolean =>
                    "object" === typeof input.outer &&
                    null !== input.outer &&
                    $io9(input.outer) &&
                    Array.isArray(input.inner) &&
                    input.inner.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io9(elem),
                    ) &&
                    "polygon" === input.type;
                const $io9 = (input: any): boolean =>
                    Array.isArray(input.points) &&
                    input.points.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io4(elem),
                    );
                const $io10 = (input: any): boolean =>
                    "object" === typeof input.centroid &&
                    null !== input.centroid &&
                    "number" === typeof input.centroid.x &&
                    Number.isFinite(input.centroid.x) &&
                    "number" === typeof input.centroid.y &&
                    Number.isFinite(input.centroid.y) &&
                    "number" === typeof input.radius &&
                    Number.isFinite(input.radius) &&
                    "circle" === input.type;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("point" === input.type) return $io2(input);
                        if ("line" === input.type) return $io3(input);
                        if ("triangle" === input.type) return $io5(input);
                        if ("rectangle" === input.type) return $io6(input);
                        if ("polyline" === input.type) return $io7(input);
                        if ("polygon" === input.type) return $io8(input);
                        if ("circle" === input.type) return $io10(input);
                        return false;
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null !== elem &&
                            undefined !== elem &&
                            (("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                                elem instanceof Uint8Array ||
                                (elem instanceof Set &&
                                    [...elem].every(
                                        (elem: any) =>
                                            "boolean" === typeof elem,
                                    )) ||
                                elem instanceof Map ||
                                (Array.isArray(elem) &&
                                    (() => {
                                        if (0 === elem.length) return true;
                                        const tupleList = [
                                            [
                                                (top: any) =>
                                                    elem.length === 2 &&
                                                    "string" ===
                                                        typeof elem[0] &&
                                                    "string" === typeof elem[1],
                                                (top: any) =>
                                                    top.length === 2 &&
                                                    "string" ===
                                                        typeof top[0] &&
                                                    "string" === typeof top[1],
                                            ],
                                            [
                                                (top: any) =>
                                                    elem.length === 3 &&
                                                    "boolean" ===
                                                        typeof elem[0] &&
                                                    "number" ===
                                                        typeof elem[1] &&
                                                    Number.isFinite(elem[1]) &&
                                                    "number" ===
                                                        typeof elem[2] &&
                                                    Number.isFinite(elem[2]),
                                                (top: any) =>
                                                    top.length === 3 &&
                                                    "boolean" ===
                                                        typeof top[0] &&
                                                    "number" ===
                                                        typeof top[1] &&
                                                    Number.isFinite(top[1]) &&
                                                    "number" ===
                                                        typeof top[2] &&
                                                    Number.isFinite(top[2]),
                                            ],
                                            [
                                                (top: any) => elem.length === 0,
                                                (top: any) => top.length === 0,
                                            ],
                                            [
                                                (top: any) =>
                                                    "object" === typeof top &&
                                                    null !== top &&
                                                    $iu0(top),
                                                (top: any) =>
                                                    top.every(
                                                        (elem: any) =>
                                                            "object" ===
                                                                typeof elem &&
                                                            null !== elem &&
                                                            $iu0(elem),
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    "boolean" === typeof top,
                                                (top: any) =>
                                                    top.every(
                                                        (elem: any) =>
                                                            "boolean" ===
                                                            typeof elem,
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    "number" === typeof top &&
                                                    Number.isFinite(top),
                                                (top: any) =>
                                                    top.every(
                                                        (elem: any) =>
                                                            "number" ===
                                                                typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            ),
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
                                        return false;
                                    })()) ||
                                ("object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem))),
                    )
                );
            };
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<InstanceUnion.Union> => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.scale &&
                                null !== input.scale) ||
                                $report(_exceptionable, {
                                    path: _path + ".scale",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.scale,
                                })) &&
                                $vo1(
                                    input.scale,
                                    _path + ".scale",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".scale",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.scale,
                                }),
                            ((("object" === typeof input.position &&
                                null !== input.position) ||
                                $report(_exceptionable, {
                                    path: _path + ".position",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.position,
                                })) &&
                                $vo1(
                                    input.position,
                                    _path + ".position",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".position",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.position,
                                }),
                            ((("object" === typeof input.rotate &&
                                null !== input.rotate) ||
                                $report(_exceptionable, {
                                    path: _path + ".rotate",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.rotate,
                                })) &&
                                $vo1(
                                    input.rotate,
                                    _path + ".rotate",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".rotate",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.rotate,
                                }),
                            ((("object" === typeof input.pivot &&
                                null !== input.pivot) ||
                                $report(_exceptionable, {
                                    path: _path + ".pivot",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.pivot,
                                })) &&
                                $vo1(
                                    input.pivot,
                                    _path + ".pivot",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".pivot",
                                    expected: "Resolve<ObjectSimple.IPoint3D>",
                                    value: input.pivot,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $report(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                }),
                            ("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $report(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                }),
                            ("number" === typeof input.z &&
                                Number.isFinite(input.z)) ||
                                $report(_exceptionable, {
                                    path: _path + ".z",
                                    expected: "number",
                                    value: input.z,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $report(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                }),
                            ("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $report(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                }),
                            "point" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"point"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                }),
                            "line" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"line"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $report(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                }),
                            ("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $report(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                                $vo4(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p3,
                                }),
                            "triangle" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"triangle"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo4(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo4(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                                $vo4(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p3,
                                }),
                            ((("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p4,
                                })) &&
                                $vo4(
                                    input.p4,
                                    _path + ".p4",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.p4,
                                }),
                            "rectangle" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"rectangle"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo7 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.points) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                                    value: input.points,
                                })) &&
                                input.points
                                    .map(
                                        (elem: any, _index6: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index6 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                                    value: elem,
                                                })) &&
                                                $vo4(
                                                    elem,
                                                    _path +
                                                        ".points[" +
                                                        _index6 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index6 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectUnionExplicit.IPoint>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                                    value: input.points,
                                }),
                            "polyline" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"polyline"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo8 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.outer &&
                                null !== input.outer) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPolyline>",
                                    value: input.outer,
                                })) &&
                                $vo9(
                                    input.outer,
                                    _path + ".outer",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPolyline>",
                                    value: input.outer,
                                }),
                            ((Array.isArray(input.inner) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                                    value: input.inner,
                                })) &&
                                input.inner
                                    .map(
                                        (elem: any, _index7: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index7 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionExplicit.IPolyline>",
                                                    value: elem,
                                                })) &&
                                                $vo9(
                                                    elem,
                                                    _path +
                                                        ".inner[" +
                                                        _index7 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".inner[" +
                                                    _index7 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectUnionExplicit.IPolyline>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPolyline>>",
                                    value: input.inner,
                                }),
                            "polygon" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"polygon"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo9 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.points) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                                    value: input.points,
                                })) &&
                                input.points
                                    .map(
                                        (elem: any, _index8: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index8 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                                    value: elem,
                                                })) &&
                                                $vo4(
                                                    elem,
                                                    _path +
                                                        ".points[" +
                                                        _index8 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index8 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectUnionExplicit.IPoint>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionExplicit.IPoint>>",
                                    value: input.points,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo10 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.centroid &&
                                null !== input.centroid) ||
                                $report(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.centroid,
                                })) &&
                                $vo4(
                                    input.centroid,
                                    _path + ".centroid",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected:
                                        "Resolve<ObjectUnionExplicit.IPoint>",
                                    value: input.centroid,
                                }),
                            ("number" === typeof input.radius &&
                                Number.isFinite(input.radius)) ||
                                $report(_exceptionable, {
                                    path: _path + ".radius",
                                    expected: "number",
                                    value: input.radius,
                                }),
                            "circle" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"circle"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("point" === input.type)
                                return $vo2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("line" === input.type)
                                return $vo3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("triangle" === input.type)
                                return $vo5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("rectangle" === input.type)
                                return $vo6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polyline" === input.type)
                                return $vo7(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("polygon" === input.type)
                                return $vo8(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("circle" === input.type)
                                return $vo10(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    '(ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint> | ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine> | ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle> | ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle> | ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline> | ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon> | ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>)',
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    'Array<(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)>',
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        (null !== elem ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                                value: elem,
                                            })) &&
                                        (undefined !== elem ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                                value: elem,
                                            })) &&
                                        (("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                            elem instanceof Uint8Array ||
                                            (elem instanceof Set &&
                                                [...elem]
                                                    .map(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            "boolean" ===
                                                                typeof elem ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "boolean",
                                                                value: elem,
                                                            }),
                                                    )
                                                    .every(
                                                        (flag: boolean) => flag,
                                                    )) ||
                                            elem instanceof Map ||
                                            (Array.isArray(elem) &&
                                                (() => {
                                                    if (0 === elem.length)
                                                        return true;
                                                    const tupleList = [
                                                        [
                                                            (top: any) =>
                                                                elem.length ===
                                                                    2 &&
                                                                [
                                                                    "string" ===
                                                                        typeof elem[0],
                                                                    "string" ===
                                                                        typeof elem[1],
                                                                ].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                            (top: any) =>
                                                                (top.length ===
                                                                    2 ||
                                                                    $report(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "]",
                                                                            expected:
                                                                                "[string, string]",
                                                                            value: top,
                                                                        },
                                                                    )) &&
                                                                [
                                                                    "string" ===
                                                                        typeof top[0] ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][0]",
                                                                                expected:
                                                                                    "string",
                                                                                value: top[0],
                                                                            },
                                                                        ),
                                                                    "string" ===
                                                                        typeof top[1] ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][1]",
                                                                                expected:
                                                                                    "string",
                                                                                value: top[1],
                                                                            },
                                                                        ),
                                                                ].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                elem.length ===
                                                                    3 &&
                                                                [
                                                                    "boolean" ===
                                                                        typeof elem[0],
                                                                    "number" ===
                                                                        typeof elem[1] &&
                                                                        Number.isFinite(
                                                                            elem[1],
                                                                        ),
                                                                    "number" ===
                                                                        typeof elem[2] &&
                                                                        Number.isFinite(
                                                                            elem[2],
                                                                        ),
                                                                ].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                            (top: any) =>
                                                                (top.length ===
                                                                    3 ||
                                                                    $report(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "]",
                                                                            expected:
                                                                                "[boolean, number, number]",
                                                                            value: top,
                                                                        },
                                                                    )) &&
                                                                [
                                                                    "boolean" ===
                                                                        typeof top[0] ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][0]",
                                                                                expected:
                                                                                    "boolean",
                                                                                value: top[0],
                                                                            },
                                                                        ),
                                                                    ("number" ===
                                                                        typeof top[1] &&
                                                                        Number.isFinite(
                                                                            top[1],
                                                                        )) ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][1]",
                                                                                expected:
                                                                                    "number",
                                                                                value: top[1],
                                                                            },
                                                                        ),
                                                                    ("number" ===
                                                                        typeof top[2] &&
                                                                        Number.isFinite(
                                                                            top[2],
                                                                        )) ||
                                                                        $report(
                                                                            true,
                                                                            {
                                                                                path:
                                                                                    _path +
                                                                                    "[" +
                                                                                    _index1 +
                                                                                    "][2]",
                                                                                expected:
                                                                                    "number",
                                                                                value: top[2],
                                                                            },
                                                                        ),
                                                                ].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                elem.length ===
                                                                    0 &&
                                                                [].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                            (top: any) =>
                                                                (top.length ===
                                                                    0 ||
                                                                    $report(
                                                                        true,
                                                                        {
                                                                            path:
                                                                                _path +
                                                                                "[" +
                                                                                _index1 +
                                                                                "]",
                                                                            expected:
                                                                                "[]",
                                                                            value: top,
                                                                        },
                                                                    )) &&
                                                                [].every(
                                                                    (
                                                                        flag: boolean,
                                                                    ) => flag,
                                                                ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                "object" ===
                                                                    typeof top &&
                                                                null !== top &&
                                                                $vu0(
                                                                    top,
                                                                    _path +
                                                                        "[0]",
                                                                    false,
                                                                ),
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index3: number,
                                                                        ) =>
                                                                            ((("object" ===
                                                                                typeof elem &&
                                                                                null !==
                                                                                    elem) ||
                                                                                $report(
                                                                                    true,
                                                                                    {
                                                                                        path:
                                                                                            _path +
                                                                                            "[" +
                                                                                            _index1 +
                                                                                            "][" +
                                                                                            _index3 +
                                                                                            "]",
                                                                                        expected:
                                                                                            '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                                                                        value: elem,
                                                                                    },
                                                                                )) &&
                                                                                $vu0(
                                                                                    elem,
                                                                                    _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index3 +
                                                                                        "]",
                                                                                    true,
                                                                                )) ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index3 +
                                                                                        "]",
                                                                                    expected:
                                                                                        '(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)',
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )
                                                                    .every(
                                                                        (
                                                                            flag: boolean,
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                "boolean" ===
                                                                typeof top,
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index4: number,
                                                                        ) =>
                                                                            "boolean" ===
                                                                                typeof elem ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index4 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "boolean",
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )
                                                                    .every(
                                                                        (
                                                                            flag: boolean,
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                        [
                                                            (top: any) =>
                                                                "number" ===
                                                                    typeof top &&
                                                                Number.isFinite(
                                                                    top,
                                                                ),
                                                            (top: any) =>
                                                                top
                                                                    .map(
                                                                        (
                                                                            elem: any,
                                                                            _index5: number,
                                                                        ) =>
                                                                            ("number" ===
                                                                                typeof elem &&
                                                                                Number.isFinite(
                                                                                    elem,
                                                                                )) ||
                                                                            $report(
                                                                                true,
                                                                                {
                                                                                    path:
                                                                                        _path +
                                                                                        "[" +
                                                                                        _index1 +
                                                                                        "][" +
                                                                                        _index5 +
                                                                                        "]",
                                                                                    expected:
                                                                                        "number",
                                                                                    value: elem,
                                                                                },
                                                                            ),
                                                                    )
                                                                    .every(
                                                                        (
                                                                            flag: boolean,
                                                                        ) =>
                                                                            flag,
                                                                    ),
                                                        ],
                                                    ];
                                                    const front = elem[0];
                                                    const filtered =
                                                        tupleList.filter(
                                                            (tuple) =>
                                                                true ===
                                                                tuple[0](front),
                                                        );
                                                    if (1 === filtered.length)
                                                        return filtered[0][1](
                                                            elem,
                                                        );
                                                    const array = elem;
                                                    if (1 < filtered.length)
                                                        for (const tuple of filtered)
                                                            if (
                                                                array.every(
                                                                    (
                                                                        value: any,
                                                                    ) =>
                                                                        true ===
                                                                        tuple[0](
                                                                            value,
                                                                        ),
                                                                )
                                                            )
                                                                return tuple[1](
                                                                    array,
                                                                );
                                                    return $report(
                                                        _exceptionable,
                                                        {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                '([string, string] | [boolean, number, number] | [] | Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number>)',
                                                            value: elem,
                                                        },
                                                    );
                                                })()) ||
                                            ("object" === typeof elem &&
                                                null !== elem &&
                                                $vo0(
                                                    elem,
                                                    _path + "[" + _index1 + "]",
                                                    true,
                                                )) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                                value: elem,
                                            }) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    '(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)',
                                                value: elem,
                                            })),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                'Array<(Array<(Resolve<ObjectUnionExplicit.Discriminator<"circle", ObjectUnionExplicit.ICircle>> | Resolve<ObjectUnionExplicit.Discriminator<"line", ObjectUnionExplicit.ILine>> | Resolve<ObjectUnionExplicit.Discriminator<"point", ObjectUnionExplicit.IPoint>> | Resolve<ObjectUnionExplicit.Discriminator<"polygon", ObjectUnionExplicit.IPolygon>> | Resolve<ObjectUnionExplicit.Discriminator<"polyline", ObjectUnionExplicit.IPolyline>> | Resolve<ObjectUnionExplicit.Discriminator<"rectangle", ObjectUnionExplicit.IRectangle>> | Resolve<ObjectUnionExplicit.Discriminator<"triangle", ObjectUnionExplicit.ITriangle>>)> | Array<boolean> | Array<number> | Map<any, any> | Resolve<ObjectSimple.IBox3D> | Set<boolean> | Uint8Array | [] | [boolean, number, number] | [string, string] | number)>',
                            value: input,
                        })
                    );
                })(input, "$input", true);
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
);