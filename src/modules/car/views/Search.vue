<template lang="pug">
  #car-search
    h1 {{ $t("car.search.title") }}
    .car-search__content
      .car-search__filters
      car-list(class="car-search__list" :cars="carsWithSave" @carHeartClick="saveCar")
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Car } from "../typing/car";
import CarList from "../components/CarList.vue";

const car = namespace("car");

/**
 * Car / search view container.
 *
 * It's responsible to contain the business logic and map the state with
 * dummy components.
 *
 */
@Component({
  components: {
    CarList,
  },
})
export default class Search extends Vue {
  @car.State
  public cars!: Car[];

  @car.State
  public savedCars!: Car[];

  @car.Action
  public getCars!: () => void;

  @car.Mutation
  public saveCar!: (carId: number) => void;

  @car.Getter
  public carsWithSave!: (Car & { saved: boolean })[];

  mounted() {
    this.getCars();
  }
}
</script>

<style lang="scss">
.car-search {
  &__content {
    display: flex;
    width: 100%;
  }

  &__filters {
    flex-basis: 300px;
  }

  &__list {
    flex: 1;
  }
}
</style>
