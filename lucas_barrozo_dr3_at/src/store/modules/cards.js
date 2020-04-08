import axios from "axios";

const state = {
  todos: []
};
const getters = {
  allTodos: state => state.todos,
  todoById: (state) => (id) => (state.todos.filter(t => t.id == id))[0],
};
const actions = {
  fetchTodos({ commit }) {
      commit("setTodos");
  },
  getTodos({ commit }) {
    axios.get(
        "https://api.magicthegathering.io/v1/cards"
      ).then((response) => {
        console.log(response.data)
        commit('getTodo', response.data.cards);
    });
},
   addTodo({ commit }, todo_add) {
    const new_index =  state.todos.length +1
    const response =  {
            "id": new_index ,
            "name": todo_add.name,
            "imageUrl": todo_add.imageUrl,
            "types":todo_add.types,
            "text":todo_add.text
          }
    commit("newTodo",response);
  },
  deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },
  updateTodo({ commit }, updTodo) {
    commit("updateTodo", updTodo);
  },
  
};
const mutations = {
  setTodos: (state) => state.todos,
  getTodo: (state, todo) => (state.todos = todo),
  newTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(t => t.id !== id)),
  updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(t => t.id === updTodo.id)
      if (index !== -1) {
        state.todos.splice(index, 1, updTodo);
        }
      }
};

export default {
  state,
  actions,
  getters,
  mutations
};
