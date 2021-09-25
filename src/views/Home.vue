<template>
  <div class="home container container--column fluid align-center justify-center">
    <transition name="fade" appear @after-appear="titleAppeared">
      <p class="home__title text text--h4">Welcome to my hub</p>
    </transition>
    <transition v-if="isTitleAppeared" name="fade" appear>
      <div class="links container container--row align-center justify-center">
        <button class="links__button button" @click="$router.push({ name: 'nBoard' })">Board</button>
        <button class="links__button button">Sky</button>
        <button class="links__button button">Contacts</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isTitleAppeared: false,
    };
  },
  methods: {
    titleAppeared() {
      setTimeout(() => {
        this.isTitleAppeared = true;
      }, 600);
    },
  },
};
</script>

<style lang="stylus" scoped>
.button
  transition 0.5s

.home
  position relative
  transition 0.5s

.home__title
  position absolute
  top 40%

.links
  margin 20px 0
  transition 0.5s

  .links__button
    margin 10px
</style>
