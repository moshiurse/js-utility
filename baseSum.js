/*
    @baseSum(array) sum of an array of numeric value
    @param { array } numeric array
    @param { func } a callback function
    @returns { number } returns sum of an array

*/

export default function baseSum(array, func) {
    let result;

    for(let value of array) {
        const currValue = func(value);

        if(currValue !== undefined) {
            result = result === undefined ? currValue : (result + currValue);
        }
    }

    return result;
}