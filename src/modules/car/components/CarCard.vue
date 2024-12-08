<template lang="pug">
  .car-card(v-if="car" :data-id="car.id" :class="cssClasses")
    .car-card__km0(v-if="car.isKm0") {{ $t("common.km0") }}
    img.car-card__image(:src="car.image")
    .car-card__header
      .car-card__markmodel {{ car.make }} {{ car.model }}
      .car-card__version {{ car.version }}
    .car-card__info
      .car-card__price
        .car-card__price-subtitle {{ $t("common.from") }}
        .car-card__price-amount {{ $n(car.price, 'currency') }}
      .car-card__heart(@click="emitSave")
        include ../../../assets/icons/heart.svg
    .car-card__detail
      .car-card__detail-year {{ car.registrationYear || "-" }}
      .car-card__detail-consumption {{ $t("common.combinedConsumption") }}: {{ car.consumption.combined}} {{ car.consumption.unitOfMeasure }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Car } from "../typing/car";
import { STATUS_FREE } from "../config/consts";

/**
 * It renders a card with the data from the car property.
 */
@Component
export default class CarCard extends Vue {
  /**
   * The car.
   */
  @Prop()
  protected car!: Car;

  /**
   * True if the car is saved by the user.
   */
  @Prop({ default: false })
  protected saved!: boolean;

  /**
   * Computed property with `cssClasses` used to avoid Vue re rendering.
   */
  protected get cssClasses(): Record<string, boolean> {
    return {
      "car-card--saved": this.saved,
      "car-card--free": this.car.status === STATUS_FREE,
    };
  }

  /**
   * It emits a `save` event with the current car id as payload.
   */
  emitSave(): void {
    if (this.car.status !== STATUS_FREE) {
      this.$emit("save", this.car.id);
    }
  }
}
</script>

<style lang="scss">
.car-card {
  border: 1px solid $color-grey-03;
  border-radius: $default-border-radius;
  height: 100%;
  position: relative;

  $side-margin: 15px;

  & > * {
    padding: 0 $side-margin;
  }

  &__km0 {
    background-color: $color-white;
    border-radius: $border-radius-round;
    font-size: 12px;
    font-weight: 700;
    left: 8px;
    padding: 5px 10px 5px 25px;
    position: absolute;
    top: 8px;

    &:before {
      content: "";
      background-color: $color-blue;
      border-radius: 100%;
      height: 12px;
      left: 8px;
      width: 12px;
      position: absolute;
    }
  }

  &__image {
    border-top-left-radius: $default-border-radius;
    border-top-right-radius: $default-border-radius;
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

  &__info {
    align-items: center;
    display: flex;
    justify-content: space-between;
    line-height: 16px;
    margin-top: 14px;
  }

  &__heart {
    align-items: center;
    display: flex;
    border: 1px solid $color-grey-02;
    border-radius: 100%;
    justify-content: center;
    height: 40px;
    width: 40px;

    .icon {
      fill: $color-white;
      stroke: $color-grey-02;
      transition: stroke 0.25s, fill 0.25s;
    }

    &:hover {
      cursor: not-allowed;
    }
  }

  &__price-subtitle {
    color: $color-grey-01;
  }

  &__price-amount {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  }

  &__detail {
    background-color: $color-grey-02;
    border-radius: $default-border-radius;
    margin: 12px $side-margin $side-margin $side-margin;
    padding: 10px 8px;
  }

  &__detail-year {
    font-size: 10px;
    font-weight: 700;
    line-height: 14px;
  }

  &__detail-consumption {
    color: $color-grey-01;
    font-size: 12px;
    margin-top: 6px;
  }

  &--free {
    &.car-card {
      .car-card__heart {
        border-color: $color-grey-03;

        .icon {
          stroke: $color-grey-01;
        }

        &:hover {
          cursor: pointer;

          .icon {
            stroke: $color-orange;
          }
        }
      }

      &--saved {
        .car-card__heart {
          .icon {
            fill: $color-orange;
            stroke: $color-orange;
          }
        }
      }
    }
  }
}
</style>
