import Vuex from "vuex";
import Vue from "vue";
import axios from "axios"


Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        test: "oie",
        cards: [],
    },
    actions: {
        loadCards({commit}) {
            axios.get("https://api.magicthegathering.io/v1/cards")
            .then(data => {
                console.log(data.data)
                let cards = data.data.cards
                commit("set_cards", cards)
            })
        },
        removeCard({commit}, id) {
            commit("removeCard",id)
        }
    },
    mutations: {
        set_cards(state, cards) {
            state.cards = cards
        },
        removeCard(state, id) {
            console.log("TA INDO", id)
            console.log("stateÇ", state.cards)

            state.cards = state.cards.filter(c => c.id !== id)
        }
    }
})