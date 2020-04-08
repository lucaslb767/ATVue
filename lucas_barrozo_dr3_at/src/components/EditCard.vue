<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Name:</h2></div>
      <div><input type="text" v-model="card_add.name" placeholder="Add title" required></div>
      <div>
        <h2>Text:</h2>
        <input type="text" v-model="card_add.text" placeholder="Add Text" required>
        <h2>Type:</h2>
        <input type="text" v-model="card_add.types[0]" placeholder="Add Type" required>
        <h2>URL:</h2>
        <input type="text" v-model="card_add.imageUrl" placeholder="Add image url" required>
      </div>

      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Editcard",
  data() {
    return {
      id:this.$route.params.id,
      card_add :{
        title: "",
        description: ""
      }
    }
  },computed: mapGetters(["cardById"]),
  created() {
    this.card_add = this.cardById(this.id)
  },
  methods: {
    ...mapActions(["updatecard"]),
    onSubmit() {
      this.updatecard(this.card_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>