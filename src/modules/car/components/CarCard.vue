<template lang="pug">
  .car-card
    img.car-card__image(:src="car.image")
    .car-card__header
      .car-card__markmodel {{ car.make }} {{ car.model }}
      .car-card__version {{ car.version }}
    .car-card__price
      .car-card__price-subtitle {{ $t("common.from") }}
      .car-card__price-amount {{ $n(car.price, 'currency') }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Car } from "../typing/car";

@Component
export default class CarCard extends Vue {
  @Prop()
  protected car!: Car;
}
</script>

<style lang="scss">
.car-card {
  border: 1px solid $color-grey-01;
  border-radius: $default-boder-radius;

  & > * {
    padding: 0 15px;
  }

  &__image {
    border-top-left-radius: $default-boder-radius;
    border-top-right-radius: $default-boder-radius;
    height: 190px;
    margin-bottom: 16px;
    object-fit: cover;
    padding: 0;
    width: 100%;
  }

  &__header {
    height: 60px;
    position: relative;

    &:after {
      background-color: $color-orange;
      bottom: 5px;
      content: "";
      height: 2px;
      position: absolute;
      width: 55px;
    }
  }

  &__markmodel,
  &__version {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__markmodel {
    color: $color-black-02;
    font-weight: 500;
    font-size: 16px;
  }

  &__version {
    color: $color-grey-01;
    font-size: 13px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
