import { getToStringTag } from "./getToStringTag";
import { isObjectLike } from "./isObjectLike";

/**
 * isBoolean(value) check if all value is numeric or not
 * @param { * } value  any value to check if boolean
 * @returns { boolean } returns true if all value is boolean otherwise false
 *
 */

export default function isBoolean(value) {
    return (value === true || value === false) ||
        (isObjectLike(value) && getToStringTag(value) === "[object Boolean]");
}