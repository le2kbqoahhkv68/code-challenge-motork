<template lang="pug">
  #car-search
    h1 {{ $t("car.search.title") }}
    .car-search__content
      .car-search__filters
      car-list(class="car-search__list" :cars="carsWithSave" @carHeartClick="saveCar")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
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
  public savedCarsId!: Car[];

  @car.Action
  public getCars!: () => void;

  @car.Mutation
  public saveCar!: (carId: number) => void;

  @car.Mutation
  public setSavedCars!: (carsId: number[]) => void;

  @car.Getter
  public carsWithSave!: (Car & { saved: boolean })[];

  /**
   * It stores the saved cars list in the `localStorage`.
   */
  storeSavedCars(): void {
    localStorage.setItem("savedCarsId", JSON.stringify(this.savedCarsId));
  }

  /**
   * It gets the saved cars from the storage and sets it in the
   * state.
   */
  restoreSavedCars(): void {
    const savedCars = localStorage.getItem("savedCarsId");

    if (savedCars) {
      this.setSavedCars(JSON.parse(savedCars));
    }
  }

  /**
   * It watches and stores the saved cars id list. We could do this in the
   * store but I prefer to keep this logic separated as it's part of the
   * search view.
   */
  @Watch("savedCarsId")
  savedCarsIdChanged() {
    this.storeSavedCars();
  }

  /**
   * It gets the list of cars and it restores the saved cars from previous
   * session.
   */
  mounted() {
    this.restoreSavedCars();
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
