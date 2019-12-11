<template>
  <aside
    class="sidebar"
    :class="{ 'is-close' : !isActive }"
  >
    <a
      href="/"
      class="brand"
    >
      <logo />
    </a>
    <!-- end brand -->
    <ul class="menu-list">
      <li
        v-for="(link, index) in links"
        :key="index"
      >
        <router-link
          :to="{name: link.name}"
          exact
        >
          <span class="icon">
            <i :class="link.icon" />
          </span>
          {{ link.text }}
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import Logo from '@/components/SVG/Logo'
import { mapGetters } from 'vuex'
export default {
  name: 'Sidebar',
  components: {
    Logo
  },
  data: () => ({
    links: [
      { text: 'Dashboard', name: 'dashboard', icon: 'fas fa-tachometer-alt' },
      { text: 'My Calendar', name: 'my.calendar', icon: 'fas fa-calendar' }
    ]
  }),
  computed: {
    ...mapGetters({
      isActive: 'UINavbar/isActive'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/variables.scss";

.sidebar {
  width: 100%;
  height: 100vh;
  max-width: $sidebar-max-width;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: $color-primary;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
  &.is-close {
    max-width: 0;
  }
  a.brand {
    display: block;
    position: relative;
    padding: 1rem;
  }
  ul.menu-list {
    display: block;
    li {
      a {
        display: block;
        font-size: 0.750rem;
        text-transform: capitalize;
        color: white;
        padding: 0.5rem 1rem;
        transition: all 0.3s ease-in-out;
        .icon {
          margin-right: 0.25rem;
        }
        &.active {
          background-color: white;
          color: inherit;
          &:hover {
            color: $color-primary;
            opacity: 1;
          }
        }
        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
}
</style>
