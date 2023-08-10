import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_is_ArrayHierarchicalPointer =
    _test_is<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)(
        (input: any): input is ArrayHierarchicalPointer => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "number" === typeof input.serial &&
                Number.isFinite(input.serial) &&
                "string" === typeof input.name &&
                "object" === typeof input.established_at &&
                null !== input.established_at &&
                "number" === typeof (input.established_at as any).time &&
                Number.isFinite((input.established_at as any).time) &&
                "number" === typeof (input.established_at as any).zone &&
                Number.isFinite((input.established_at as any).zone) &&
                Array.isArray(input.departments) &&
                input.departments.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "number" === typeof input.sales &&
                Number.isFinite(input.sales) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof (input.created_at as any).time &&
                Number.isFinite((input.created_at as any).time) &&
                "number" === typeof (input.created_at as any).zone &&
                Number.isFinite((input.created_at as any).zone) &&
                Array.isArray(input.employees) &&
                input.employees.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io4(elem),
                );
            const $io4 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                "number" === typeof input.grade &&
                Number.isFinite(input.grade) &&
                "object" === typeof input.employeed_at &&
                null !== input.employeed_at &&
                "number" === typeof (input.employeed_at as any).time &&
                Number.isFinite((input.employeed_at as any).time) &&
                "number" === typeof (input.employeed_at as any).zone &&
                Number.isFinite((input.employeed_at as any).zone);
            return "object" === typeof input && null !== input && $io0(input);
        },
    );
