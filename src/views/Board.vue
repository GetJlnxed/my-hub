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
      <AppSlider :minValue="10" :maxValue="100" :value="50" :bold="true" />
      <AppSlider :minValue="10" :maxValue="100" :value="100" :disabled="true" />
    </div>
    <div class="box checks container container--row align-center justify-center">
      <div class="container container--column check-container align-center justify-center">
        <SwitchCheck :background="false" />
      </div>
      <div class="container container--column check-container align-center justify-center">
        <SwitchCheck checked />
      </div>
      <div class="container container--column check-container align-center justify-center">
        <SwitchCheck stretch />
      </div>
      <div class="container container--column check-container align-center justify-center">
        <SwitchCheck squared />
      </div>
      <div class="container container--column check-container align-center justify-center">
        <SwitchCheck squared stretch checked />
      </div>
    </div>
  </div>
</template>

<script>
  import AppMenu from "@/components/AppMenu";
  import AppCard from "@/components/AppCard";
  import Search from "@/components/Search";
  import AppSlider from "@/components/AppSlider";
  import SwitchCheck from "@/components/SwitchCheck";

  export default {
    name: "Board",
    components: {
      AppMenu,
      AppCard,
      Search,
      AppSlider,
      SwitchCheck,
    },
  };
</script>

<style lang="stylus" scoped>
  .board
    display grid
    padding 2rem
    grid-gap 3rem

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

  .checks
    background-color #EBEBF3
    border-radius 5px
    height 400px

  .check-container
    padding 1rem
    background-color #ffffff
    width 100px
    height 100px
    margin 0.5rem
    border-radius 15px
</style>
