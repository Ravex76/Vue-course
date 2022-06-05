import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './components/users/UsersList.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        { 
            path: '/teams', 
            component: TeamsList, 
            meta: { needsAuth: true },
            children: [
            { name: "team-members", path: ':teamId', component: TeamMembers, props: true },
        ]},
        { 
            path: '/users', 
            component: UsersList,
            beforeEnter(to, from, next) {
                next();
            }
        },        
        { path: '/:catchAll(.*)', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0 };
    }
});

router.beforeEach(function(to, from, next) {
    console.log('Global beforeEach');
    console.log(to);
    console.log(from);
    if (to.meta.needsAuth) {
        console.log('to.meta.needsAuth');
        next();
    } else {
        next();
    }   
});

router.afterEach(function(to, from) {
    console.log('Global beforeEach');
    console.log(to);
    console.log(from);
});

const app = createApp(App)

app.use(router);

app.mount('#app');
