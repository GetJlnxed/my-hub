<template lang="pug">
.app-row.container.align-center
  font-awesome-icon.app-row__icon(:icon="icon", v-if="icon")
  p.app-row__link.text.text--bold
    | {{ title }}
</template>

<script>
export default {
  name: "AppRow",
  props: {
    icon: {
      type: Array,
      required: false,
    },
    title: {
      type: String,
      default: "No title",
      require: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.app-row
  padding 1rem 10px
  position relative
  border-radius 5px
  cursor pointer
  user-select none

  &:before
    content ''
    position absolute
    width calc(100% + 6rem)
    height 100%
    background-color #ffffff
    margin-left calc(-10px + -3rem)
    border-radius inherit
    transition 0.3s
    transform translateX(0)
    opacity 0

  &:hover
    color #241C3C

  &:hover:before
    transform translateX(-1rem)
    opacity 1

.app-row__icon
  width 1.5rem
  margin-right 1rem
  z-index 2

.app-row__link
  z-index 2
</style>
