<template>
  <transition name="fade" appear>
    <div class="board container nowrap container--column" v-show="pageVisible">
      <v-row>
        <v-col><bCard /></v-col>
        <v-col><bMenu /></v-col>
        <v-col :cols="sliderCols">
          <div class="case container container--column">
            <div class="container align-center" v-for="input in inputs" :key="input.id">
              <p class="input-value text">{{ input.value }}</p>
              <Slider
                :minValue="input.min"
                :maxValue="input.max"
                v-model="input.value"
                :disabled="input.disabled"
                :bold="input.bold"
              />
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col><bSearch /></v-col>
      </v-row>
      <v-row>
        <v-col>
          <bCreditCard />
        </v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
import bMenu from "@/components/for-board/b-menu/b-menu";
import bCard from "@/components/for-board/b-card";
import bSearch from "@/components/for-board/b-search";
import bCreditCard from "@/components/for-board/b-credit-card";

import Slider from "@/components/slider";

import { appear } from "@/components/mixins/appear";

export default {
  name: "nBoard",
  mixins: [appear],
  inject: ["windowSize"],
  components: {
    bMenu,
    bCard,
    bSearch,
    Slider,
    bCreditCard,
  },
  data() {
    return {
      inputs: [
        {
          id: 0,
          min: 0,
          max: 100,
          value: 30,
          disabled: false,
          bold: false,
        },
        {
          id: 1,
          min: 30,
          max: 100,
          value: 60,
          disabled: false,
          bold: false,
        },
        {
          id: 2,
          min: 60,
          max: 100,
          value: 90,
          disabled: false,
          bold: false,
        },
        {
          id: 3,
          min: 0,
          max: 100,
          value: 50,
          disabled: false,
          bold: true,
        },
        {
          id: 4,
          min: 0,
          max: 100,
          value: 100,
          disabled: true,
          bold: true,
        },
      ],
    };
  },
  computed: {
    sliderCols() {
      if (this.windowSize.breakpoint === "xs") return 12;
      else return 4;
    },
  },
};
</script>

<style lang="stylus" scoped>
.board
  background-color $color-black

.case
  background-color $color-mostly-black
  padding 25px
  border-radius 10px

.slider
  margin 30px 0

.input-value
  margin-right 10px
  width 25px

/* @media (max-width $xs-large) {

} */
</style>
