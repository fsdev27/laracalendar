<template>
  <div class="app">
    <sidebar />
    <!-- end sidebar -->
    <div class="container">
      <navbar />
      <!-- end navbar -->
      <router-view />
    </div>
    <!-- end content -->
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'Main',
  components: {
    Sidebar,
    Navbar
  }
}
</script>

<style lang="scss">
@import "~/main.scss";

.app {
  position: relative;
  display: grid;
  grid-template-columns: 1fr $sidebar-max-width;
  transition: all 0.3s ease-in-out;
  .container {
    display: block;
    position: relative;
    margin-left: $sidebar-max-width;
    width: 100%;
    transition: all 0.3s ease-in-out;
    main {
      margin-top: $navbar-max-height;
      padding: 1rem 1.5rem;
    }
  }
}
</style>
