<template>
  <div class="media-repository py-5">
    <div class="container">

      <div class="d-sm-flex mb-3">
        <h2 class="text-center">{{nMedia}} Titles:</h2>

        <b-pagination class="ml-auto"
                      v-if="nMedia > 0"
                      v-model="currentPage"
                      :total-rows="nMedia"
                      :per-page="pageSize"
                      size="sm"
                      align="center"
        ></b-pagination>
      </div>

      <div class="row no-gutters border border-dark">
        <b-col cols="6" sm="4" md="3"
               v-for="item in currentMedia" :key="item.id"
        >
          <b-card class="h-100"
                  :title="item.title"
                  :img-src="item.thumbnailUrl"
                  img-top
          >
          </b-card>
        </b-col>
      </div>

      <div class="d-sm-flex mt-3">
        <b-pagination class="ml-auto"
                      v-if="nMedia > 0"
                      v-model="currentPage"
                      :total-rows="nMedia"
                      :per-page="pageSize"
                      size="sm"
                      align="center"
        ></b-pagination>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
  .media-repository {
    .card-title {
      text-transform: capitalize;
      font-size: 1rem;
      margin-bottom: 0;
    }

    .card-body {
      padding: .75rem;
    }
  }
</style>

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
