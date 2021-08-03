<template lang="pug">
  ul.car-list(v-if="cars.length")
    li.car-list__item(v-for="car in cars" :key="car.id")
      car-card(:car="car" @heartClick="emitCardHeartClick" :saved="car.saved")
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Car } from "../typing/car";
import CarCard from "./CarCard.vue";

/**
 * It renders a list of car cards with the data from the cars property.
 */
@Component({
  components: {
    CarCard,
  },
})
export default class CarList extends Vue {
  @Prop({ default: [] })
  protected cars!: (Car & { saved?: boolean })[];

  /**
   * It emits an event with the clicked heart car id.
   */
  emitCardHeartClick(carId: number) {
    this.$emit("carHeartClick", carId);
  }
}
</script>

<style lang="scss">
.car-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 300px));
  grid-gap: 15px;
  list-style: none;

  &__item {
    overflow: hidden;
  }
}
</style>
