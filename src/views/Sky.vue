<template>
  <transition name="fade" appear>
    <div class="sky container fluid" v-show="pageVisible" ref="sky">
      <div
        v-for="star in sky.stars"
        :key="star"
        class="star"
        :style="{ left: star.left + 'px', top: star.top + 'px', width: star.width + 'px', height: star.width + 'px' }"
      ></div>
    </div>
  </transition>
</template>

<script>
import { appear } from "@/components/mixins/appear";

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default {
  name: "Sky",
  mixins: [appear],
  data() {
    return {
      sky: {
        star_count: 330,
        minWidth: 5,
        maxWidth: 5,
        stars: [],
      },
    };
  },
  mounted() {
    this.createStars();
  },
  methods: {
    createStars() {
      let sky = this.$refs.sky;
      let w = sky.clientWidth - 10;
      let h = sky.clientHeight - 10;
      let i = 0;

      while (i < this.sky.star_count) {
        let star = {
          width: getRandomArbitrary(this.sky.minWidth, this.sky.maxWidth),
          left: getRandomArbitrary(1, w),
          top: getRandomArbitrary(1, h),
        };
        this.sky.stars.push(star);
        i++;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.sky
  width 100%
  height 100%
  background #3D1C51
  position relative

  .star
    box-sizing border-box
    position absolute
    background #ffffff
    border-radius 50%
    box-shadow 0px 0px 4px 0px #00aff0
    border 4px dotted '#EEEEEE'
    animation-iteration-count infinite
    animation-name zoom_out

    &:nth-of-type(odd)
      animation-duration 15s

    &::nth-of-type(even)
      animation-duration 5s

@keyframes zoom_out
  0%
    transform scale(1)
    box-shadow 0px 0px 4px 0px #00aff0

  50%
    transform scale(0.5)
    box-shadow 0px 0px 4px 2px #00aff0

  100%
    transform scale(1)
    box-shadow 0px 0px 4px 0px #00aff0
</style>
