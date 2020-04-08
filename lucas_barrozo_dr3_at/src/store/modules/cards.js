import axios from "axios";

const state = {
  Cards: [],
};
const getters = {
  allCards: state => state.cards,
  cardById: (state) => (codigo) => (state.cards.filter(t => t.codigo == codigo))[0],
};
const actions = {
  fetchCards({ commit }) {
      commit("setCards");
  },
  getCards({ commit }) {
    axios.get(
        "https://api.magicthegathering.io/v1/cards"
      ).then((response) => {
        console.log(response.data.cards)
        commit('getCards', response.data.cards);
    });
},
   addCard({ commit }, card_add) {
    const new_index =  state.cards.length +1
    const response =  {
            "codigo": new_index ,
            "title": card_add.name,
            "completed": false,
          }
    commit("newCard",response);
  },
  deletecard({ commit }, id) {
    commit("removecard", id);
  },
  updatecard({ commit }, updcard) {
    commit("updatecard", updcard);
  },
  
};
const mutations = {
  setCards: (state) => state.card,
  getCards: (state, card) => (state.cards = card),
  newCard: (state, card) => state.cards.push(card),
  removeCard: (state, id) =>
    (state.cards = state.cards.filter(t => t.id !== id)),
  updateCard: (state, updcard) => {
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
