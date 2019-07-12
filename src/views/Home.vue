<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>

        <b-col cols="6" md="4" v-for="item in media">
          <b-card
              :title="item.title"
              :img-src="item.thumbnailUrl"
              img-top
              class="mb-2"
          >

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
    const ENDPOINT = 'https://jsonplaceholder.typicode.com'

    export default {
        name: 'home',
        data() {
            return {
                media: []
            }
        },
        created() {
            this.$http.get(ENDPOINT + '/photos')
                .then(({data}) => this.media = data.slice(0, 20))
                .then(console.log)
        }
    }
</script>
