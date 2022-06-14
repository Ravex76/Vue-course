import { createStore } from 'vuex';

const counterModule = {
    namespaced: true,    
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increment(state) {
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        increment(context) {
            setTimeout(function() {
                context.commit('increment');
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
    }    
}

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }        
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logOut(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        }
    }    
});

export default store;