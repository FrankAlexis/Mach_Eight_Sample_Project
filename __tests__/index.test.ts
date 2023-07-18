import matchPairs from "..";

describe('matchPairs function test suite', () => {

    it('should return an empty array when the pair numbers array is empty', () => {
        const result = matchPairs([], 0)
        expect(result).toEqual([]);
    });

    it('should return the correct pairs when the pair numbers array is not empty', () => {
        const result = matchPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)
        expect(result).toEqual([[12, 0], [16, -4], [7, 5]]);
    });

    it('should return an empty array when no valid pairs exist', () => {
        const result = matchPairs([1, 2, 3, 4, 5], 20)
        expect(result).toEqual([]);
    });

});