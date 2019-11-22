<template>
  <div>
    <div class="col-md-4 mb-3">
      <div class="card" style="width: 18rem;">
        <img src="@/assets/placeholder.png" class="card-img-top" alt="@/assets/placeholder.png">
        <div class="card-body">
          <h5 class="card-title">{{result ? result.title : null}} <span
            class="badge badge-warning">{{result.type}}</span>
          </h5>
          <p class="card-text">{{ result.description }} .. {{result.area}}</p>
          <div class="bottom">
            <a v-if="checkRoute" @click.prevent="$emit('show')" class="btn btn-primary text-white">
              edit class
            </a>
            <a v-else @click.prevent="reviews" class="btn btn-primary text-white">
              see reviews
            </a>
            <span class="">{{ '$' + result.price }}</span>
            <span
              style="background: url('/star.svg') center center/cover; width: 30px; height: 30px; display:flex; justify-content: center; align-content: center"> {{result.rating}} </span>
          </div>
          <ul class="list-group list-group-flush mt-2">
            <li class="list-group-item">Created by: {{ result.author.firstname + " "+ result.author.lastname }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      result: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        stars: [],
        show: false
      }
    },
    computed: {
      checkRoute() {
        return this.$route.name === 'classes';
      }
    },
    methods: {
      reviews() {
        if (this.result) {
          this.$store.commit('SET_CLASS', this.result);
          this.$router.push('/reviews')
        }
      },
      editClass(){
        this.show = ! this.show
      }
    }
  }
</script>

<style>
  .bottom {
    display: flex;
    justify-content: space-between;
  }

</style>