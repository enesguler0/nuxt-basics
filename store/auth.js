export const state = () => ({
    user: null,
  });
  
  export const mutations = {
    setUser(state, user) {
      state.user = user;
    },
  };
  
  export const actions = {
    login({ commit }, username) {
      // Simulate an API request to authenticate the user
      return new Promise((resolve, reject) => {
        console.log(username)
        if (username === 'mahmut') {
          const user = { username: 'mahmut' };
          commit('setUser', user);
          resolve(user);
        } else {
          reject(new Error('Invalid username'));
        }
      });
    },
    logout({ commit }) {
      commit('setUser', null);
    },
  };
  