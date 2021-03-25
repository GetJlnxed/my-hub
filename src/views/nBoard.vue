<template>
  <div class="container fluid container--column">
    <v-row>
      <v-col cols="3"><AppCard /></v-col>
      <v-col cols="2"><AppMenu /></v-col>
      <v-col cols="2"><AppMenu /></v-col>
    </v-row>
    <v-row>
      <v-col cols="8"><Search /></v-col>
      <v-col><AppSlider /></v-col>
      <v-col><SwitchCheck /></v-col>
    </v-row>
  </div>
</template>

<script>
  import AppMenu from "@/components/AppMenu";
  import AppCard from "@/components/AppCard";
  import Search from "@/components/Search";
  import AppSlider from "@/components/AppSlider";
  import SwitchCheck from "@/components/SwitchCheck";

  export default {
    name: "nBoard",
    components: {
      AppMenu,
      AppCard,
      Search,
      AppSlider,
      SwitchCheck,
    },
  };
</script>
