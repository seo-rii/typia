import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_isStringify_ObjectGenericAlias =
    _test_json_isStringify<ObjectGenericAlias>(ObjectGenericAlias)((input) =>
        ((input: ObjectGenericAlias.ISomething<string>): string | null => {
            const is = (
                input: any,
            ): input is ObjectGenericAlias.ISomething<string> => {
                return (
                    "object" === typeof input &&
                    null !== input &&
                    "string" === typeof (input as any).value
                );
            };
            const stringify = (
                input: ObjectGenericAlias.ISomething<string>,
            ): string => {
                const $string = (typia.json.isStringify as any).string;
                return `{"value":${$string((input as any).value)}}`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    );
