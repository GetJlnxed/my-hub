<template>
  <div class="board">
    <div class="box app-card">
      <AppCard :dark="true" />
    </div>
    <div class="box app-menu">
      <AppMenu />
    </div>
    <div class="box search">
      <Search />
    </div>
    <div class="box sliders">
      <AppSlider :minValue="10" :maxValue="100" :value="25" />
      <AppSlider :minValue="10" :maxValue="100" :value="50" />
      <AppSlider :minValue="10" :maxValue="100" :value="100" />
    </div>
  </div>
</template>

<script>
  import AppMenu from "@/components/AppMenu";
  import AppCard from "@/components/AppCard";
  import Search from "@/components/Search";
  import AppSlider from "@/components/AppSlider";

  export default {
    name: "Board",
    components: {
      AppMenu,
      AppCard,
      Search,
      AppSlider,
    },
  };
</script>

<style lang="stylus" scoped>
  .board
    display grid
    grid-template-columns repeat(4, 1fr)
    padding 2rem

    & .box
      margin 2rem

  .app-card
    grid-column-start 1
    grid-row-start 1
    grid-row-end 3

  .app-menu
    grid-row-start 2
    grid-column-start 2

  .search
    grid-row-start 1
    grid-column-start 2
    grid-column-end 5

  .sliders
    background-color #ebebf3
    height 200px
    display flex
    flex-flow column
    align-items center
    justify-content center
    padding 2rem
    border-radius 15px

  & .slider
    margin 1rem 0
</style>
