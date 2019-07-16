<template>
  <div class="media-repository py-3 py-md-5">
    <div class="container">

      <b-form-group>
        <b-form-radio-group
            v-model="selectedMediaSet"
            :options="mediaSetOptions"
            buttons
            button-variant="outline-primary"
            size="sm"
            @change="currentPage = 1"
        ></b-form-radio-group>
      </b-form-group>

      <div class="d-flex align-items-center mb-3">

        <h4 class="h6">{{currentMedia.length}} Titles:</h4>

        <b-pagination class="ml-auto"
                      v-if="currentMedia.length > 0"
                      v-model="currentPage"
                      :total-rows="currentMedia.length"
                      :per-page="perPage"
                      size="sm"
                      align="center"
        ></b-pagination>
      </div>

      <div class="row no-gutters border border-dark">
        <b-col cols="6" sm="4" md="3"
               v-for="item in pageMedia" :key="item.id"
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
                      v-if="currentMedia.length > 0"
                      v-model="currentPage"
                      :total-rows="currentMedia.length"
                      :per-page="perPage"
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
    import {mapGetters} from 'vuex'

    const PAGE_SIZE = 12

    export default {
        name: 'media-repository',
        data() {
            return {
                perPage: PAGE_SIZE,
                currentPage: 1,
                selectedMediaSet: 'allMedia',
                mediaSetOptions: [
                    {text: 'All', value: 'allMedia'},
                    {text: 'In store', value: 'inStoreMedia'},
                    {text: 'In rent', value: 'inRentMedia'}
                ]
            }
        },
        computed: {
            currentMedia() {
                return this[this.selectedMediaSet]
            },
            pageMedia() {
                const e = this.currentPage * PAGE_SIZE
                const s = e - PAGE_SIZE
                return this.currentMedia.slice(s, e)
            },
            ...mapGetters([
                'allMedia',
                'inStoreMedia',
                'inRentMedia'
            ])
        },
        mounted() {
            this.$store.dispatch('getMedia')
        }
    }
</script>
