import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import {filter, keyBy, map, random, set, sortBy} from 'lodash'

Vue.use(Vuex)

const ENDPOINT = 'https://jsonplaceholder.typicode.com'

const IN_STORE = 'IN_STORE'
const IN_RENT = 'IN_RENT'

export default new Vuex.Store({
    state: {
        media: {}
    },
    getters: {
        allMedia(state) {
            return sortBy(state.media, 'id')
        },
        inStoreMedia(state, getters) {
            return filter(getters.allMedia, {status: IN_STORE})
        },
        inRentMedia(state, getters) {
            return filter(getters.allMedia, {status: IN_RENT})
        }
    },
    mutations: {
        seedMedia(state, mediaItems) {
            let randomStatus = () => random(1,5) === 5 ? IN_RENT : IN_STORE
            state.media = keyBy(
                map(mediaItems, item => set(item, 'status', randomStatus())),
                'id'
            )
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
