<template>
  <div class="board">
    <div class="box">
      <AppMenu />
    </div>
    <div class="box card-box">
      <AppCard />
    </div>
    <div class="box">
      <div class="container align-center justify-center">
        <AppSlider />
        <AppSlider />
        <AppSlider />
      </div>
    </div>
    <div class="box search-box">
      <Search />
    </div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
  import AppMenu from "@/components/AppMenu";
  import AppCard from "@/components/AppCard";
  import Search from "@/components/Search";
  import AppSlider from "@/components/AppSlider";
  //import SwitchCheck from "@/components/SwitchCheck";

  export default {
    name: "Board",
    components: {
      AppMenu,
      AppCard,
      Search,
      AppSlider,
      //SwitchCheck,
    },
  };
</script>

<style lang="stylus" scoped>
  .board
    padding 2rem
    box-sizing border-box
    display grid
    grid-template-columns repeat(auto-fill, minmax(20em, 1fr))
    grid-gap 2rem

  .box
    /* background-color rgba(255, 255, 255, 0.3) */
    min-width 300px
    min-height 300px

  .card-box
    grid-row-start 1
    grid-row-end 3
    grid-column-start 2
    grid-column-end 4
  /*   background-color rgba(yellow, 0.3) */

  .search-box
    grid-row-start 3
    grid-row-end 4
    grid-column-start 1
    grid-column-end 4
</style>
