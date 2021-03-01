/* 
    @isObject(value)
    @param (*) any type of value
    @returns {boolean} returns True if Object otherwise false

*/

export default function isObject(value) {
    const type = typeof value;

    return value != null && (type == "object" || type == "function");
};
