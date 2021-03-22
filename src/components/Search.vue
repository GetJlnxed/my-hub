<template lang="pug">
.search.container(:class="{ 'search--focused': focused }")
  input.search__input(
    name="input",
    @focus="focusHandler",
    @blur="blurHandler",
    v-model="inputValue"
  )
  label.search__label.text.text--bold(
    for="input",
    :class="{ 'search__label--hidden': isLabelInvisible }"
  )
    | Search
  button.search__button.button
    | Search
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      focused: false,
      isLabelInvisible: false,
      inputValue: "",
    };
  },
  methods: {
    focusHandler() {
      this.focused = true;
      this.isLabelInvisible = true;
    },
    blurHandler() {
      console.log(this.inputValue);
      if (this.inputValue.length == 0) {
        this.isLabelInvisible = false;
      }
      this.focused = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.search
  background #dcdfec
  padding 0.5rem 0.5rem 0.5rem 4rem
  border-radius 35px
  box-shadow inset 2px 2px 5px rgba(154, 147, 140, 0.5)
  position relative
  font-size 1.1rem
  transition background-color 0.3s
  color #363636

.search--focused
  background-color #ffffff

.search__input
  width 90%
  border none
  background transparent
  outline none
  padding 1rem
  box-sizing border-box
  font-weight 700
  z-index 2

.search__label
  position absolute
  color #8D95A4
  top calc(25% + 1.2rem / 2)
  left 5rem
  display block
  transition 0.2s
  font-size inherit
  opacity 1
  z-index 1

.search__label--hidden
  opacity 0

.search__button
  margin-left auto
  border-radius inherit
  box-shadow 2px 2px 5px rgba(154, 147, 140, 0.5)
  font-size inherit
  transition box-shadow 0.1s, background-color 0.3s

  &:hover
    background #ffffff
    box-shadow none

  &:active
    box-shadow inset 2px 2px 5px rgba(154, 147, 140, 0.5)
    color #4a546c

.search--focused .search__button
  &:hover
    background #f1f1f8
</style>
