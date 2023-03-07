import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_createValidateEquals_ArrayRecursiveUnionExplicit =
    _test_validateEquals(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input: any): typia.IValidation<ArrayRecursiveUnionExplicit> => {
            const errors = [] as any[];
            const $report = (typia.createValidateEquals as any).report(errors);
            const $join = (typia.createValidateEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicit => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.path ||
                            $report(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            }),
                        ((Array.isArray(input.children) ||
                            $report(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                                value: input.children,
                            })) &&
                            input.children
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".children[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                                value: elem,
                                            })) &&
                                            $vu0(
                                                elem,
                                                _path +
                                                    ".children[" +
                                                    _index2 +
                                                    "]",
                                                true && _exceptionable,
                                            )) ||
                                        $report(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                                value: input.children,
                            }),
                        "directory" === input.type ||
                            $report(_exceptionable, {
                                path: _path + ".type",
                                expected: '"directory"',
                                value: input.type,
                            }),
                        5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "path",
                                            "children",
                                            "type",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.path ||
                            $report(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            }),
                        ("number" === typeof input.width &&
                            Number.isFinite(input.width)) ||
                            $report(_exceptionable, {
                                path: _path + ".width",
                                expected: "number",
                                value: input.width,
                            }),
                        ("number" === typeof input.height &&
                            Number.isFinite(input.height)) ||
                            $report(_exceptionable, {
                                path: _path + ".height",
                                expected: "number",
                                value: input.height,
                            }),
                        "string" === typeof input.url ||
                            $report(_exceptionable, {
                                path: _path + ".url",
                                expected: "string",
                                value: input.url,
                            }),
                        ("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $report(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            }),
                        "file" === input.type ||
                            $report(_exceptionable, {
                                path: _path + ".type",
                                expected: '"file"',
                                value: input.type,
                            }),
                        "jpg" === input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: '"jpg"',
                                value: input.extension,
                            }),
                        9 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "path",
                                            "width",
                                            "height",
                                            "url",
                                            "size",
                                            "type",
                                            "extension",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.path ||
                            $report(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            }),
                        ("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $report(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            }),
                        "string" === typeof input.content ||
                            $report(_exceptionable, {
                                path: _path + ".content",
                                expected: "string",
                                value: input.content,
                            }),
                        "file" === input.type ||
                            $report(_exceptionable, {
                                path: _path + ".type",
                                expected: '"file"',
                                value: input.type,
                            }),
                        "txt" === input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: '"txt"',
                                value: input.extension,
                            }),
                        7 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "path",
                                            "size",
                                            "content",
                                            "type",
                                            "extension",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.path ||
                            $report(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            }),
                        ("number" === typeof input.size &&
                            Number.isFinite(input.size)) ||
                            $report(_exceptionable, {
                                path: _path + ".size",
                                expected: "number",
                                value: input.size,
                            }),
                        ("number" === typeof input.count &&
                            Number.isFinite(input.count)) ||
                            $report(_exceptionable, {
                                path: _path + ".count",
                                expected: "number",
                                value: input.count,
                            }),
                        "file" === input.type ||
                            $report(_exceptionable, {
                                path: _path + ".type",
                                expected: '"file"',
                                value: input.type,
                            }),
                        "zip" === input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: '"zip"',
                                value: input.extension,
                            }),
                        7 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "path",
                                            "size",
                                            "count",
                                            "type",
                                            "extension",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vo4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        "string" === typeof input.path ||
                            $report(_exceptionable, {
                                path: _path + ".path",
                                expected: "string",
                                value: input.path,
                            }),
                        ((("object" === typeof input.target &&
                            null !== input.target) ||
                            $report(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                value: input.target,
                            })) &&
                            $vu0(
                                input.target,
                                _path + ".target",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                value: input.target,
                            }),
                        "file" === input.type ||
                            $report(_exceptionable, {
                                path: _path + ".type",
                                expected: '"file"',
                                value: input.type,
                            }),
                        "lnk" === input.extension ||
                            $report(_exceptionable, {
                                path: _path + ".extension",
                                expected: '"lnk"',
                                value: input.extension,
                            }),
                        6 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input)
                                .map((key) => {
                                    if (
                                        [
                                            "id",
                                            "name",
                                            "path",
                                            "target",
                                            "type",
                                            "extension",
                                        ].some((prop) => key === prop)
                                    )
                                        return true;
                                    const value = input[key];
                                    if (undefined === value) return true;
                                    return $report(_exceptionable, {
                                        path: _path + $join(key),
                                        expected: "undefined",
                                        value: value,
                                    });
                                })
                                .every((flag: boolean) => flag),
                    ].every((flag: boolean) => flag);
                const $vu0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if ("directory" === input.type)
                            return $vo0(input, _path, true && _exceptionable);
                        if ("jpg" === input.extension)
                            return $vo1(input, _path, true && _exceptionable);
                        if ("txt" === input.extension)
                            return $vo2(input, _path, true && _exceptionable);
                        if ("zip" === input.extension)
                            return $vo3(input, _path, true && _exceptionable);
                        if ("lnk" === input.extension)
                            return $vo4(input, _path, true && _exceptionable);
                        return $report(_exceptionable, {
                            path: _path,
                            expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                            value: input,
                        });
                    })();
                return (
                    ((Array.isArray(input) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                            value: input,
                        })) &&
                        input
                            .map(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                            value: elem,
                                        })) &&
                                        $vu0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                        value: elem,
                                    }),
                            )
                            .every((flag: boolean) => flag)) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
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
        },
    );