import Vue from 'vue'
import Router from 'vue-router'
import MediaRepository from './views/MediaRepository'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'media-repository',
            component: MediaRepository
        }
    ]
})
