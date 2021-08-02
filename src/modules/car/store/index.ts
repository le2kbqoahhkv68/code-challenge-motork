import Vue from "vue";
import Vuex from "vuex";
import { Car } from "../typing/car";

Vue.use(Vuex);

import {
  Action,
  config,
  VuexModule,
  Module,
  Mutation,
} from "vuex-module-decorators";

import store from "@/store";
import { apiGetCars } from "../api/apiGetCars";

config.rawError = true;
@Module({ name: "car", namespaced: true, dynamic: true, store })
class CarStore extends VuexModule {
  // state
  public cars: Car[] = [];
  public savedCarsId: number[] = [];

  // mutations
  @Mutation
  public setCars(cars: Car[]): void {
    this.cars = cars;
  }

  @Mutation saveCar(carId: number): void {
    const carIdx = this.savedCarsId.findIndex((car) => car === carId);
    if (carIdx < 0) {
      this.savedCarsId.push(carId);
    } else {
      this.savedCarsId.splice(carIdx, 1);
    }
  }

  // actions
  @Action
  public getCars(): void {
    apiGetCars().then((cars: Car[]) => {
      this.context.commit("setCars", cars);
    });
  }

  // getters
  public get carsWithSave(): (Car & { saved: boolean })[] {
    return this.cars.map((car) => ({
      ...car,
      saved: this.savedCarsId.includes(car.id),
    }));
  }
}

export default CarStore;
