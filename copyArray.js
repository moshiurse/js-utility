/**
 * copyArray copy an array to other array
 * @param { Array } copyFrom array
 * @param { Array } copyTo array
 * @return { Array } return copied array
 * 
 */

export default function copyArray(copyFrom, copyTo) {
    let index = -1;
    const length = copyFrom.length;

    copyTo || (copyTo = new Array(length));

    while (++index < length) {
        copyTo[index] = copyFrom[index];
    }

    return copyTo;
}