/** 
 * @isAllNumberInArray(array) check if all value is numeric or not
 * @param { array } an array
 * @returns { number } returns true if all values are numeric  otherwise false
 * 
 */
export default function isAllNumberInArray(array) {
    if(array.length == 0) return false;
    for(let value of array) {
        if(typeof value !== "number") return false;
    }
    return true;
}