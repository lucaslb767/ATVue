import Vue from 'vue';
import VueRouter from 'vue-router';
import Cards from './components/Cards'
import DetailCard from './components/DetailCard'
import EditCard from './components/EditCard'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Cards
        },{
            path: '/card/:id',
            name: 'DetailCard',
            component: DetailCard,
            children: [
                {
                    path: 'edit',
                    name: 'edit-card',
                    component: EditCard
                }
            ]
        }
      
    ]
});