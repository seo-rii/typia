import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_misc_isPrune_ConstantConstEnumeration =
    _test_misc_isPrune<ConstantConstEnumeration>(ConstantConstEnumeration)(
        (input) =>
            ((
                input: any,
            ): input is Array<ConstantConstEnumeration.Enumeration> => {
                const is = (
                    input: any,
                ): input is Array<ConstantConstEnumeration.Enumeration> => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                0 === elem ||
                                1 === elem ||
                                2 === elem ||
                                "Three" === elem ||
                                "Four" === elem,
                        )
                    );
                };
                const prune = (
                    input: Array<ConstantConstEnumeration.Enumeration>,
                ): void => {};
                if (!is(input)) return false;
                prune(input);
                return true;
            })(input),
    );
