/* ===========================================================
    MISCELLAENOUS
      - LITERALS
      - CLONE
      - PRUNE
      - FACTORY FUNCTIONS
==============================================================
    LITERALS
----------------------------------------------------------- */
import { Atomic } from "./typings/Atomic";

import { IValidation } from "./IValidation";
import { Resolved } from "./Resolved";

/**
 * > You must configure the generic argument `T`.
 *
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function literals(): never;

/**
 * Union literal type to array.
 *
 * Converts a union literal type to an array of its members.
 *
 * ```typescript
 * literals<"A" | "B" | 1>; // ["A", "B", 1]
 * ```
 *
 * @template T Union literal type
 * @return Array of union literal type's members
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function literals<T extends Atomic.Type | null>(): T[];

/**
 * @internal
 */
export function literals(): never {
  halt("literals");
}

/* -----------------------------------------------------------
    CLONE
----------------------------------------------------------- */
/**
 * Clone a data.
 *
 * Clones an instance following type `T`. If the target *input* value or its member
 * variable contains a class instance having methods, those methods would not be
 * cloned.
 *
 * For reference, this `typia.misc.clone()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would be better to call
 * {@link assertClone} function instead.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function clone<T>(input: T): Resolved<T>;

/**
 * @internal
 */
export function clone(): never {
  halt("clone");
}

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertClone<T>(input: T): Resolved<T>;

/**
 * Clone a data with type assertion.
 *
 * Clones an instance following type `T`, with type assertion. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertClone<T>(input: unknown): Resolved<T>;

/**
 * @internal
 */
export function assertClone(): never {
  halt("assertClone");
}

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isClone<T>(input: T): Resolved<T> | null;

/**
 * Clone a data with type checking.
 *
 * Clones an instance following type `T`, with type checking. If the target `input`
 * value or its member variable contains a class instance having methods, those
 * methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `null` value instead. Otherwise, there's no problem on the `input` value, cloned
 * data would be returned.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @return Cloned data when exact type, otherwise null
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isClone<T>(input: unknown): Resolved<T> | null;

/**
 * @internal
 */
export function isClone(): never {
  halt("isClone");
}

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance having methods,
 * those methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export function validateClone<T>(input: T): IValidation<Resolved<T>>;

/**
 * Clone a data with detailed type validation.
 *
 * Clones an instance following type `T`, with detailed type validation. If the target
 * `input` value or its member variable contains a class instance having methods,
 * those methods would not be cloned.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.Failure} value. Otherwise, there's no problem on the `input`
 * value, cloned data would be stored in `data` property of the output
 * {@link IValidation.Success} instance.
 *
 * @template T Type of the input value
 * @param input A value to be cloned
 * @returns Validation result with cloned value
 */
export function validateClone<T>(input: unknown): IValidation<Resolved<T>>;

/**
 * @internal
 */
export function validateClone(): never {
  halt("validateClone");
}

/* -----------------------------------------------------------
    PRUNE
----------------------------------------------------------- */
/**
 * Prune, erase superfluous properties.
 *
 * Remove every superfluous properties from the `input` object, even including nested
 * objects. Note that, as every superfluous properties would be deleted, you never can
 * read those superfluous properties after calling this `prune()` function.
 *
 * For reference, this `typia.misc.prune()` function does not validate the input value
 * type. It just believes that the input value is following the type `T`. Therefore,
 * if you can't ensure the input value type, it would better to call one of below
 * functions instead.
 *
 *   - {@link assertPrune}
 *   - {@link isPrune}
 *   - {@link validatePrune}
 *
 * @template T Type of the input value
 * @param input Target instance to prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function prune<T extends object>(input: T): void;

/**
 * @internal
 */
export function prune(): never {
  halt("prune");
}

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link assert} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPrune<T>(input: T): T;

/**
 * Prune, erase superfluous properties, with type assertion.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link assert} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type assertion.
 *
 * In such reason, when `input` value is not matched with the type `T`, it throws an
 * {@link TypeGuardError}. Otherwise, there's no problem on the `input` value, its
 * every superfluous properties would be removed, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to assert and prune
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function assertPrune<T>(input: unknown): T;

/**
 * @internal
 */
export function assertPrune(): unknown {
  halt("assertPrune");
}

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link is} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPrune<T>(input: T): input is T;

