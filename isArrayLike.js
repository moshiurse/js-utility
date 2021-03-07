import { isLength } from "./isLength";
/**
 * isArrayLike means a value is like an array which has .length property and has
 *  value greater then 0 and less the valis safe integer.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * 
 */

export default function isArrayLike(value) {
    return value !== null && typeof value !== "function" && isLength(value);

}