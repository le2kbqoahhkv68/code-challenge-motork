<template lang="pug">
  .car-filters
    .car-filters__header {{ $t("car.search.filters") }}
    .car-filters__search
      .car-filters__title {{ $t("car.search.search") }}
      input(class="car-filters__input" type="text")
    .car-filters__unit
      .car-filters__title {{ $t("car.search.unit") }}
      .car-filters__buttons
        button.car-filters__unit-button.car-filters__unit-button--selected {{ $t("car.search.miles") }}
        button.car-filters__unit-button {{ $t("car.search.km") }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

/**
 * It renders a list of car cards with the data from the cars property.
 */
@Component
export default class Filters extends Vue {}
</script>

<style lang="scss">
.car-filters {
  border: 1px solid $color-grey-03;
  padding: 20px;

  &__search,
  &__unit {
    border-top: 1px solid $color-grey-02;
    margin: 20px 0 10px 0;
    padding-top: 15px;
  }

  &__header {
    font-size: 16px;
    font-weight: 700;
  }

  &__title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  &__input {
    border: 1px solid $color-grey-03;
    border-radius: $default-border-radius;
    padding: 8px;
    width: 100%;
  }

  &__buttons {
    display: flex;
    gap: 10px;
    justify-content: space-between;
  }

  &__unit-button {
    background-color: $color-white;
    border: 1px solid $color-grey-03;
    border-radius: $default-border-radius;
    flex: 1;
    height: 40px;
    transition: border-color 0.25s, background-color 0.25s;

    &:hover {
      border-color: $color-grey-01;
      cursor: pointer;
    }

    &--selected {
      border-color: $color-black-02;
      background-color: $color-black-02;
      color: $color-white;
    }
  }
}
</style>
