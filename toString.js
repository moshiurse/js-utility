import { isSymbol } from "./isSymbol";

const INFINITY = 1 / 0; //For referencing varoious number

/**
 * Converts value to a string.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
export default function toString(value) {

    // return '' if null
    if (value == null) {
        return '';
    }

    // return as it is if type is String
    if (typeof value === "string") {
        return value;
    }

    // recursively convert each variable to a string if it was array
    if (Array.isArray(value)) {
        return `${value.map(val => val == null ? val : toString(val))}`;
    }

    // return toString of the symbol value
    if (isSymbol(value)) {
        return value.toString();
    }

    // At last check check for negetive zero otherwise return number.
    const val = `${value}`;
    return (val == '0' && 1 / val == -INFINITY) ? '-0' : val;

}