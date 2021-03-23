<template lang="pug">
.switchingCheck(:class="{ 'switchingCheck--stretchable': stretch, 'switchingCheck--square': squared }")
  input.switchingCheck__checkbox(type="checkbox", :checked="checked")
  .switchingCheck__background(v-if="background")
  .switchingCheck__knob
</template>

<script>
  /* Legacy component */

  export default {
    name: "SwitchCheck",
    props: {
      squared: {
        type: Boolean,
        default: false,
        required: false,
      },
      stretch: {
        type: Boolean,
        default: false,
        required: false,
      },
      background: {
        type: Boolean,
        default: true,
        required: false,
      },
      checked: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
  };
</script>

<style lang="stylus" scoped>
  body
    margin 0
    padding 0
    font-family Geneva, sans-serif
    font-size 1rem

  .display
    min-height 100vh
    padding 10px
    box-sizing border-box
    display grid
    grid-template-columns 1fr 1fr 1fr
    background #363636
    align-items center
    justify-content center

  .panel
    min-width 220px
    min-height 220px
    background #fff
    margin 5px
    display flex
    flex-flow column
    align-items center
    justify-content center

  .panel__heading
    font-weight 700

  .switchingCheck
    position relative
    border 2px solid #dad6d5
    background-color #dad6d5
    box-sizing border-box
    border-radius 15px
    width 52px
    height 30px
    overflow hidden

  .switchingCheck__background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background-color #dad6d5
    z-index 1
    transition background-color 0.3s 0s

  .switchingCheck__knob
    box-sizing border-box
    position absolute
    left 2.5px
    height 20px
    width @height
    top 50%
    margin-top -10px
    background-color #fff
    border-radius 100%
    transition background-color 0.3s cubic-bezier(1, -0.06, 0.63, 1.23) 0s, left 0.3s cubic-bezier(1, -0.06, 0.63, 1.23) 0s
    z-index 1

  .switchingCheck__checkbox
    width 100%
    height 100%
    position absolute
    top 0
    left 0
    margin 0
    padding 0
    opacity 0
    z-index 3
    cursor pointer

    &:checked ~ .switchingCheck__knob
      background-color #27ae60
      left 24.5px

    &:checked ~ .switchingCheck__background
      background-color #fff

  .switchingCheck--stretchable
    & .switchingCheck__knob
      transition background-color 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) 0s, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) 0s, margin-left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) 0s, width 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) 0s

    & .switchingCheck__checkbox
      &:active ~ .switchingCheck__knob
        width 30px
        border-radius 100px

      &:checked:active ~ .switchingCheck__knob
        margin-left -10px
        width 30px

  .switchingCheck--square
    border-radius 5px

  .switchingCheck--square .switchingCheck__checkbox
    &:active ~ .switchingCheck__knob
      border-radius 2px

  .switchingCheck--square .switchingCheck__knob
    border-radius 10%

  .switchingCheck--loading .switchingCheck__checkbox
    &:checked ~ .switchingCheck__knob
      background-color #fff
      height 20px
      width @height
      left 14px
      border-style solid
      border-width 2px 1px
      border-color #27ae60 rgba(218, 214, 213, 0.3)
      animation spin 3s infinite

  .switchingCheck--loading.switchingCheck--square .switchingCheck__checkbox
    &:checked ~ .switchingCheck__knob
      background-color #fff
      height 20px
      width @height
      left 14px
      border none
      animation none

      &:after
        content ''
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        background-color #27ae60
        animation fadeIn 2.5s infinite 1s

  @keyframes spin
    0%
      transform rotate(0deg)

    50%
      transform rotate(360deg)

    100%
      transform rotate(1080deg)

  @keyframes fadeIn
    0%
      transform translateY(0px) translateX(0px)

    20%
      transform translateY(-80px)

    50%
      transform translateX(-80px)

    60%
      transform translateY(80px)

    70%
      transform translateX(0px)

    100%
      transform translateY(0px)
</style>
