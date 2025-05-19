<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <header class="bg-white shadow-md p-6">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-3xl font-bold">Developer Dashboard</h1>
        <p class="text-gray-600 mt-1">Projektübersicht und technische Ressourcen</p>
      </div>
    </header>

    <main class="max-w-6xl mx-auto p-6">
      <section class="bg-white rounded-2xl shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-2">📁 Projektinformationen</h2>
        <p class="text-gray-700">Dies ist eine Beispielseite für die interne Entwicklerdokumentation oder das technische Onboarding.</p>
        <ul class="list-disc list-inside mt-4 text-gray-600">
          <li>Framework: Vue 3 + Vite</li>
          <li>API: RESTful, gesichert mit JWT</li>
          <li>CI/CD: GitHub Actions</li>
        </ul>
      </section>

      <section class="bg-white rounded-2xl shadow-sm p-6">
        <h2 class="text-2xl font-semibold mb-2">🧪 Testumgebung</h2>
        <p class="text-gray-700 mb-4">Du kannst hier eine Live-Demo oder Komponente einfügen, z. B. eine API-Testmaske.</p>
        <button @click="showMessage"
                class="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Test-Aktion ausführen
        </button>
        <p v-if="message" class="mt-4 text-green-600 font-medium">{{ message }}</p>
      </section>
    </main>

    <footer class="text-center text-sm text-gray-500 py-6">
      © 2025 – Entwickelt von Hugo Pawlowski
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'DevDashboard',
    data() {
      return {
        message: ''
      }
    },
    methods: {
      showMessage() {
        this.message = 'Test erfolgreich ausgeführt!';
        setTimeout(() => this.message = '', 3000);
      }
    }
  }
</script>
