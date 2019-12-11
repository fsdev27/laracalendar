<template>
  <nav class="navbar">
    <!-- navbar -->
    <button
      @click="onToggle"
      type="button"
    >
      <i
        class="fas"
        :class="[ isActive ? 'fa-bars' : 'fa-times' ]"
      />
    </button>
    <!-- end navbar toggle -->
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { onNavbarToggle } from '@/utilities/ui-app'
export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      isActive: 'UINavbar/isActive'
    })
  },
  watch: {
    isActive: function (value) {
      onNavbarToggle(value)
    }
  },
  methods: {
    ...mapActions({
      onToggle: 'UINavbar/onToggle'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/variables.scss";

.navbar {
  position: fixed;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  margin-left: $sidebar-max-width;
  width: 100%;
  height: 100%;
  max-height: $navbar-max-height;
  padding: 0 1rem;
  background-color: white;
  z-index: 999;
  transition: all 0.3s ease-in-out;
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    font-size: 1.25rem;
    color: hsla(0, 0%, 0%, 0.65);
  }
}
</style>
