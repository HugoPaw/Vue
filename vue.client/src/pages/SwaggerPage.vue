<template>
  <div>
    <h1>API-Dokumentation</h1>
    <iframe src="https://localhost:7167/swagger/index.html"
            width="100%"
            height="900"
            style="border: 2px solid black; border-radius: 8px;"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'SwaggerPage'
  }
</script>

<style scoped>
  h1 {
    margin-bottom: 1rem;
  }
</style>
