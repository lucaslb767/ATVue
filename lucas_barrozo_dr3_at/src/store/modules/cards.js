import axios from "axios";

const state = {
  cards: []
};
const getters = {
  allcards: state => state.cards,
  cardById: (state) => (id) => (state.cards.filter(t => t.id == id))[0],
};
const actions = {
  fetchcards({ commit }) {
      commit("setcards");
  },
  getcards({ commit }) {
    axios.get(
        "https://api.magicthegathering.io/v1/cards"
      ).then((response) => {
        console.log(response.data)
        commit('getcard', response.data.cards);
    });
},
   addcard({ commit }, card_add) {
    const new_index =  state.cards.length +1
    const response =  {
            "id": new_index ,
            "name": card_add.name,
            "imageUrl": card_add.imageUrl,
            "types":card_add.types,
            "text":card_add.text
          }
    commit("newcard",response);
  },
  deletecard({ commit }, id) {
    commit("removecard", id);
  },
  updatecard({ commit }, updcard) {
    commit("updatecard", updcard);
  },
  
};
const mutations = {
  setcards: (state) => state.cards,
  getcard: (state, card) => (state.cards = card),
  newcard: (state, card) => state.cards.push(card),
  removecard: (state, id) =>
    (state.cards = state.cards.filter(t => t.id !== id)),
  updatecard: (state, updcard) => {
      const index = state.cards.findIndex(t => t.id === updcard.id)
      if (index !== -1) {
        state.cards.splice(index, 1, updcard);
        }
      }
};

export default {
  state,
  actions,
  getters,
  mutations
};
