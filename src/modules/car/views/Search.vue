<template lang="pug">
  #car-search(v-if="cars.length")
    h1 {{ $t("car.search.title") }}
    .car-search__content
      car-filters(class="car-search__filters" @filter="setFilter")
      car-list(class="car-search__list" :cars="filteredCarList" @carHeartClick="saveCar")
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { namespace } from "vuex-class";
import { Car } from "../typing/car";
import CarList from "../components/CarList.vue";
import CarFilters from "../components/CarFilters.vue";

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
    CarFilters,
  },
})
export default class Search extends Vue {
  /**
   * Filter string which is used to filter the computed list of cars rendered.
   *
   * It is used to filter by make, model and version.
   */
  filter = "";

  /**
   * List of cars to conditionally render the view.
   */
  @car.State
  public cars!: Car[];

  /**
   * List of saved cars id.
   */
  @car.State
  public savedCarsId!: Car[];

  /**
   * Action to retrieve the cars information from the adapter.
   */
  @car.Action
  public getCars!: () => void;

  /**
   * It pushes a car id in the state savedCarsId.
   */
  @car.Mutation
  public saveCar!: (carId: number) => void;

  /**
   * It sets the complete list of car ids to be saved.
   */
  @car.Mutation
  public setSavedCars!: (carsId: number[]) => void;

  /**
   * Computed getter which contains the `save` status of each car.
   */
  @car.Getter
  public computedCars!: (Car & { saved: boolean })[];

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
   * It sets filter string with the received from the filters.
   */
  setFilter(filter: string): void {
    this.filter = filter.toLowerCase();
  }

  /**
   * It filters the `computedCars` with the filter passed.
   */
  protected get filteredCarList(): (Car & { saved: boolean })[] {
    return this.computedCars.filter(
      (car) =>
        car.make.toLowerCase().includes(this.filter) ||
        car.model.toLowerCase().includes(this.filter) ||
        car.version?.toLowerCase().includes(this.filter)
    );
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
    justify-content: center;
    gap: 0 40px;
    width: 100%;
  }

  &__filters {
    flex-basis: 300px;
    height: 100%;
  }
}
</style>
