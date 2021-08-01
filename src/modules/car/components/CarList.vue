<template lang="pug">
  ul.car-list
    li.car-list__item(v-for="car in cars" :key="car.id")
      car-card(:car="car")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Car } from "../typing/car";
import CarCard from "./CarCard.vue";

@Component({
  components: {
    CarCard,
  },
})
export default class CarList extends Vue {
  @Prop({ default: [] })
  protected cars!: Car[];
}
</script>

<style lang="scss">
.car-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  list-style: none;

  &__item {
    overflow: hidden;
  }
}
</style>
