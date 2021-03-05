/**
 * Checks if value is null or undefined.
 * @param {*} value value to check.
 * @returns {boolean} Returns true if value is null or undefined, else false.
 * 
 */

export default function isNil(value) {
    return value == null
}