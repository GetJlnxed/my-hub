<template lang="pug">
input.slider(
  type="range",
  :min="minValue",
  :max="maxValue",
  v-model="currentValue",
  :style="{ background: background }",
  :disabled="disabled",
  :class="{ bold: bold }"
)
</template>

<script>
  export default {
    name: "AppSlider",
    data() {
      return {
        currentValue: 0,
      };
    },
    created() {
      if (this.value) {
        this.currentValue = this.value;
      }
    },
    props: {
      value: {
        type: Number,
        default: 0,
        required: false,
      },
      minValue: {
        type: Number,
        default: 0,
        required: false,
      },
      maxValue: {
        type: Number,
        default: 100,
        required: false,
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false,
      },
      bold: {
        type: Boolean,
        default: false,
        required: false,
      },
    },
    computed: {
      background() {
        let value = ((this.currentValue - this.minValue) / (this.maxValue - this.minValue)) * 100;
        return "linear-gradient(to right, #979EE8 0%, #979EE8 " + value + "%, #fff " + value + "%, white 100%)";
      },
    },
  };
</script>

<style lang="stylus" scoped>
  .slider
    -webkit-appearance none
    width 100%
    height 10px
    outline none
    opacity 0.7
    transition opacity 0.2s
    border-radius 15px

    &:hover
      opacity 1

    &::-webkit-slider-thumb
      -webkit-appearance none
      appearance none
      width 24px
      height 24px
      background #4A56C2
      border 2px solid #ffffff
      cursor pointer
      border-radius 15px

    &::-moz-range-thumb
      width 25px
      height 25px
      background #4CAF50
      cursor pointer

    &:disabled::-webkit-slider-thumb
      background rgb(151, 158, 232)
      height 10px
      border none
      cursor default

    &.bold
      height 25px
      box-shadow -1px -2px 8px 0px rgba(34, 60, 80, 0.2) inset
      border 2px solid #ffffff

      &::-webkit-slider-thumb
        height 25px
        border none
        width 48px
</style>
