import { Car } from "@/modules/car/typing/car";
import CarList from "@/modules/car/components/CarList.vue";
import CarCard from "@/modules/car/components/CarCard.vue";
import { mount, Wrapper } from "@vue/test-utils";
import { getCarsStub } from "./stubs/car.stub";

/**
 * It returns a new wrapper instance of the {@link CarList} component.
 *
 * It renders the `carsStub`.
 *
 * @returns Vue test utils CarList Wrapper.
 */
const getCarListWrapper = function (): Wrapper<Vue> {
  return mount(CarList, {
    propsData: {
      cars: getCarsStub,
    },
  });
};

describe("CarList component", () => {
  it("renders a list of cars", () => {
    const wrapper = getCarListWrapper();

    expect(wrapper.find(".car-list").exists()).toBe(true);

    const carCardsWrappers = wrapper.findAllComponents(CarCard);

    expect(carCardsWrappers).toHaveLength(getCarsStub.length);

    getCarsStub.forEach((car, carIdx) => {
      expect(carCardsWrappers.at(carIdx).attributes("data-id")).toBe(
        car.id.toString()
      );
    });
  });
});
