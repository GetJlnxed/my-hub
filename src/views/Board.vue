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
  </div>
</template>

<script>
import AppMenu from "@/components/menu/menu";
import AppCard from "@/components/card";
import Search from "@/components/search";
import AppSlider from "@/components/slider";

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
