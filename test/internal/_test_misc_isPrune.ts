import { TestStructure } from "../helpers/TestStructure";

export const _test_misc_isPrune =
    <T>(factory: TestStructure<T>) =>
    (prune: (input: T) => boolean) =>
    () => {
        const input: T = factory.generate();

        // SPOIL OBJECTS
        iterate((obj: any) =>
            new Array(10)
                .fill("")
                .forEach(
                    (_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable"),
                ),
        )(input);

        // DO VALIDATE
        if (prune(input) === false)
            throw new Error(
                `Bug on typia.misc.isPrune(): failed to understand the ${factory.constructor.name} type.`,
            );
        else if (prune.toString().indexOf("RegExp(/(.*)/).test") === -1)
            iterate((obj: any) => {
                if (
                    Object.keys(obj).some(
                        (key) => key.indexOf("__non_regular_type__") === 0,
                    )
                )
                    throw new Error(
                        `Bug on typia.misc.isPrune(): failed to prune the ${factory.constructor.name} type.`,
                    );
            })(input);

        // SPOIL
        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            spoil(elem);

            if (prune(elem) === true)
                throw new Error(
                    `Bug on typia.misc.isPrune(): failed to detect error on the ${factory.constructor.name} type.`,
                );
        }
    };

const iterate =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        if (Array.isArray(input)) return iterate_array(closure)(input);
        else if (
            input !== null &&
            typeof input === "object" &&
            typeof input.valueOf() === "object"
        )
            return iterate_object(closure)(input);
    };

const iterate_object =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        closure(input);
        for (const value of Object.values(input)) iterate(closure)(value);
    };

const iterate_array =
    (closure: (obj: any) => void) =>
    (input: any): void =>
        input.forEach((elem: any) => iterate(closure)(elem));
