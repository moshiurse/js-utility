import { isArrayLike } from "./isArrayLike";
import { isObjectLike } from "./isObjectLike";
/**
 * isArrayObjectLike check value isArrayLike and check if it also a object
 * 
 * @param { * } numeric array
 * @param { func } a callback function
 * @returns { string } returns toStringTag
 * 
 */
export default function isArrayLikeObject(value) {

    return isArrayLike(value) && isObjectLike(value);
}