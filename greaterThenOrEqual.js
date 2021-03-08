/**
 * greaterThen() check value greater then or equal or not
 * @param { firstValue } firstValue to compare
 * @param { secondValue } secondValue to compare
 * @returns { boolean } returns true if value greater then or equal to other
 * 
 */
export default function greaterThen(firstValue, secondValue) {
    if (typeof firstValue === "number" && typeof secondValue === "number") {
        return firstValue > secondValue;
    }
    return false;
}