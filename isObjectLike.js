/*
    @isObjectLike(value) ObjectLike means Value is like Object not a null.
        we know null is a special type of object in JS.
    @param { * } any type of value
    @returns { boolean } returns True if Object otherwise false

*/

function isObjectLike(value) {
    return typeof value === "object" && value !== null;
}

export default isObjectLike;