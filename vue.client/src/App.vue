<template>
  <div>
    <h1>Startseite</h1>
    <div class="page-links">
      <div v-for="page in pages" :key="page.path" class="link-box">
        <router-link :to="page.path">{{ page.name }}</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
  import pages from './pages';

  export default {
    data() {
      return {
        pages
      };
    }
  };
</script>

<style scoped>
  .page-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .link-box {
    border: 1px solid #ccc;
    padding: 1rem;
    background: #f9f9f9;
  }
</style>
