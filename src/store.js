import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

export default new Vuex.Store({
    state: {
        media: [],
        nMedia: 0
    },
    mutations: {
        seedMedia(state, mediaItems) {
            state.media = mediaItems
            state.nMedia = mediaItems.length
        }
    },
    actions: {
        getMedia(context) {
            axios.get(ENDPOINT + '/photos')
                .then(response => {
                    context.commit('seedMedia', response.data)
                    return response.data.slice(0, 20)
                })
                .then(console.log)
        }
    }
})
