<template>
  <div id="app" class="container fluid container--column nowrap">
    <header
      class="app-header container"
      v-if="isHeaderVisible"
      :class="{ 'app-header--starred': $route.path === '/sky' }"
    >
      <p @click="$router.push({ name: 'Home' })" class="app-header__title text text--h4">HUB</p>
      <div class="links container">
        <button class="links__button button" @click="$router.push({ name: 'Board' })">Board</button>
        <button class="links__button button" @click="$router.push({ name: 'Sky' })">Sky</button>
        <a href="https://getjlnxed.github.io/my-page/" class="links__button button" target="_blank">About</a>
      </div>
    </header>

    <router-view />
    <!-- <button @click="test"></button> -->
    <!-- <footer class="app-footer">
      <p class="text">{{ windowSize.breakpoint }}</p>
      <p class="text">{{ windowSize.width }}</p>
    </footer> -->
  </div>
</template>

<script>
function setWidth(width) {
  if (width > 1600) return "xlg";
  else if (width < 1600 && width > 1366) return "lg";
  else if (width < 1366 && width > 1280) return "lg";
  else if (width < 1280 && width > 1024) return "tab";
  else if (width < 1024 && width > 768) return "tab2";
}

export default {
  name: "App",
  provide() {
    return {
      windowSize: this.windowSize,
    };
  },
  data() {
    return {
      windowSize: {
        width: 0,
        breakpoint: null,
      },
    };
  },
  mounted() {
    this.setWindowSize();
    window.addEventListener("resize", this.setWindowSize);
  },
  methods: {
    setWindowSize() {
      this.windowSize.breakpoint = setWidth(window.innerWidth);
      this.windowSize.width = window.innerWidth;
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.setWindowSize);
  },
  computed: {
    isHeaderVisible() {
      return this.$route.fullPath !== "/" /* && this.$route.fullPath !== "/panel" */;
    },
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

@media (max-width $xs-large)
  .app-header
    padding 1rem 2rem

@media (max-width $xs)
  .app-header
    flex-flow column
    align-items center
</style>
