import {uniqBy} from "./index";

describe('uniqBy', () => {
    it('returns uniq values by provided key', () => {
        // Arrange.
        const array = [
            { id: 'id-one' },
            { id: 'id-two' },
            { id: 'id-two' },
        ]

        // Act.
        const result = uniqBy(array, 'id')

        // Assert.
        expect(result).toStrictEqual([
            { id: 'id-one' },
            { id: 'id-two' },
        ])
    })
})
