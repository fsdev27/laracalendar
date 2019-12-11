<template>
  <section class="title-with-breadcrumbs">
    <h2
      class="title"
      v-text="title"
    />
    <ul class="breadcrumbs">
      <li
        v-for="(link, index) in routes"
        :key="index"
      >
        <router-link
          v-if="link.name !== $route.name && !link.meta"
          :to="{
            name: link.name
          }"
          v-text="link.title"
        />
        <template v-else>
          {{ link.title }}
        </template>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'TitleSection',
  computed: {
    title () {
      return this.removeDot(this.$route.name)
    },
    routes () {
      let result = [{ name: 'dashboard', title: 'Dashboard' }]
      const route = this.$route
      if (route.name !== 'dashboard') {
        result.push({ name: route.name, title: this.removeDot(route.name) })
      }
      return result
    }
  },
  methods: {
    removeDot (value) {
      return value.replace(/[.]/g, ' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.title-with-breadcrumbs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  .breadcrumbs {
    text-align: right;
    li {
      display: inline;
      text-transform: capitalize;
      font-size: 0.875rem;
      padding-right: 0.5rem;
      &:last-child {
        padding-right: 0;
      }
      & + li::before {
        padding: 0 0.25rem;
        color: hsla(0, 0%, 0%, 0.65);
        content: "/\00a0";
      }
    }
  }
}
</style>
