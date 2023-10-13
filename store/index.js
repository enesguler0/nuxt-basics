export const state = () => ({
    jokes: [],
})
export const mutations = {
    ADD_JOKE(state, joke){
        state.jokes = [{content: joke}, ...state.jokes]
        console.log("joke added")
    },
    REMOVE_JOKE(state, joke) {
		state.jokes.splice(state.jokes.indexOf(joke), 1);
	},
}
