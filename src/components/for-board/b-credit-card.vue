<template lang="pug">
.credit-card
  .credit-card__left
    .credit-card__logo
      font-awesome-icon(:icon="['fas', 'crdit-card']")
    .credit-card__inputs
      label.credit-card__label(for="cardNumber")
        | Card No.
      input.credit-card__input(name="cardNumber", placeholder="0123 4567 8901 2345")
      label.credit-card__label(for="cardHolder")
        | Card Holder
      input.credit-card__input(name="cardHolder", placeholder="John Doe")
      label.credit-card__label(for="cardValid")
        | Valid Thru
      input.credit-card__input(name="cardValid", placeholder="MM/YY")
  .credit-card__right
    p.credit-card__title
      | Bank Name
    i.fab.fa-cc-visa.fa-4x.visa
</template>

<style lang="stylus" scoped>
/* font-awesome-icon(:icon="['fas', 'credit-card']") */
.credit-card
  background #fff
  border-radius 15px
  display flex
  flex-flow row nowrap
  max-width 480px
  padding 25px
  box-sizing border-box
  transition transform 0.5s
  position relative

  .credit-card__right
    flex-grow 1
    display flex
    flex-flow column
    align-items flex-end
    margin-right 20px

    .visa
      color #00239a

    .credit-card__title
      font-weight 700
      font-size 20px
      color #97989e

  .credit-card__left
    .credit-card__logo
      margin-bottom 20px
      color #97989e

    .credit-card__inputs
      display flex
      flex-flow column nowrap

      .credit-card__label
        font-size 14px
        color #72a7d7
        font-weight 700

      .credit-card__input
        font-size 20px
        margin-bottom 15px
        border none
        outline none
        font-family consolas

        &:last-of-type
          margin-bottom 0
</style>
