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
  setTodo: (state, todo) => {
    state.todos.unshift(todo);
  },
  removeTodo: (state, id) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
};
const actions = {
  getTodos: async ({ commit }) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
    console.log(response.data);
  },
  addTodo: async ({ commit }, title) => {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("setTodo", response.data);
  },
  removeTodo: async ({ commit }, id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      id,
    });
    commit("removeTodo", id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
