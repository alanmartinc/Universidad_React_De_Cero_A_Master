export const createStore = () => {
    let store = []

    return {
        addItem: (item) => {
            store = [...store, item]
        },

        getstore: () => {
            return store
        },

        getById: (id) => {
            return store.filter(item => item.id === id)[0]
        }
    }
}