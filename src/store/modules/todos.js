import axios from "axios";

const state = {
  todos: [
    { id: 1, title: "Learn Vue", completed: false },
    { id: 2, title: "Learn Vuex", completed: false },
    { id: 3, title: "Learn Vue Router", completed: false },
  ],
};
const getters = {
  allTodos: (state) => state.todos,
};
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
};
const actions = {
  getTodos: async ({ commit }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
    console.log(response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
