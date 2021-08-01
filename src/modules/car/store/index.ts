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

  // mutations
  @Mutation
  public setCars(cars: Car[]): void {
    this.cars = cars;
  }

  // actions
  @Action
  public getCars(): void {
    apiGetCars().then((cars: Car[]) => {
      this.context.commit("setCars", cars);
    });
  }
}

export default CarStore;
