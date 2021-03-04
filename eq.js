/**
 * eq(firstValue, secondValue) check two value is equal or not
 * @param { firstValue } random value
 * @param { secondValue } random value
 * @return { boolean } return true if equal otherwise false
 * 
 */

export default function eq(firstValue, secondValue) {
    return firstValue === secondValue ||
        (firstValue !== firstValue && secondValue !== secondValue);
}