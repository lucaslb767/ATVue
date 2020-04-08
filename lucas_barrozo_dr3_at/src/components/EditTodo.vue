<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div><h2>Name:</h2></div>
      <div><input type="text" v-model="todo_add.name" placeholder="Add title"></div>
      <div>
        <h2>Text:</h2>
        <input type="text" v-model="todo_add.text" placeholder="Add Text">
        <h2>Type:</h2>
        <input type="text" v-model="todo_add.types[0]" placeholder="Add Type">
        <h2>URL:</h2>
        <input type="text" v-model="todo_add.imageUrl" placeholder="Add image url">
      </div>

      <div><input type="submit" value="Submit"></div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "EditTodo",
  data() {
    return {
      id:this.$route.params.id,
      todo_add :{
        title: "",
        description: ""
      }
    }
  },computed: mapGetters(["todoById"]),
  created() {
    this.todo_add = this.todoById(this.id)
  },
  methods: {
    ...mapActions(["updateTodo"]),
    onSubmit() {
      this.updateTodo(this.todo_add);
      alert("Dados esditados com sucesso")
    }
  }
}
</script>

<style>

</style>