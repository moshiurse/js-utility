/**
 * forEach in a specialized way
 *
 * @param {Array}  The array to iterate over.
 * @param {Function} iterate The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */

export default function arrayForEach(array, iterate) {
    let index = -1;
    const length = array.length;

    while(++index < length) {
        if(iterate(array[index], index, array) === false) {
            break;
        }
    }

    return array;

}
