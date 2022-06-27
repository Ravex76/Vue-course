export default {
    namespaced: true,
    state() {
        return {
            coaches: [
                {
                  id: 'c1',
                  firstName: 'Maximilian',
                  lastName: 'Schwarzmüller',
                  areas: ['frontend', 'backend', 'career'],
                  description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                  hourlyRate: 30
                },
                {
                  id: 'c2',
                  firstName: 'Julie',
                  lastName: 'Jones',
                  areas: ['frontend', 'career'],
                  description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                  hourlyRate: 30
                }
            ]
        }
    },
    getters: {
        coaches(state) {
            return state.coaches;        
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },
        isCoach(state, getters, rootState, rootGetters) {
          const coaches = getters.coaches;
          const userId = rootGetters.userId;
          return coaches.some(coach => coach.id === userId);
        }
    },
    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload);
        },
        setCoaches(state, payload) {
          state.coaches = payload;
        },        
    },
    actions: {
      async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const newCoach = {          
          firstName: data.first,
          lastName: data.last,
          areas: data.areas,
          description: data.desc,
          hourlyRate: data.rate
        };

        const response = await fetch(`https://vuecourseproject-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
          method: 'PUT',
          body: JSON.stringify(newCoach)
        });

        // const responseData = response.json();
        if (!response.ok) {
        //   
        }

        context.commit('registerCoach', {
          ...newCoach,
          id: userId
        });
      },
      async loadCoaches(context ) {
        // if (!payload.forceRefresh && !context.getters.shouldUpdate) {
        //   return;
        // }
    
        const response = await fetch(
          `https://vuecourseproject-default-rtdb.firebaseio.com/coaches.json`
        );
        const responseData = await response.json();
    
        // if (!response.ok) {
        //   const error = new Error(responseData.message || 'Failed to fetch!');
        //   throw error;
        // }
    
        const coaches = [];
    
        for (const key in responseData) {
          const coach = {
            id: key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            description: responseData[key].description,
            hourlyRate: responseData[key].hourlyRate,
            areas: responseData[key].areas
          };
          coaches.push(coach);
        }
    
        context.commit('setCoaches', coaches);
        // context.commit('setFetchTimestamp');
      }      
    }
}