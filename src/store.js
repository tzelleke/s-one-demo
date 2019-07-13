import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default new Vuex.Store({
    state: {
        media: []
    },
    mutations: {
        seedMedia(state, mediaItems) {
            state.media = mediaItems
        }
    },
    actions: {
        getMedia(context) {
            axios.get(ENDPOINT + '/photos')
                .then(response => {
                    const data = response.data.slice(0, 20)
                    context.commit('seedMedia', data)
                    return data
                })
                .then(console.log)
        }
    }
})
