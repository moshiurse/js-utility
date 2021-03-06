/**
 * lessThen() check value less then or not
 * @param { firstValue } firstValue to compare
 * @param { secondValue } secondValue to compare
 * @returns { boolean } returns true if value less then to other
 * 
 */
export default function lessThen(firstValue, secondValue) {
    if (typeof firstValue === "number" && typeof secondValue === "number") {
        return firstValue < secondValue;
    }
    return false;
}