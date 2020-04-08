<template>
  <div>
    <div>
      <h3>Oi</h3>
      {{this.$store.state.test}}

      <div id="cards-holder">
        <div v-for="(item, index) in cards" :key="index" class="card-wrapper"> 
        
        <b-card
          :title="item.name"
          :img-src="item.imageUrl"
          :img-alt="item.name"
          img-top
          tag="article"
          style="max-width: 14rem;"
          class="mb-2"
        >
          <div>
            <a @click="removeCard(item.id)" :id="item.id"> Delete Card</a>
          </div>
        </b-card>
        
        </div>
      </div>
      
    </div>
  </div>
  
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name:'home',
  methods: {
    ...mapActions(["removeCard"]),
    select: function(event) {
            let targetId = event.currentTarget.id;
            console.log(targetId);
            return targetId
        }
  },
  mounted(){
    this.$store.dispatch('loadCards')
  },
  computed:{
    ...mapState([
      'cards'
    ])
  }
}
</script>

<style scoped>
#cards-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card-body {
  background: gray;
}
</style>