/**
 * Prune, erase superfluous properties, with type checking.
 *
 * `typia.misc.assertPrune()` is a combination function of {@link is} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type checking.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * `false` value. Otherwise, there's no problem on the `input` value, it returns
 * `true` after removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to check and prune
 * @returns Whether the parametric value is following the type `T` or not
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function isPrune<T>(input: unknown): input is T;

/**
 * @internal
 */
export function isPrune(): never {
  halt("isPrune");
}

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.misc.validatePrune()` is a combination function of {@link validate} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePrune<T>(input: T): IValidation<T>;

/**
 * Prune, erase superfluous properties, with type validation.
 *
 * `typia.misc.validatePrune()` is a combination function of {@link validate} and
 * {@link prune}. Therefore, it removes every superfluous properties from the `input`
 * object including nested objects, with type validation.
 *
 * In such reason, when `input` value is not matched with the type `T`, it returns
 * {@link IValidation.IFailure} value with detailed error reasons. Otherwise, there's
 * no problem on the `input` value, it returns {@link IValidation.ISucess} value after
 * removing every superfluous properties, including nested objects.
 *
 * @template T Type of the input value
 * @param input Target instance to validate and prune
 * @returns Validation result
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function validatePrune<T>(input: unknown): IValidation<T>;

/**
 * @internal
 */
export function validatePrune<T>(): IValidation<T> {
  halt("validatePrune");
}

/* -----------------------------------------------------------
    FACTORY FUNCTIONS
----------------------------------------------------------- */
/**
 * Creates a reusable {@link clone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createClone(): never;

/**
 * Creates a resuable {@link clone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createClone<T>(): (input: T) => Resolved<T>;

/**
 * @internal
 */
export function createClone(): never {
  halt("createClone");
}

/**
 * Creates a reusable {@link assertClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertClone(): never;

/**
 * Creates a resuable {@link assertClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertClone<T>(): (input: unknown) => Resolved<T>;

/**
 * @internal
 */
export function createAssertClone(): never {
  halt("createAssertClone");
}

/**
 * Creates a reusable {@link isClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsClone(): never;

/**
 * Creates a resuable {@link isClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsClone<T>(): (input: unknown) => Resolved<T> | null;

/**
 * @internal
 */
export function createIsClone(): never {
  halt("createIsClone");
}

/**
 * Creates a reusable {@link validateClone} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateClone(): never;

/**
 * Creates a resuable {@link validateClone} function.
 *
 * @template T Type of the input value
 * @returns A reusable `clone` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidateClone<T>(): (
  input: unknown,
) => IValidation<Resolved<T>>;

/**
 * @internal
 */
export function createValidateClone(): never {
  halt("createValidateClone");
}

/**
 * Creates a reusable {@link prune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPrune(): never;

/**
 * Creates a resuable {@link prune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `prune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createPrune<T extends object>(): (input: T) => void;

/**
 * @internal
 */
export function createPrune<T extends object>(): (input: T) => void {
  halt("createPrune");
}

/**
 * Creates a reusable {@link assertPrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPrune(): never;

/**
 * Creates a resuable {@link assertPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createAssertPrune<T extends object>(): (input: T) => T;

/**
 * @internal
 */
export function createAssertPrune<T extends object>(): (input: T) => T {
  halt("createAssertPrune");
}

/**
 * Creates a reusable {@link isPrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPrune(): never;

/**
 * Creates a resuable {@link isPrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `isPrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createIsPrune<T extends object>(): (input: T) => input is T;

/**
 * @internal
 */
export function createIsPrune<T extends object>(): (input: T) => input is T {
  halt("createIsPrune");
}

/**
 * Creates a reusable {@link validatePrune} function.
 *
 * @danger You must configure the generic argument `T`
 * @returns Nothing until you configure the generic argument `T`
 * @throws compile error
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePrune(): never;

/**
 * Creates a resuable {@link validatePrune} function.
 *
 * @template T Type of the input value
 * @returns A reusable `validatePrune` function
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export function createValidatePrune<T extends object>(): (
  input: T,
) => IValidation<T>;

/**
 * @internal
 */
export function createValidatePrune<T extends object>(): (
  input: T,
) => IValidation<T> {
  halt("createValidatePrune");
}

/**
 * @internal
 */
function halt(name: string): never {
  throw new Error(
    `Error on typia.misc.${name}(): no transform has been configured. Read and follow https://typia.io/docs/setup please.`,
  );
}
