/**
 * getToStringTag(value) Get ToString Tag of a value
 * @param { * } numeric array
 * @param { func } a callback function
 * @returns { string } returns toStringTag
 * 
 */
export default function getToStringTag(value) {

    if (value == null) {
        return "[object Null]";
    }
    if (value == undefined) {
        return "[object Undefined]";
    }

    return toString.call(value);
}