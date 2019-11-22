<template>
  <div class="container mt-4 ">
    <ul class="list-unstyled">
      <li class="media mb-3" v-for-key="review in activites.review">
        <img style="width:100px; " src="@/assets/placeholder.png" class="mr-3" alt="">
        <div class="media-body">
          <h5 class="mt-0 mb-1">{{ review.name  }}</h5>
          {{review.feedback}}
        </div>
      </li>
    </ul>
  
    <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="feedback"></textarea>
      </div>
      <div class="form-froup ml-auto">
        <div class="btn btn-primary" @click="post">comment</div>
      </div>
    </form>
  </div>

</template>

<script>
    export default {
            data() {
                return {
                    feedback: ''
                }
            },
            computed:{
                activites(){
                    return this.$store.getters.getClass;
                },
                user(){
                    return this.$store.getters.getUser;
                }
            },
            methods:{
                post(){
                    let services = JSON.parse(localStorage.getItem('services'));
                    let activity = services.find((service) => service.id === this.activites.id);
                    let index = services.findIndex((service) => service.id === this.activites.id);

                    //persist to store
                    this.$store.commit('SET_FEEDBACK',{
                        id: activity.review.length + 1,
                        name: this.user.firstname +' '+ this.user.lastname,
                        feedback: this.feedback
                    });

                    this.feedback = '';

                    //persist to localstorage
                    services[index].review = [...this.$store.getters.getReview];

                    localStorage.setItem('services', JSON.stringify(services));
                }
            }
        }
</script>

<style>
.bottom {
    display: flex;
    justify-content:space-between;
}
</style>
