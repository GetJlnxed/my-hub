<template>
  <transition name="fade" appear>
    <div class="board container nowrap container--column" v-show="pageVisible">
      <v-row>
        <v-col><Card /></v-col>
        <v-col><Menu /></v-col>
        <v-col>
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
        <v-col cols="8"><Search /></v-col>
      </v-row>
    </div>
  </transition>
</template>

<script>
import Menu from "@/components/menu/menu";
import Card from "@/components/card";
import Search from "@/components/search";
import Slider from "@/components/slider";

import { appear } from "@/components/mixins/appear";

export default {
  name: "nBoard",
  mixins: [appear],
  inject: ["windowSize"],
  components: {
    Menu,
    Card,
    Search,
    Slider,
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
