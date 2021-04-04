export const createStore = () => {
    let fruits = []

    return {
        addFruit: (fruit) => {
            fruits = [...fruits, fruit]
        },

        getFruits: () => {
            return fruits
        }
    }
}