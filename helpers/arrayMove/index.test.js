import {arrayMove} from "./index";

describe('arrayMove', () => {
    it('moves item in array', () => {
        // Arrange.
        const array = [
            { id: 'id-one' },
            { id: 'id-two' },
        ]

        // Act.
        const result = arrayMove(array, 1, 0)

        // Assert.
        expect(result).toStrictEqual([
            { id: 'id-two' },
            { id: 'id-one' },
        ])
    })
})
