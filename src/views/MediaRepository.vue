<template>
  <div class="home">
    <div class="container">

      <div class="d-flex mb-3">
        <h2>{{nMedia}} Titles:</h2>

        <b-pagination class="ml-auto"
                      v-if="nMedia > 0"
                      v-model="currentPage"
                      :total-rows="nMedia"
                      :per-page="pageSize"
        ></b-pagination>
      </div>

      <div class="row no-gutters">
        <b-col cols="6" sm="4" md="3"
               v-for="item in currentMedia" :key="item.id"
        >
          <b-card class="bg-secondary text-white h-100"
                  :title="item.title"
                  :img-src="item.thumbnailUrl"
                  img-top
          >
          </b-card>
        </b-col>
      </div>

      <div class="d-flex mt-3">
        <b-pagination class="ml-auto"
                      v-if="nMedia > 0"
                      v-model="currentPage"
                      :total-rows="nMedia"
                      :per-page="pageSize"
        ></b-pagination>
      </div>

    </div>
  </div>
</template>

<script>
    import {mapState} from 'vuex'

    const PAGE_SIZE = 12

    export default {
        name: 'media-repository',
        data() {
            return {
                pageSize: PAGE_SIZE,
                currentPage: 1
            }
        },
        computed: {
            currentMedia() {
                const e = this.currentPage * PAGE_SIZE
                const s = e - PAGE_SIZE
                return this.media.slice(s, e)
            },
            ...mapState({
                media: 'media',
                nMedia: 'nMedia'
            })
        },
        mounted() {
            this.$store.dispatch('getMedia')
        }
    }
</script>
