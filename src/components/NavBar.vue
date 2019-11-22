<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <div class="container">
      <router-link class="navbar-brand text-white" to="/">Curriculum</router-link>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link " to="/">Home</router-link>
          </li>
          
          <li class="nav-item">
            <router-link class="nav-link " to="/dashboard" v-if="isAuth">Dashboard</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link " to="/classes" v-if="isSP">Edit Classes</router-link>
          </li>
  
          <li class="nav-item">
            <a style="cursor: pointer" v-if="isAuth"  class="nav-link" @click="logout">Logout</a>
            <router-link v-else class="nav-link" to="/signup">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
        computed:{
          isAuth(){
            return this.$store.getters.isAuth;
          },
          isSP(){
            return this.isAuth && this.$store.getters.getUser.type === "sp";
          }
        },
      methods:{
        logout(){
          this.$store.commit('UNSET_USER');
          this.$router.push('/');
        }
      }
    }
</script>