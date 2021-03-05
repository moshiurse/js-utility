import { getToStringTag } from "./getToStringTag";

/**
 * isSymbol(value) check the value if symbol
 * @param { value } any type of value
 * @returns { boolean } returns true if Symbol otherwise false
 * 
 */

export default function isSymbol(value) {
    const type = typeof value;

    return type === "symbol" ||
        (type === "object" && type !== null && getToStringTag(value) === "[object Symbol]");
}