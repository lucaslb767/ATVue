<template>
    <div>
    
        <h1>Detalhes da carta</h1>
        <router-link
           tag="a"
           :to="{ name: 'ok' }"
       >
        <button class="return">Voltar pra listagem</button> 
      </router-link>
      <div class="detail">
        <div><h3>Card Name:</h3> {{ cardById(id).name }}</div>
        <div><br>
            <h4>Text:</h4> {{cardById(id).text}}
            <br>
            <h4>Type:</h4> {{cardById(id).types[0]}}
            <br>
            <h4>Image:</h4> <img :src="cardById(id).imageUrl" :alt="cardById(id).name">
        </div>

        <button @click="editar">Editar Carta</button>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

import { mapGetters } from "vuex";
export default {
    name: "Detailcard",
    data: function(){
        return{ 
            id : this.$route.params.id,}
    },
    computed: mapGetters(["cardById"]),
    methods: {
        editar() {
        this.$router.push({ name: 'edit-card' , params: { id: this.id } });
        }
    }

}
</script>

<style>
button, .return{
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}
.detail{
    padding: 24px;
}
i {
  cursor: pointer;
  color: #000;
  position: inherit;
}

h3, h4 {
    display: inline;
}
</style>