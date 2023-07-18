/**
 * Finds pairs of integers from a list that
 * sum to a given value. The function will take as input the list of numbers as
 * well as the target sum.
 * @param numbers number[]
 * @param targetSum number
 * @returns An object number[][] with the pairs of integers
 */
const findPairsIntegers = (numbers: number[], targetSum: number): number[][] => {
    const { length } = numbers

    if (!length) return []

    const pairs = []
    const numSet = new Map() // Use a Map to store the elements and their indices

    for (let i = 0; i < length; i++) { // O(n)
        const num = numbers[i]
        const valueToSearch = targetSum - num;

        if (numSet.has(valueToSearch)) {
            pairs.push([num, valueToSearch])
        }

        numSet.set(num, i)
    }

    return pairs
}

export default findPairsIntegers