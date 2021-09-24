<template>
  <div id="app" class="container fluid container--column">
    <header class="app-header container">
      <p class="text text--h4">UIDESIGNDAILY KIT</p>
    </header>

    <router-view />

    <!-- <footer class="app-footer">
      <p class="text">footer</p>
    </footer> -->
  </div>
</template>

<style lang="stylus">
.app-header
  height 20%
  background-color $color-mostly-black
  padding 2rem 4rem

.app-footer
  margin-top auto
  height 10%
  padding 2rem 4rem
  background-color $color-mostly-black

#app
  background-color $color-very-dark
  min-height 100vh
</style>
