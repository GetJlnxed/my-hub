<template>
  <div id="app" class="container fluid container--column nowrap">
    <header
      class="app-header container"
      v-if="route.fullPath !== '/'"
      :class="{ 'app-header--starred': route.path === '/sky' }"
    >
      <p @click="$router.push({ name: 'Home' })" class="app-header__title text text--h4">HUB</p>
      <div class="links container">
        <button class="links__button button" @click="$router.push({ name: 'Board' })">Board</button>
        <button class="links__button button" @click="$router.push({ name: 'Sky' })">Sky</button>
        <button class="links__button button">Contacts</button>
      </div>
    </header>

    <router-view />

    <!-- <footer class="app-footer">
      <p class="text">footer</p>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    route() {
      return this.$route;
    },
    /*     isSkyPage() {
      this.
    } */
  },
};
</script>

<style lang="stylus">
.links
  margin-left 15px

  .links__button
    margin 0 10px

.app-header
  height 20%
  background-color $color-mostly-black
  padding 2rem 4rem
  transition background-color 0.5s

  .app-header__title
    user-select none
    cursor pointer

  &--starred
    background-color #3D1C51

.app-footer
  margin-top auto
  height 10%
  padding 2rem 4rem
  background-color $color-mostly-black

#app
  background-color $color-black
  min-height 100vh
</style>
