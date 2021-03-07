const MAX_VALID_INTEGER = 9007199254740991;

/**
 * Checks if value is a valid array-like length.
 * @param {*} length The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * 
 */

export default function isLength(length) {
    return typeof length === "number" &&
        length > -1 && length % 1 == 0 && length <= MAX_VALID_INTEGER;
}