<template>
  <div>
    <h3 @click="toggleClass">Adiciona Cartas</h3>
    <div id="addCard">
      <form @submit.prevent="onSubmit">
        <div><h2>Nome:</h2></div>
        <div><input type="text" v-model="card_add.name" placeholder="Add Name"></div>
        <div><h2>Infos extras:</h2></div>
        <div><input type="text" v-model="card_add.imageUrl" placeholder="Add imgUrl"></div>
        <div><input type="text" v-model="card_add.text" placeholder="Add Text"></div>
        <div><input type="text" v-model="card_add.types" placeholder="Add type"></div>
        <div><input type="submit" value="Submit"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddCard",
  data() {
    return {
      card_add :{
        name: "",
        imageUrl: "",
        types: [""],
        text: "",
      }
    };
  },
  methods: {
    ...mapActions(["addcard"]),
    onSubmit() {
      this.addcard(this.card_add);
    },
    toggleClass(){
      var element = document.getElementById("addCard");
      element.classList.toggle("appear");
    }
  }
};
</script>

<style>
form {
  display: block;
}
input[type="text"],input[type="textarea"] {
  width: 100%;
  flex: 10;
  padding: 10px;
  border: 1px solid #1BBC9B;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #1BBC9B;
  border: 1px solid #1BBC9B;
  color: #fff;
  cursor: pointer;
  width: 100%;
  height: 40px;
  margin: 10px;
}

#addCard{
  height: 0;
  opacity: 0;
  transition:all ease .5s;
}
.appear{
  height: inherit !important;
  opacity: 1 !important;
}
</style>
