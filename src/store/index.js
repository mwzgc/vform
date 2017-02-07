import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    workForm: {
      '1': {
        id: '1',
        name: 'a1',
        type: 'input',
      },
      '2': {
        id: '2',
        name: 'a2',
        type: 'radio',
        items: [
          {code: 1, name: '1'},
          {code: 2, name: '2'},
          {code: 3, name: '3'},
          {code: 4, name: '4'},
          {code: 5, name: '5'},
        ],
        other: true
      },
      '3': {
        id: '3',
        name: 'a3',
        type: 'checkbox',
      },
      '4': {
        id: '4',
        name: 'a4',
        type: 'select',
      }
    },
    data: {
      
    }
  },


  mutations: {
    increment (state) {
      state.count++
    },

    updateMessage (state, message) {
      Vue.set(state.data, message.name, message.value)
    }
  },


  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})
