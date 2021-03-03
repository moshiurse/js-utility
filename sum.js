import { baseSum } from "./baseSum";

/**
 * @sum(array) sum of an array of numeric value
 * @param { array } numeric array
 * @returns { number } returns sum of an array
 * 
 */
export default function sum(array) {
    return (array != null && array.length) ? baseSum(array, (val) => val) : 0;
}