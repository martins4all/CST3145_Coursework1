<template>
  <div class="container mt-4">
    <div class="mx-auto">
      <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <a class="navbar-brand" href="#"> All classes & activities</a>
        </nav>
        <div class="mt-2 row">
          <Result v-for="(result, i) in results" :key="i" :result="result"></Result>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import Result from '@/components/Result';

  export default {
    data() {
      return {
        dropdown: false,
        show: false,
        searchQuery: '',
        subjectArea: '',
        timeLength: '',
        type: '',
        results: null,
        isResult: false,
        sortVal: ''
      }
    },
    components: {
      Result
    },
    mounted() {
      this.results = JSON.parse(localStorage.getItem('services'));
    }
  }
</script>