<template lang="pug">
.card.container.container--fluid.container--column(:class="{ dark: isDark, light: !isDark }")
  .card__header.container.container--column
    .card__title.text.text--h5.text--bold
      | Free
    .card__subtitle.text
      | for freelancers
  .container
    p.text.text--h3.text--bold.card__price
      | $0
  .container.container--column.card__checks
    label.check.text.card__check
      input.check__checkbox.card__checkbox(type="checkbox", name="check", checked, disabled)
      span.check__label.text
        | Perfomance
    label.check.text.card__check
      input.check__checkbox.card__checkbox(type="checkbox", name="check", checked, disabled)
      span.check__label.text
        | Perfomance
    label.check.text.card__check
      input.check__checkbox.card__checkbox(type="checkbox", name="check", checked, disabled)
      span.check__label.text
        | Perfomance
  .button.card__button(@click="changeTheme")
    | Accept
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      isDark: false,
    };
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  created() {
    this.isDark = this.dark;
  },
  methods: {
    changeTheme() {
      this.isDark = !this.isDark;
    },
  },
};
</script>

<style lang="stylus" scoped>
.card__price
  margin-top 50px

.card__title
  color inherit

.card
  min-width 500px
  min-height 700px
  height 90%
  border-radius 15px
  padding 3rem 4rem
  box-sizing border-box
  background-color #ffffff
  transition 0.3s
  box-shadow 0 0 10px 0px #000000

  & .container
    padding 0px 40px
    box-sizing border-box

  & .card__checks
    margin-top 50px

  & .check
    margin 15px 0px

  & .check__label:before
    border-radius 50%
    width 22px
    height 22px
    border none

  &.light
    color #202842
    background-color #ffffff

    & .card__checkbox:disabled+.check__label::before
      background-color #242C44

    & .card__button
      background-color #242C44
      color #ffffff

  &.dark
    color #ffffff
    background-color #242C44

    & .card__button
      background-color #ffffff
      color #242C44

    & .card__checkbox:disabled+.check__label::before
      background-color #ffffff

    & .card__checkbox:checked+.check__label::before
      border-color #0b76ef
      background-color #ffffff
      background-image url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%363636' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")

.card__button
  border-radius 40px
  text-align center
  margin-top auto

.card__subtitle
  color #7C8494
  margin-top 20px

@media (max-width $xs-large)
  .card
    min-width 200px
</style>
