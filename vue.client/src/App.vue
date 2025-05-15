<template>
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/about" class="nav-item">Über mich</router-link>
        <router-link to="/kontakt" class="nav-item">Kontakt</router-link>
        <router-link to="/swagger" class="nav-item">Swagger</router-link>
      </nav>
    </aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .layout {
    display: flex;
    height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  /* Sidebar */
  .sidebar {
    width: 220px;
    background: linear-gradient(to bottom, #ffffff, #f2f2f2);
    border-right: 2px solid black;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

    .sidebar nav {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

  .nav-item {
    display: block;
    padding: 12px;
    text-align: center;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    color: #000;
    transition: all 0.2s ease-in-out;
  }

    .nav-item:hover {
      background-color: #f0f0f0;
      transform: scale(1.02);
    }

  .router-link-exact-active {
    background-color: #d4d4d4;
  }

  /* Hauptinhalt */
  .content {
    flex: 1;
    padding: 40px;
    background: linear-gradient(to bottom right, #fefefe, #e6e6e6);
    box-sizing: border-box;
    overflow-y: auto;
  }
</style>
