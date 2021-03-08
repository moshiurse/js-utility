/**
 * lessThen() check value if less then or equal or not
 * @param { firstValue } firstValue to compare
 * @param { secondValue } secondValue to compare
 * @returns { boolean } returns true if value less then to other
 * 
 */
export default function lessThenOrEqual(firstValue, secondValue) {
    if (typeof firstValue === "number" && typeof secondValue === "number") {
        return firstValue <= secondValue;
    }
    return false;
}