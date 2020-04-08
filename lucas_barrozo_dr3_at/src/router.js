import Vue from 'vue';
import VueRouter from 'vue-router';
import Todos from './components/Todos'
import DetailTodo from './components/DetailTodo'
import EditTodo from './components/EditTodo'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'ok',
            component: Todos
        },{
            path: '/todo/:id',
            name: 'detailTodo',
            component: DetailTodo,
            children: [
                {
                    path: 'edit',
                    name: 'edit-todo',
                    component: EditTodo
                }
            ]
        }
      
    ]
});