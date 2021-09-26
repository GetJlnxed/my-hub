<template lang="pug">
.app-menu.container.container--column.justify-space-around
  button.button.app-menu__button
    | Ad. new
  MenuRow(:icon="['fas', 'file-upload']", title="Upload files")
  MenuRow(:icon="['fas', 'upload']", title="Upload files")
  MenuRow(:icon="['fas', 'folder']", title="New folder")
  MenuRow(title="Exit")
</template>

<script>
import MenuRow from "@/components/menu/menu-row";

export default {
  name: "AppMenu",
  components: {
    MenuRow,
  },
};
</script>

<style lang="stylus" scoped>
.app-menu
  background-color #241C3C
  min-height 400px
  min-width 250px
  border-radius 10px
  padding 3rem
  color #808ac5
  font-size 1.5rem

.app-menu__button
  border 5px
  color #241C3C
  background-color #FBB135
</style>
