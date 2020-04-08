<template>

  <div>
    <div>
      <AddTodo/>
    </div>
    <h3>Todos</h3>
    <div class="todos">
      <div
       
        v-for="todo in allTodos"
        :key="todo.id"
        :id="todo.id"
        class="todo"
        :class="todo.types[0]"
      >
      <img :src="todo.imageUrl" :alt="todo.name">
      <router-link
           tag="h5"
           :to="{ name: 'detailTodo', params: { id: todo.id } }"
       >
        {{ todo.name }}
      </router-link>
      
        <div><p> {{ todo.text }}</p></div>
        <a @click="deleteTodo(todo.id)" class="destroy-button">Delete Card</a>
       
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from './AddTodo.vue'
export default {
  name: "todos",
  components:{AddTodo},
  methods: {
    ...mapActions(["getTodos", "deleteTodo"]),

  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.getTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  color: #fff;
}
.destroy-button {
  background: red;
  color: white !important;
  padding: 5px;
  border-radius: 5px;

}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.Land {
  background: #85742c;
  color: #fff;
}

.Artifact {
  background: #999;
}

.Conspiracy {
  background: #444;
}

.Creature {
  background: #af3838;
}

.Enchantment {
  background: rgb(152, 65, 211);
}

.Instant {
  background: rgb(245, 245, 27);
}

.Phenomenon{
  background: #ff00ff;
}

.Plane {
  
}

.Planeswalker {
  background : rgb(105, 105, 170);
}

.Scheme {
  background: #7409a5
}

.Sorcery {
  background: rgb(214, 128, 14);
}

.Tribal {
  background: rgb(23, 90, 23);
}

.Vanguard {
  background: #bbb;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
