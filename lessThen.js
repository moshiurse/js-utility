/**
 * lessThen() check value less then or not
 * @param { firstValue } firstValue to compare
 * @param { secondValue } secondValue array
 * @returns { number } returns sum of an array
 * 
 */
export default function lessThen(firstValue, secondValue) {
    if (typeof firstValue === "number" && typeof secondValue === "number") {
        return firstValue < secondValue;
    }
    return false;
}